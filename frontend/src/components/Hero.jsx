import Logo from "../assets/mamlakah-heroLogo.png";
import { Target, Eye, Compass, Quote } from "lucide-react";
import useInView from "../hooks/useInView";
import Reveal from "./Reveal"

export default function Hero() {
  const [ref, inView] = useInView(0.3);
  const motto = <Quote className="w-8 h-8 text-yellow-500" />
  const vision = <Eye className="w-8 h-8 text-blue-600" />
  const mission = <Target className="w-8 h-8 text-yellow-500" />
  const purpose = <Compass className="w-8 h-8 text-blue-600" />

  const values = [
    { icon: motto, name: "Motto", ref: "Exclusive & Limitless! Matthew 25:29", rank: "odd" },
    { icon: vision, name: "Vision", ref: "Building capacity with balance through virtues", rank: "even" },
    { icon: mission, name: "Mission", ref: "Eternity impact Matthew 28:18-20", rank: "odd" },
    { icon: purpose, name: "Purpose", ref: "Dominance & Leadership — Gen 1:26–28", rank: "even" }
  ];
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex items-center scroll-mt-32 px-6 pt-25 md:pt-15 lg:pt-5 font-sans"
      >
        <div className=" mx-auto items-center">
          <div className="flex justify-between">
            <Reveal>
              <div className="md:mt-10">
                <div className="bg-white lg:w-60 w-70 flex items-center gap-2 px-4 py-2 rounded-3xl">
                  <div className="border-7 border-yellow-600/50 rounded-full"></div>
                  <div className="text-blue-800 font-bold">Welcome to Mamlakah</div>
                </div>

                <div className="flex flex-col mt-8 font-extrabold">
                  <span className="text-blue-900 text-3xl">✦ A Rada</span>
                  <span className="text-4xl">
                    <span className="text-blue-800">Global</span>
                    <span className="text-yellow-600/50"> Family</span></span>
                </div>

                <p className="text-blue-950 tracking-[0.25em] uppercase mt-4 mb-2">
                  Teaching · Community · Transformation
                </p>

                <p className="italic text-blue-950 border-l-2 border-blue-900 pl-4 mb-8">
                  "Where there is no vision, the people perish..." <br />
                  — Proverbs 29:18
                </p>

                <div className="flex gap-4 flex-wrap">

                  <a
                    href="#community"
                    className="bg-blue-800 rounded-4xl shadow-2xl text-white font-bold px-8 py-4 tracking-widest hover:bg-transparent hover:border hover:border-blue-800 hover:text-blue-800 transition-all delay-100"
                  >
                    Our Work
                  </a>

                  <a
                    href="#cta"
                    className="bg-white rounded-4xl shadow-2xl text-blue-800 font-bold px-8 py-4 tracking-wider hover:bg-blue-800 hover:text-white transition-all delay-100"
                  >
                    Join the Family
                  </a>

                </div>
              </div>
            </Reveal>
            <div className={`
              image hidden md:block
              transition-all duration-700 ease-out will-change-transform
              ${inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"}
              `} ref={ref}
            >
              <img src={Logo} alt="Mamlakah Logo" loading="lazy" className="" />
            </div>
          </div>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:pr-13 mt-10 md:-mt-10 pt-0 md:pt-20">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white mb-4 p-2 md:p-7 flex gap-2 flex-col shadow-2xl transition transform hover:-translate-y-1 rounded-2xl cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className={` 
                    rounded-full p-3
                    ${v.rank === "odd" ? "bg-yellow-100" : "bg-blue-100"}  
                  `}
                    >
                      {v.icon}
                    </div>
                    <div className={`
                      ${v.rank === "odd" ? "text-yellow-600" : "text-blue-800"}
                    `}
                    >
                      {v.name}
                    </div>
                  </div>
                  <div className="text-sm text-blue-900 py-2 pl-1 mb-1">
                    {v.ref}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </section>
    </div>
  )
}
