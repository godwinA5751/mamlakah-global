import { useState } from "react";
import Reveal from "../components/Reveal";
import Logo from "../assets/mamlakah-navLogo.png";
import PrayerImage from "../assets/prayerDesktop.png";
import PrayerImageMobile from "../assets/prayerMobile.png"
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaTimes,
  FaPrayingHands,
} from "react-icons/fa";

export default function PrayerPointForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayer: "",
  });

  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/prayer", formData);

      toast.success(data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        prayer: "",
      });

      setShowWelcome(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Submission failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero h-screen overflow-hidden">

      {/* DESKTOP BACKGROUND IMAGE */}
      <div
        className="hidden lg:block fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${PrayerImage})` }}
      />
      <div className="hidden lg:block fixed inset-0 bg-[#0D1B2A]/20" />

      {/* MOBILE BACKGROUND IMAGE */}
      <div
        className="lg:hidden fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${PrayerImageMobile})` }}
      />
      <div className="lg:hidden fixed inset-0 bg-[#0D1B2A]/70 backdrop-blur-[1px]" />

      {/* PAGE CONTENT */}
      <div className="relative z-10 h-screen flex items-center justify-center p-4  overflow-y-auto lg:overflow-hidden">
        <div className="w-full h-screen mt-5">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-3 lg:mb-3 flex items-center gap-2 text-white hover:text-yellow-600 transition cursor-pointer font-semibold"
          >
            <FaArrowLeft size={14} />
            Back
          </button>

          <div className="flex lg:justify-between overflow-hidden lg:max-h-[calc(100vh-5rem)] lg:p-10">

            {/* LEFT — FORM */}
            <Reveal>
              <div className="bg-white p-7 md:p-10 lg:p-8 lg:max-h-[calc(100vh-5rem)] rounded-4xl lg:w-200">

                <div className="flex items-center gap-3 mb-5 lg:mb-3">
                  <img
                    src={Logo}
                    alt="Mamlakah"
                    className="w-16 h-16 lg:w-12 lg:h-12 object-contain"
                  />
                  <div>
                    <h1 className="text-2xl lg:text-xl font-extrabold tracking-tight text-blue-800">
                      MAMLAKAH
                    </h1>
                    <p className="text-xs text-yellow-600/50 font-semibold tracking-widest">
                      GLOBAL
                    </p>
                  </div>
                </div>

                <div className="mb-5 lg:mb-3">
                  <div className="flex items-center gap-2 text-yellow-600/50 mb-2">
                    <FaPrayingHands size={17} />
                    <span className="text-xs uppercase tracking-[0.25em] font-bold">
                      Prayer Request
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-2xl font-extrabold text-blue-900">
                    How can we
                    <span className="text-yellow-600/50"> pray for you?</span>
                  </h2>

                  <p className="mt-3 lg:mt-2 text-sm md:text-base lg:text-sm leading-7 lg:leading-6 text-blue-900/60">
                    Whatever you're carrying, you don't have to carry it
                    alone. Share your prayer request with us and our
                    prayer team will stand with you in faith.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-3 p-5">

                  <div className="grid lg:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2 lg:mb-1">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-blue-700/20 bg-blue-50/40 px-4 py-3.5 lg:py-2.5 text-blue-900 outline-none transition focus:border-yellow-600 focus:ring-4 focus:ring-yellow-400/10 placeholder:text-blue-900/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2 lg:mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full rounded-xl border border-blue-700/20 bg-blue-50/40 px-4 py-3.5 lg:py-2.5 text-blue-900 outline-none transition focus:border-yellow-600 focus:ring-4 focus:ring-yellow-600/10 placeholder:text-blue-900/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-blue-900 mb-2 lg:mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234..."
                        className="w-full rounded-xl border border-blue-700/20 bg-blue-50/40 px-4 py-3.5 lg:py-2.5 text-blue-900 outline-none transition focus:border-yellow-600 focus:ring-4 focus:ring-yellow-600/10 placeholder:text-blue-900/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="prayer" className="block text-sm font-semibold text-blue-900 mb-2 lg:mb-1">
                        Your Prayer Request
                      </label>
                      <textarea
                        id="prayer"
                        name="prayer"
                        required
                        rows={1}
                        value={formData.prayer}
                        onChange={handleChange}
                        placeholder="Share your prayer request with us..."
                        className="w-full rounded-xl border border-blue-700/20 bg-blue-50/40 px-4 py-3.5 lg:py-2.5 text-blue-900 outline-none resize-none transition focus:border-yellow-600/50 focus:ring-4 focus:ring-yellow-600/10 placeholder:text-blue-900/30"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-800 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-4 lg:py-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Prayer Request...
                      </span>
                    ) : (
                      "Submit Prayer Request"
                    )}
                  </button>

                </form>

                <p className="text-center text-xs text-blue-900/40 mt-4 lg:mt-3">
                  Your prayer request is handled with care and confidentiality.
                </p>

              </div>
            </Reveal>

            {/* RIGHT — PRAYING HANDS */}
            <Reveal>
              <div className="hidden lg:flex relative h-full items-end overflow-hidden">

                <div className="relative z-10 p-8 w-full">
                  <div className="max-w-md">

                    <div className="inline-flex items-center gap-2 bg-yellow-600 text-[#0D1B2A] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                      <FaPrayingHands />
                      We Are Praying With You
                    </div>

                    <h2 className="text-3xl font-extrabold text-white mt-4 leading-tight">
                      Your prayer matters.
                    </h2>

                    <p className="text-white/75 mt-3 leading-6 text-sm">
                      There is power in coming together in faith.
                      Whatever you're trusting God for, know that
                      you are not standing alone.
                    </p>

                    <div className="w-20 h-1 bg-yellow-600 rounded-full mt-5" />

                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showWelcome && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-5">

          <div
            className="absolute inset-0 bg-[#0D1B2A]/75 backdrop-blur-md"
            onClick={() => setShowWelcome(false)}
          />

          <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl p-8 text-center animate-[modalIn_0.4s_ease-out]">

            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-blue-900/40 hover:bg-blue-50 hover:text-blue-900 transition cursor-pointer"
            >
              <FaTimes size={15} />
            </button>

            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheckCircle size={46} className="text-green-500" />
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-blue-900">
              Prayer Received 🙏
            </h2>

            <p className="mt-4 text-blue-900/70 leading-7">
              Thank you for trusting us with your prayer request.
              We believe that God hears every sincere prayer, and
              our prayer team will stand with you in faith.
            </p>

            <p className="mt-3 text-blue-900/70 leading-7">
              Keep believing, keep trusting, and keep walking in faith.
              You are not alone on this journey.
            </p>

            <button
              type="button"
              onClick={() => {
                setShowWelcome(false);
                navigate("/");
              }}
              className="mt-7 w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition cursor-pointer"
            >
              Return to Mamlakah
            </button>

          </div>
        </div>
      )}

    </section>
  );
}