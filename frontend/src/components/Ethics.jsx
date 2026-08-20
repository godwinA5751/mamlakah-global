import useInView from "../hooks/useInView";
import Banner from "./Banner";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Capacity",
    description:
      "Developing every God-given gift, skill, and potential so that every woman can grow into the fullness of her purpose."
  },
  {
    title: "Stewardship",
    description:
      "Using every opportunity, relationship, resource, and sphere of influence with wisdom, excellence, and responsibility."
  }
];

export default function Ethics() {
  const [ref, isVisible] = useInView(0.3);

  return (
    <section
      id="ethics"
      className="lg:h-screen pt-24 scroll-mt-32 px-6 flex flex-col justify-center items-center"
    >

      <div className="max-w-6xl my-10 mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <Reveal>
          <div>

            <div className="text-yellow-600/50 tracking-widest text-xl font-bold mb-4">
              Our Approach
            </div>

            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              How <span className="text-yellow-600/50">We Grow</span>
            </h2>

            <p className="text-blue-900/60 leading-8">
              MAMLAKAH is committed to developing women with capacity and
              equipping them to steward their gifts, opportunities, and
              influence with wisdom, excellence, and purpose.
            </p>

            <p className="mt-6 text-xs tracking-[0.2em] uppercase text-yellow-600/50">
              Proverbs 31:25
            </p>

          </div>
        </Reveal>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6">

          {principles.map((p, i) => (
            <div
              ref={ref}
              key={i}
              className={`
                bg-white shadow-xl p-6 rounded-b-3xl text-center
                border-t-4 border-yellow-600/50
                origin-top
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-y-100"
                    : "opacity-0 -translate-y-10 scale-y-75"
                }
              `}
            >

              <div className="text-yellow-600/50 text-xl font-bold mb-2">
                {p.title}
              </div>

              <div className="text-blue-800/60 text-sm">
                {p.description}
              </div>

            </div>
          ))}

          <div className="col-span-2 text-center text-sm tracking-[0.2em] text-yellow-600/50 mt-4">
            ✦ We grow with purpose, lead with wisdom, and influence with grace ✦
          </div>

        </div>

      </div>

      <Banner />

    </section>
  );
}