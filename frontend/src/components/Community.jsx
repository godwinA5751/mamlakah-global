import Reveal from "./Reveal";

export default function Community() {
  return (
    <section id="community" className="py-24 px-6 scroll-mt-32">

      <div className="max-w-6xl mx-auto">

        <Reveal>
          <div className="text-yellow-600/50 tracking-widest text-2xl font-bold mb-4">
            Empowering Women
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-blue-800">
            Women Who <span className="text-yellow-600/50">Impact</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">

          {[
            {
              icon: "📖",
              title: "Kingdom Growth",
              body: `Bible-based teaching, discipleship, prayer gatherings, and spiritual development
              designed to help women grow in their relationship with God, discover their identity,
              and confidently walk in their Kingdom purpose.`
            },
            {
              icon: "🌸",
              title: "Women & Family",
              body: `We strengthen women in their roles within the family by providing mentorship,
              relationship guidance, parenting support, and practical wisdom for building healthy,
              purposeful, and thriving homes.`
            },
            {
              icon: "💼",
              title: "Economic Empowerment",
              body: `Through skills development, entrepreneurship mentoring, career conversations,
              and financial education, we help women build capacity, become economically empowered,
              and create sustainable value in their communities.`
            },
            {
              icon: "👑",
              title: "Leadership & Influence",
              body: `We raise women who are equipped to lead with wisdom, courage, excellence, and
              integrity — preparing them to make meaningful impact in their families, workplaces,
              communities, and nations.`
            }
          ].map((item, i) => (
            <Reveal key={i}>

              <div
                className="
                  h-full
                  p-6 rounded-2xl
                  bg-white
                  hover:bg-white/60
                  hover:backdrop-blur-md
                  shadow-xl
                  cursor-pointer
                  transition
                "
              >

                <div className="text-3xl mb-4">
                  {item.icon}
                </div>

                <div className="text-xl font-bold mb-3 text-blue-900">
                  {item.title}
                </div>

                <p className="leading-7 text-blue-900/70">
                  {item.body}
                </p>

                <a
                  href="#"
                  className="
                    inline-block mt-6
                    text-xs md:text-sm
                    tracking-[0.2em]
                    border-b border-yellow-600
                    text-yellow-600
                  "
                >
                  Learn More →
                </a>

              </div>

            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}