import Reveal from "./Reveal";
import MultiRowCarousel from './MultiRowCarousel'
export default function Values() {
  return (
    <section id="values" className="py-24 px-6 scroll-mt-32">
      <div className="max-w-300 mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-800">
            Core <span className="text-yellow-600/50">Values</span>
          </h2>
        </Reveal>
        <MultiRowCarousel />
      </div>
    </section>
  );
}