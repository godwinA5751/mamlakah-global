import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section
      id="cta"
      className="text-center py-24 px-6 scroll-mt-32 relative overflow-hidden"
    >
      <Reveal>

        <div className="text-yellow-600/50 tracking-[0.4em] text-xs mb-5 uppercase font-serif">
          ✦ Become Part of MAMLAKAH ✦
        </div>

        <h2 className="text-blue-800 text-[clamp(2rem,5vw,4rem)] font-bold mb-4 font-serif">
          Step Into Your <br />
          <em className="text-yellow-600/50 italic">
            Purpose & Influence
          </em>
        </h2>

        <p className="text-blue-900/60 max-w-xl mx-auto leading-8 mb-10 text-lg font-serif">
          MAMLAKAH is a community of women growing in identity, building
          capacity, and walking boldly in their God-given purpose. Together,
          we learn, grow, lead, and create meaningful impact in our families,
          communities, and nations. Your journey begins here.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={() => navigate("/join")}
            className="
              bg-blue-800
              shadow-lg
              text-white
              rounded-3xl
              px-8
              py-4
              font-bold
              hover:bg-transparent
              hover:border
              hover:border-blue-800
              hover:text-blue-800
              transition-all
              duration-300
              cursor-pointer
            "
          >
            Connect With Us
          </button>

          <button
            onClick={() => navigate("/prayer")}
            className="
              bg-white
              shadow-lg
              text-blue-800
              font-bold
              px-8
              py-4
              rounded-3xl
              hover:bg-blue-800
              hover:text-white
              transition-all
              duration-300
              cursor-pointer
            "
          >
            Send a Prayer Request
          </button>

        </div>

      </Reveal>
    </section>
  );
}