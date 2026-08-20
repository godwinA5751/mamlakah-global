import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Lock,
  User,
  ShieldCheck,
} from "lucide-react";

import Logo from "../assets/mamlakah-navLogo.png";
import api from "../services/api";
import Reveal from "../components/Reveal";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await api.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);

      toast.success("Logged in successfully");

      navigate("/admin");
    } catch(err) {
      toast.error(err ? err.response?.data?.message : "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero h-screen overflow-hidden">
      <div className="mx-auto max-w-7xl h-full grid lg:grid-cols-2 place-items-center gap-12">

        {/* LEFT SIDE */}
        <Reveal>
          <div className="w-full max-w-md mx-auto lg:mx-0 mt-10 md:mt-15 p-2">

            <form
              onSubmit={login}
              className="rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-2xl
              pt-8 px-8"
            >

              {/* Logo */}

              <div className="flex flex-col items-center">

                <img
                  src={Logo}
                  alt="Mishpacha"
                  className="w-24 h-24 object-contain"
                />

                <h1 className="mt-3 text-3xl font-extrabold text-blue-800">
                  MAMLAKAH
                </h1>

                <p className="text-yellow-600/50 italic tracking-wide">
                  Admin Portal
                </p>

                <div className="mt-5 flex items-center gap-2 text-blue-900">

                  <ShieldCheck
                    size={18}
                    className="text-yellow-600/50"
                  />

                  <span className="text-sm">
                    Authorized Personnel Only
                  </span>

                </div>

              </div>

              {/* Username */}

              <div className="mt-10">

                <label className="mb-2 block text-sm font-semibold text-blue-900">
                  Username
                </label>

                <div className="flex items-center rounded-xl border border-blue-700/20 bg-white/20 px-4">

                  <User
                    size={18}
                    className="text-yellow-600/50"
                  />

                  <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-blue-800/40 text-blue-900"
                  />

                </div>

              </div>

              {/* Password */}

              <div className="mt-6">

                <label className="mb-2 block text-sm font-semibold text-blue-900">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-blue-700/20 bg-white/20 px-4">

                  <Lock
                    size={18}
                    className="text-yellow-600/50"
                  />

                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="w-full bg-transparent px-3 py-4 outline-none placeholder:text-blue-800/40 text-blue-900"
                  />

                </div>

              </div>

              {/* Button */}

              <button
                disabled={loading}
                type="submit"
                className="mt-10 w-full rounded-xl
                bg-yellow-600/50
                py-4
                font-bold
                text-blue-900
                transition
                hover:scale-[1.02]
                hover:bg-yellow-500/50
                hover:shadow-lg
                hover:shadow-yellow-400/30
                active:scale-95
                cursor-pointer mb-8
                disabled:opacity-50
                disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

            </form>

          </div>
        </Reveal>

        {/* RIGHT SIDE */}
        
        <Reveal>
          <div className="hidden lg:flex items-center justify-center">
        
            <div className="max-w-md">
        
              {/* Logo */}
        
              <div className="relative flex justify-center">
        
                <div className="absolute w-56 h-56 rounded-full bg-amber-300/20 blur-3xl" />
        
                <img
                  src={Logo}
                  alt="Mishpacha"
                  className="relative w-52 drop-shadow-2xl"
                />
        
              </div>
        
              {/* Text */}
        
              <div className="mt-6 text-center">
        
                <h2 className="text-4xl font-extrabold leading-tight text-blue-800">
                  Welcome to
                  <span className="block text-yellow-600/50">
                    Admin Dashboard
                  </span>
                </h2>
        
                <p className="mt-3 text-blue-900/80 text-sm leading-7">
                  Manage registrations, review member bio data,
                  and oversee the Mishpacha community from one secure dashboard.
                </p>
        
              </div>
        
              {/* Features */}
        
              <div className="mt-8 space-y-3">
        
                <div className="rounded-xl bg-white border border-white/20 px-4 py-3 flex items-center gap-3 shadow-2xl">
        
                  <div className="w-10 h-10 rounded-lg bg-blue-600/50 flex items-center justify-center text-white">
                    👥
                  </div>
        
                  <div>
                    <h3 className="font-semibold text-blue-800 text-sm">
                      Members
                    </h3>
                    <p className="text-xs text-blue-900/70">
                      View and manage registered members.
                    </p>
                  </div>
        
                </div>
        
                <div className="rounded-xl bg-white border border-white/20 px-4 py-3 flex items-center gap-3 shadow-2xl">
        
                  <div className="w-10 h-10 rounded-lg bg-yellow-600/50 flex items-center justify-center">
                    📋
                  </div>
        
                  <div>
                    <h3 className="font-semibold text-blue-800 text-sm">
                      Bio Data
                    </h3>
                    <p className="text-xs text-blue-900/70">
                      Review submitted registration forms.
                    </p>
                  </div>
        
                </div>
        
                <div className="rounded-xl bg-white border border-white/20 px-4 py-3 flex items-center gap-3 shadow-2xl">
        
                  <div className="w-10 h-10 rounded-lg bg-green-600/50 flex items-center justify-center text-white">
                    🔒
                  </div>
        
                  <div>
                    <h3 className="font-semibold text-blue-800 text-sm">
                      Secure Access
                    </h3>
                    <p className="text-xs text-blue-900/70">
                      Protected administrator authentication.
                    </p>
                  </div>
        
                </div>
        
              </div>
        
            </div>
        
          </div>
        </Reveal>
      </div>
    </section>
  );
}