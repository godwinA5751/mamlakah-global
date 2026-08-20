import "./carousel.css";
const values = [
  { icon: "❤️", name: "Love", ref: "Agápē" },
  { icon: "😊", name: "Joy", ref: "Chará" },
  { icon: "🕊️", name: "Peace", ref: "Eirḗnē" },
  { icon: "⏳", name: "Long-Suffering", ref: "Makrothymía" },
  { icon: "🌿", name: "Gentleness", ref: "Chrēstotēs" },
  { icon: "✨", name: "Goodness", ref: "Agathōsýnē" },
  { icon: "🙏", name: "Faith", ref: "Pístis" },
  { icon: "🌾", name: "Meekness", ref: "Praýtēs" },
  { icon: "⚖️", name: "Self-Control", ref: "Egkráteia" }
];

const Row = ({ direction = "left", speed = "slow" }) => {
  return (
    <div className="carousel-row">
      <div className={`carousel-track ${direction} ${speed}`}>
        {[...values, ...values].map((value, index) => (
          <div className="card  bg-white hover:bg-yellow-600/50 hover:backdrop-blur-md text-yellow-600/50 hover:text-white cursor-pointer rounded-xl shadow-xl" key={index}>
            <span className="text-3xl m-3">{value.icon}</span>
            <span className="font-bold tracking-[0.15em]">{value.name}</span>
            <span className="text-sm text-gray-500 m-2">
              {value.ref}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MultiRowCarousel() {
  return (
    <div className="carousel-container">
      <Row direction="left" speed="slow" />
      <Row direction="right" speed="medium" />
      {/* <Row direction="left" speed="fast" /> */}
    </div>
  );
}