import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Trash,
  RefreshCw,
  Eye,
  CheckCircle2,
  X,
} from "lucide-react";

export default function AdminPrayers() {
  const navigate = useNavigate();

  const [prayers, setPrayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPrayer, setSelectedPrayer] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [updating, setUpdating] = useState(false);

  const fetchPrayers = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/prayer");

      setPrayers(data.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Couldn't load prayer requests."
      );
    } finally {
      setLoading(false);
    }
  };

  const getPrayer = async (id) => {
    try {
      const { data } = await api.get(`/prayer/${id}`);

      setSelectedPrayer(data.data);
    } catch {
      toast.error("Unable to load prayer request.");
    }
  };

  const markReviewed = async (id) => {
    try {
      setUpdating(true);

      const { data } = await api.patch(`/prayer/${id}/reviewed`);

      toast.success(data.message);

      setSelectedPrayer(data.data);

      await fetchPrayers();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Couldn't update status.");
    } finally {
      setUpdating(false);
    }
  };

  const deletePrayer = async (id) => {
    try {
      await api.delete(`/prayer/${id}`);

      setDeleteId(null);

      toast.success("Deleted successfully");

      await fetchPrayers();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Delete failed.");
    }
  };

  useEffect(() => {
    fetchPrayers();
  }, []);

  const newCount = prayers.filter((p) => p.status === "New").length;

  return (
    <section className="hero p-8">

      <div className="max-w-7xl mx-auto overflow-hidden">

        <div className="fixed p-4 z-50 bg-white rounded-2xl flex justify-between items-center top-8 left-5 right-5">

          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate("/admin")}
              className="text-blue-800 hover:text-yellow-600 transition cursor-pointer"
            >
              <ArrowLeft size={22} />
            </button>

            <div>
              <h1 className="lg:text-2xl md:text-xl text-lg font-bold text-blue-800">
                Prayer Requests
              </h1>

              <p className="text-yellow-600/50">
                {newCount > 0
                  ? `${newCount} new request${newCount > 1 ? "s" : ""}`
                  : "All caught up"}
              </p>
            </div>

          </div>

          <RefreshCw
            onClick={() => {
              setRefreshing(true);
              fetchPrayers();
              setTimeout(() => {
                setRefreshing(false);
              }, 500);
            }}
            className={`inline-block cursor-pointer text-blue-800 font-bold text-2xl ${refreshing ? "spin" : ""}`}
          />

        </div>

        <div className="h-[calc(100vh-108px)] mt-11 pt-20 rounded-xl shadow-2xl">
          <div className="bg-white rounded-2xl h-[calc(100vh-220px)] overflow-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">S/N</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Name</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Email</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Phone</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Status</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-center text-white">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  [...Array(8)].map((_, index) => (
                    <tr key={index}>
                      <td className="p-4 border-b border-gray-200">
                        <div className="h-4 w-8 bg-gray-200 rounded-full animate-pulse" />
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="h-4 w-56 bg-gray-200 rounded animate-pulse" />
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="h-4 w-20 bg-gray-200 rounded-full animate-pulse" />
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex justify-center gap-2">
                          <div className="h-9 w-9 rounded-full bg-gray-200 animate-pulse" />
                          <div className="h-9 w-9 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : prayers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="p-8 text-center text-gray-500 border-b border-gray-200"
                    >
                      No prayer requests found
                    </td>
                  </tr>
                ) : (
                  prayers.map((prayer, index) => (
                    <tr
                      key={prayer._id}
                      className="hover:bg-blue-50 transition cursor-pointer"
                      onClick={() => getPrayer(prayer._id)}
                    >
                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        <span className="px-3 bg-blue-300/20 rounded-full">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      </td>

                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        {prayer.name}
                      </td>

                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        {prayer.email}
                      </td>

                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        {prayer.phone}
                      </td>

                      <td className="p-4 border-b border-blue-200">
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                            prayer.status === "New"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {prayer.status}
                        </span>
                      </td>

                      <td className="p-4 border-b border-blue-200">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              getPrayer(prayer._id);
                            }}
                            className="text-blue-800 hover:bg-blue-50 p-2 rounded-lg transition cursor-pointer"
                          >
                            <Eye size={20} />
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteId(prayer._id);
                            }}
                            className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition cursor-pointer"
                          >
                            <Trash size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="text-center p-3 text-blue-800 font-bold">
            <span>Total Requests: {prayers.length}</span>
          </div>
        </div>

        {/* VIEW MODAL */}
        {selectedPrayer && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-99 px-3">

            <div className="bg-white w-full max-w-2xl rounded-2xl p-8">

              <div className="flex justify-between items-start mb-6">

                <div>
                  <h2 className="text-2xl font-bold text-blue-800">
                    Prayer Request
                  </h2>

                  <span
                    className={`inline-block mt-2 text-xs font-bold px-3 py-1.5 rounded-full ${
                      selectedPrayer.status === "New"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {selectedPrayer.status}
                  </span>
                </div>

                <button
                  className="cursor-pointer"
                  onClick={() => setSelectedPrayer(null)}
                >
                  <X size={20} />
                </button>

              </div>

              <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-2">

                <div className="grid md:grid-cols-2 gap-5">

                  <Detail label="Full Name" value={selectedPrayer.name} />

                  <Detail label="Email Address" value={selectedPrayer.email} />

                  <Detail label="Phone Number" value={selectedPrayer.phone} />

                  <Detail
                    label="Submitted"
                    value={new Date(selectedPrayer.createdAt).toLocaleString()}
                  />

                </div>

                <Detail
                  label="Prayer Request"
                  value={selectedPrayer.prayer}
                  multiline
                />

              </div>

              {selectedPrayer.status === "New" && (
                <button
                  onClick={() => markReviewed(selectedPrayer._id)}
                  disabled={updating}
                  className="
                    mt-6
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-blue-800
                    hover:bg-blue-700
                    disabled:bg-blue-400
                    disabled:cursor-not-allowed
                    text-white
                    font-bold
                    py-3.5
                    rounded-xl
                    transition
                    cursor-pointer
                  "
                >
                  <CheckCircle2 size={18} />
                  {updating ? "Updating..." : "Mark as Reviewed"}
                </button>
              )}

            </div>

          </div>
        )}

        {/* DELETE CONFIRM MODAL */}
        {deleteId && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">

            <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">

              <div className="bg-red-500 p-6 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <Trash size={28} className="text-red-500" />
                </div>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  Delete Prayer Request?
                </h2>

              </div>

              <div className="p-6">

                <p className="text-center text-slate-600">
                  This action cannot be undone.
                </p>

                <p className="mt-2 text-center text-slate-500 text-sm">
                  Are you sure you want to permanently remove this prayer request?
                </p>

                <div className="mt-8 flex justify-end gap-3">

                  <button
                    onClick={() => setDeleteId(null)}
                    className="cursor-pointer rounded-xl border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => deletePrayer(deleteId)}
                    className="cursor-pointer rounded-xl bg-red-500 px-5 py-2.5 font-semibold text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}

function Detail({ label, value, multiline = false }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">

      <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
        {label}
      </p>

      <p className={`text-slate-800 ${multiline ? "whitespace-pre-wrap" : ""}`}>
        {value || "-"}
      </p>

    </div>
  );
}