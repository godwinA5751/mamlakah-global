import { useState } from "react";
import Reveal from "../components/Reveal"
import Logo from "../assets/mamlakah-navLogo.png";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { 
  FaArrowLeft,
  FaCheckCircle,
  FaWhatsapp,
  FaTimes,
 } from "react-icons/fa";

export default function BioDataForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    hobbies: "",
    occupation: "",
    stateOfOrigin: "",
    dislikes: "",
    talent: "",
    passion: "",
    nationality: "",
    country: "",
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
  
      const { data } = await api.post("/biodata", formData);
  
      toast.success(data.message);
  
      setFormData({
        name: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
        hobbies: "",
        occupation: "",
        stateOfOrigin: "",
        dislikes: "",
        talent: "",
        passion: "",
        nationality: "",
        country: "",
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
    <section className="hero overflow-hidden">
      <div className="md:max-w-6xl w-full px-5 mx-auto scroll h-[calc(100vh-44px)] overflow-y-auto scrollbar-hide mt-11 pt-30 pb-8">

        {/* Header */}

        <div className="fixed top-8 left-4 right-4  z-50 rounded-3xl font-sans bg-white/10 backdrop-blur-sm flex items-center justify-between pr-3 md:pl-0 lg:px-5 shadow-2xl">
        
          <div className="flex items-center justify-between gap-4 px-5 py-3">
            <img src={Logo} alt="Mishpacha Logo" onClick={() => navigate("/")} loading="lazy" className="h-20 cursor-pointer" />
            <span className="-ml-5">
              <span className="text-blue-800 font-extrabold text-2xl lg:text-[30px] tracking-tight ml-3">MAMLAKAH</span>
              <div className="flex items-center justify-between">
                <button onClick={() => navigate("/")} className="text-blue-800 font-bold text-sm md:ml-3 cursor-pointer"><FaArrowLeft /></button>
                <span className="block text-sm text-yellow-600/50 font-medium tracking-wide italic">
                  ...exclusive & limitless
                </span>
              </div>
            </span>
          </div>
          
          <span className="text-xs font-bold text-blue-800 py-1 px-2 rounded-2xl bg-blue-500/30">
              Bio Data
          </span>
        </div>

        <p className="bg-linear-to-r from-blue-600 to-blue-800 py-2 px-4 md:p-8 rounded-tl-2xl rounded-tr-2xl text-center text-white border border-[#C9A84C]/20">
          Kindly complete this form accurately. The information provided
          helps us know you better and serve you effectively.
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-sm rounded-b-3xl p-8 md:p-12 shadow-2xl space-y-12"
        >

          {/* Personal Information */}
          
          <div>

            <Reveal>
              <h3 className="text-2xl font-bold text-blue-800 mb-6 border-l-4 border-yellow-600/50 pl-4">
                Personal Information
              </h3>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">

              <Reveal>
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Input
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Input
                  label="WhatsApp Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Input
                  label="Nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Input
                  label="State of Origin"
                  name="stateOfOrigin"
                  value={formData.stateOfOrigin}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <div className="md:col-span-2">
                  <Textarea
                    label="Home Address"
                    name="address"
                    rows={4}
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </Reveal>

            </div>

          </div>

          {/* Lifestyle */}

          <div>

            <Reveal>
              <h3 className="text-2xl font-bold text-blue-800 mb-6 border-l-4 border-yellow-600/50 pl-4">
                Lifestyle & Interests
              </h3>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">

              <Reveal>
                <Input
                  label="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Input
                  label="Connecting From (Country)"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Textarea
                  label="Hobbies"
                  name="hobbies"
                  rows={4}
                  value={formData.hobbies}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Textarea
                  label="Dislikes"
                  name="dislikes"
                  rows={4}
                  value={formData.dislikes}
                  onChange={handleChange}
                />
              </Reveal>

            </div>

          </div>

          {/* Calling */}

          <div>

            <Reveal>
              <h3 className="text-2xl font-bold text-blue-800 mb-6 border-l-4 border-yellow-600/50 pl-4">
                Calling & Purpose
              </h3>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">

              <Reveal>
                <Textarea
                  label="Talent / Gift"
                  name="talent"
                  rows={5}
                  value={formData.talent}
                  onChange={handleChange}
                />
              </Reveal>

              <Reveal>
                <Textarea
                  label="Passion / Dreams"
                  name="passion"
                  rows={5}
                  value={formData.passion}
                  onChange={handleChange}
                />
              </Reveal>

            </div>

          </div>

          {/* Submit */}

          <Reveal>
            <div className="pt-5">

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 hover:bg-blue-700 disabled:bg-blue-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition duration-300 text-lg shadow-lg hover:scale-[1.01] cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Bio Data"}
              </button>

            </div>
          </Reveal>

        </form>

      </div>
      {showWelcome && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-5">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-[#0D1B2A]/70 backdrop-blur-md"
            onClick={() => setShowWelcome(false)}
          />

          {/* MODAL */}
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-3xl
              bg-white
              shadow-2xl
              p-8
              text-center
              animate-[modalIn_0.4s_ease-out]
            "
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              className="
                absolute
                top-4
                right-4
                w-9
                h-9
                rounded-full
                flex
                items-center
                justify-center
                text-blue-900/50
                hover:bg-blue-50
                hover:text-blue-900
                transition
                cursor-pointer
              "
            >
              <FaTimes size={16} />
            </button>


            {/* SUCCESS ICON */}
            <div className="flex justify-center mb-5">

              <div className="
                w-20
                h-20
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
              ">
                <FaCheckCircle
                  className="text-green-500"
                  size={48}
                />
              </div>

            </div>


            {/* TITLE */}
            <h2 className="
              text-3xl
              font-extrabold
              text-blue-900
            ">
              Welcome to Mamlakah! 🎉
            </h2>


            {/* MESSAGE */}
            <p className="
              mt-4
              text-blue-900/70
              leading-7
            ">
              Thank you for taking the time to share your story with us.
              Your journey, gifts, and dreams matter, and we're excited
              to have you as part of the Mamlakah family.
            </p>


            <p className="
              mt-3
              text-blue-900/70
              leading-7
            ">
              The journey is better when we walk it together.
              Join our WhatsApp platform to stay connected, receive
              updates, and grow alongside the community.
            </p>


            {/* WHATSAPP BUTTON */}
            <a
              href="https://chat.whatsapp.com/Etv8Lr0bDlZLKG5OrOW4cE?s=cl&p=a&ilr=1"
              rel="noopener noreferrer"
              className="
                mt-7
                w-full
                flex
                items-center
                justify-center
                gap-3
                bg-green-500
                hover:bg-green-600
                text-white
                font-bold
                py-4
                rounded-xl
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <FaWhatsapp size={24} />

              Join Our WhatsApp Community
            </a>


            {/* CONTINUE */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                mt-4
                text-sm
                font-semibold
                text-blue-600
                hover:text-blue-800
                transition
                cursor-pointer
              "
            >
              Continue to Mamlakah →
            </button>

          </div>

        </div>
      )}
    </section>
  );
}

function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-sm font-semibold text-blue-900 mb-2">
        {label}
      </label>

      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl text-blue-950 border border-blue-600/30 px-5 py-3 outline-none transition focus:border-amber-200 focus:ring-4 focus:ring-amber-200/20"
      />

    </div>
  );
}

function Textarea({
  label,
  rows,
  name,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="block text-sm font-semibold text-blue-900 mb-2">
        {label}
      </label>

      <textarea
        required
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl text-blue-950 border border-blue-600/30 px-5 py-3 outline-none resize-none transition focus:border-amber-200 focus:ring-4 focus:ring-amber-200/20"
      />

    </div>
  );
}