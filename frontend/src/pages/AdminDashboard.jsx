import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import { Trash, LucideRefreshCw } from "lucide-react";


export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/biodata");

      setUsers(data.data);
    } catch (error) {
      toast.error(error || "Couldn't load users.");
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (id) => {
    try {
      const { data } = await api.get(`/biodata/${id}`);
  
      setSelectedUser(data.data);
    } catch {
      toast.error("Unable to load user.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/biodata/${id}`);

      setDeleteId(null);
  
      toast.success("Deleted successfully");
  
      await fetchUsers();
    } catch(e) {
      toast.error(e?.message || "Delete failed.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="hero p-8">

      <div className="max-w-7xl mx-auto overflow-hidden ">

        <div className="fixed p-4 z-50 bg-white rounded-2xl flex justify-between items-center top-8 left-5 right-5">

          <div>

            <h1 className="lg:text-2xl md:text-xl text-lg font-bold text-blue-800">
              Mamlakah Dashboard
            </h1>

            <p className="text-yellow-600/50">
              Registered Members
            </p>

          </div>
          <LucideRefreshCw
            onClick={() => {
              setRefreshing(true);
              fetchUsers();
              setTimeout(() => {
                setRefreshing(false);
              }, 500);
            }}
            className={`inline-block cursor-pointer text-blue-800 font-bold text-2xl ${refreshing ? "spin" : ""}`}
            
          />
        </div>

        <div className=" h-[calc(100vh-108px)] mt-11 pt-20 rounded-xl shadow-2xl">
          <div className="bg-white rounded-2xl h-[calc(100vh-220px)] overflow-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">S/N</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Name</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Email</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Phone</th>
                  <th className="sticky top-0 bg-blue-800 p-4 text-left text-white">Country</th>
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
                        <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
                      </td>

                      <td className="p-4 border-b border-gray-200">
                        <div className="flex justify-center">
                          <div className="h-9 w-9 rounded-full bg-gray-200 animate-pulse" />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="p-8 text-center text-gray-500 border-b border-gray-200"
                    >
                      No members found
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-blue-50 transition cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        getUser(user._id);
                      }}
                    >
                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        <span className="px-3 bg-blue-300/20 rounded-full">
                          {index + 1 < 10
                            ? `0${index + 1}`
                            : index + 1}
                        </span>
                      </td>

                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        {user.name}
                      </td>

                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        {user.email}
                      </td>

                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        {user.phone}
                      </td>

                      <td className="p-4 text-blue-900 border-b border-blue-200">
                        {user.country}
                      </td>

                      <td className="p-4 border-b border-blue-200">
                        <div className="flex justify-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteId(user._id);
                            }}
                            className="
                              text-red-500
                              hover:bg-red-50
                              p-2
                              rounded-lg
                              transition
                              cursor-pointer
                            "
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
            <span>Members: {users.length}</span>
          </div>
        </div>
        {selectedUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-99 px-3">
        
            <div className="bg-white w-full max-w-2xl rounded-2xl p-8">
        
              <div className="flex justify-between mb-6">
        
                <h2 className="text-2xl font-bold text-blue-800">
                  Member Information
                </h2>
        
                <button
                  className="cursor-pointer"
                  onClick={() => setSelectedUser(null)}
                >
                  ✕
                </button>
        
              </div>
        
              <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2">
              
                {/* Personal Information */}
                <div>
              
                  <h3 className="text-xl font-bold text-blue-800 border-l-4 border-yellow-600/40 pl-3 mb-5">
                    Personal Information
                  </h3>
              
                  <div className="grid md:grid-cols-2 gap-5">
              
                    <Detail label="Full Name" value={selectedUser.name} />
              
                    <Detail
                      label="Date of Birth"
                      value={new Date(selectedUser.dob).toLocaleDateString()}
                    />
              
                    <Detail label="Email Address" value={selectedUser.email} />
              
                    <Detail label="WhatsApp Number" value={selectedUser.phone} />
              
                    <Detail
                      label="Nationality"
                      value={selectedUser.nationality}
                    />
              
                    <Detail
                      label="State of Origin"
                      value={selectedUser.stateOfOrigin}
                    />
              
                    <div className="md:col-span-2">
                      <Detail
                        label="Home Address"
                        value={selectedUser.address}
                        multiline
                      />
                    </div>
              
                  </div>
              
                </div>
              
                {/* Lifestyle & Interests */}
              
                <div>
              
                  <h3 className="text-xl font-bold text-blue-800 border-l-4 border-yellow-600/40 pl-3 mb-5">
                    Lifestyle & Interests
                  </h3>
              
                  <div className="grid md:grid-cols-2 gap-5">
              
                    <Detail
                      label="Occupation"
                      value={selectedUser.occupation}
                    />
              
                    <Detail
                      label="Connecting From"
                      value={selectedUser.country}
                    />
              
                    <Detail
                      label="Hobbies"
                      value={selectedUser.hobbies}
                      multiline
                    />
              
                    <Detail
                      label="Dislikes"
                      value={selectedUser.dislikes}
                      multiline
                    />
              
                  </div>
              
                </div>
              
                {/* Calling & Purpose */}
              
                <div>
              
                  <h3 className="text-xl font-bold text-blue-800 border-l-4 border-yellow-600/40 pl-3 mb-5">
                    Calling & Purpose
                  </h3>
              
                  <div className="grid md:grid-cols-2 gap-5">
              
                    <Detail
                      label="Talent / Gift"
                      value={selectedUser.talent}
                      multiline
                    />
              
                    <Detail
                      label="Passion / Dreams"
                      value={selectedUser.passion}
                      multiline
                    />
              
                  </div>
              
                </div>
              
              </div>
            </div>
        
          </div>
        )}

        {deleteId && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        
            <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">
        
              {/* Header */}
              <div className="bg-red-500 p-6 text-center">
        
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <Trash size={28} className="text-red-500" />
                </div>
        
                <h2 className="mt-4 text-2xl font-bold text-white">
                  Delete Member?
                </h2>
        
              </div>
        
              {/* Body */}
              <div className="p-6">
        
                <p className="text-center text-slate-600">
                  This action cannot be undone.
                </p>
        
                <p className="mt-2 text-center text-slate-500 text-sm">
                  Are you sure you want to permanently remove this member from the database?
                </p>
        
                <div className="mt-8 flex justify-end gap-3">
        
                  <button
                    onClick={() => setDeleteId(null)}
                    className="cursor-pointer rounded-xl border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    Cancel
                  </button>
        
                  <button
                    onClick={() => deleteUser(deleteId)}
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

      <p
        className={`text-slate-800 ${
          multiline ? "whitespace-pre-wrap" : ""
        }`}
      >
        {value || "-"}
      </p>

    </div>
  );
}