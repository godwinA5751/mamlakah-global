import Reveal from "./Reveal";

export default function Mandate() {
  return (
    <section id="mandate" className="lg:h-screen py-24 px-6 scroll-mt-32">

      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h2 className="text-blue-800 text-3xl md:text-4xl tracking-widest font-extrabold mb-10">
            Our <span className="text-yellow-600/50">Mandate</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              num: "01",
              label: "Identity",
              title: "Rooted in Purpose & Kingdom Identity",
              body: `MAMLAKAH exists to help every woman discover who she is, understand her
              God-given identity, and confidently walk in the purpose for which she was created.`,
              verse: "Esther 4:14"
            },
            {
              num: "02",
              label: "Equipping",
              title: "Building Women of Capacity & Excellence",
              body: `We equip women with the wisdom, skills, character, and spiritual capacity
              to excel in their families, professions, communities, and every sphere of influence
              entrusted to them.`,
              verse: "Proverbs 31:26"
            },
            {
              num: "03",
              label: "Influence",
              title: "Leadership & Kingdom Influence",
              body: `MAMLAKAH raises women who lead with wisdom, courage, integrity, and grace —
              women who influence their homes, workplaces, communities, and nations for the
              advancement of God's Kingdom.`,
              verse: "Matthew 5:14–16"
            }
          ].map((item) => (
            <Reveal key={item.num}>
              <div
                className="
                  rounded-3xl p-6 cursor-pointer shadow-xl
                  bg-white hover:bg-white/50
                  hover:backdrop-blur-md
                  transition
                "
              >

                <div className="text-5xl font-black text-blue-900/70">
                  {item.num}
                </div>

                <div className="text-yellow-600/40 text-xl tracking-widest font-bold mt-2">
                  {item.label}
                </div>

                <div className="text-blue-800 text-xl font-bold mt-3">
                  {item.title}
                </div>

                <p className="text-blue-900/80 mt-3 leading-7">
                  {item.body}
                </p>

                <div className="text-yellow-600/50 font-bold text-xs mt-4 tracking-[0.2em]">
                  {item.verse}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}