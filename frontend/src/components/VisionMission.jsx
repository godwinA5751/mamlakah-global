import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section id="vision" className="p-6 py-24 scroll-mt-32">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl text-blue-900 p-8">
            <div className="text-yellow-600 tracking-[0.2em] text-sm mb-2 font-bold font-serif">
              Our Vision
            </div>

            <h2 className="text-3xl font-bold mb-5 font-serif">
              Building Capacity With Balance <br /> <span className="text-yellow-600/50">Through Virtues</span>
            </h2>

            <p className="text-blue-900/70 leading-8 font-serif">
              At Mamlakah Global, we envision a generation equipped with the capacity to thrive through balance, character, and virtue. We are committed to nurturing individuals whose growth is grounded in godly values, enabling them to make meaningful impact in their families, communities, and the world around them.
            </p>

            <span className="inline-block mt-6 border border-yellow-600/40 px-4 py-2 text-yellow-600/50 text-xs tracking-[0.2em] font-bold">
              Proverbs 29:18
            </span>
          </div>

          <div className="bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl text-blue-900 p-8">
            <div className="text-yellow-600 tracking-[0.2em] text-sm mb-2 font-bold font-serif">
              Our Mission
            </div>

            <h2 className="text-3xl font-bold mb-5 font-serif">
              Eternalizing <br />
              <span className="text-yellow-600/50">Impacts</span>
            </h2>

            <p className="text-blue-900/70 leading-8 font-serif">
              At Mamlakah Global, our mission is to eternalize impact by equipping individuals to live out the Great Commission. We seek to cultivate a generation that carries the message of Christ, makes disciples, and creates an enduring Kingdom influence in their families, communities, and the world.
            </p>

            <span className="inline-block mt-6 border border-yellow-600/40 px-4 py-2 text-yellow-600/50 text-xs tracking-[0.2em] font-bold">
              Matthew 28:18–20
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}