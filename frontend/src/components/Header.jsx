import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import Logo from "../assets/mamlakah-navLogo.png";
import { useNavigate } from "react-router-dom";

const links = [
  { name: 'Home', ref: '#home' },
  { name: 'Vision', ref: '#vision' },
  { name: 'Values', ref: '#values' },
  { name: 'Mandate', ref: '#mandate' },
  { name: 'Community', ref: '#community' },
  { name: 'Ethics', ref: '#ethics' },
]
export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal>
      <header className="fixed top-0 left-0 z-50">
        <nav className="fixed top-8 left-5 right-5  z-50 rounded-3xl font-sans bg-white/10 backdrop-blur-sm flex items-center justify-between px-3 md:pl-0 lg:px-5 shadow-2xl">
          {/* LOGO */}
          <a onClick={() => navigate("/")} className="flex items-center gap-4 cursor-pointer">
            <img src={Logo} alt="Mamlakah Logo" loading="lazy" className="h-20" />
            <span className="-ml-5">
              <span className="text-blue-800 font-extrabold text-2xl lg:text-[30px] tracking-tight">MAMLAKAH</span>
              <span className="block text-sm text-yellow-600/60 font-medium tracking-wide italic text-right">
                ...exclusive & limitless
              </span>
            </span>
          </a>
  
          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 md:gap-4 lg:gap-6 text-[0.82rem] font-bold tracking-widest">
            {links.map((link) => {
              const isActive = activeSection === link.ref.replace('#', '')
              return (
                <li key={link.name}><a href={link.ref} className={`${isActive ? "text-blue-600 font-extrabold text-sm" : "text-blue-900"} hover:text-blue-800 transition-colors`}>{link.name}</a></li>
              )
            })}
            <li>
              <a href="#cta" className="bg-blue-600 text-white px-5 py-2 md:p-2 lg:px-5 font-bold font-sans rounded-3xl hover:bg-blue-500">
                Join Us
              </a>
            </li>
          </ul>
  
          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-800 md:hidden text-2xl font-extrabold cursor-pointer"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>
  
        {/* Mobile Menu */}
  
        <aside
          className={`
            md:hidden 
            fixed top-0 left-0 h-[calc(100%-32px)] w-64
            bg-white/20 backdrop-blur-md
            shadow-lg rounded-t-3xl rounded-br-3xl p-6 pb-0
            flex flex-col justify-between
            transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}
            z-50 translate-y-8
          `} >
          <div className="text-right pb-4">
            {links.map((link) => {
              const isActive = activeSection === link.ref.replace('#', '')
              return (<a
                key={link.name}
                href={link.ref}
                className={`block w-full cursor-pointer ${isActive ? "bg-blue-200/10 backdrop-blur-md rounded-3xl shadow-2xl text-blue-600 font-extrabold" : "text-blue-900 text-sm"} p-4 my-2 font-bold`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>)
            })}
            <div className="mt-7 text-center py-3 rounded-3xl">
              <a href="#cta" className="bg-blue-600 text-white px-15 shadow-2xl py-4 font-bold font-sans rounded-3xl hover:bg-blue-500"
                onClick={() => setOpen(false)}>
                Join Us
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <img src={Logo} alt="Mamlakah Logo" loading="lazy" className="h-20" />
            <span className="-ml-5">
              <span className="text-blue-800 font-extrabold text-2xl lg:text-[30px] tracking-tight">MAMLAKAH</span>
              <span className="block text-sm font-medium tracking-wide italic text-right text-yellow-700/60">
                ...exclusive & limitless
              </span>
            </span>
          </div>
        </aside>
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
  
      </header>
    </Reveal>
  );
}