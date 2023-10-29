import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container grid">
        {/* HERO IMAGE */}
        <div className="hero__img-bg">
          <img
            src="https://png.pngtree.com/element_pic/00/16/08/2057b76af9ed627.jpg"
            alt="Banner image"
            className="hero__img"
          />
        </div>

        {/* HERO CONTENT */}
        <div className="hero__content">
          <h1 className="hero__title">
            NEW WATCH <br /> COLLECTIONS B720
          </h1>
          <p className="hero__description">
            Latest arrival of the new imported watches of the B720 series, with
            a modern and resistant design.
          </p>
          <span className="hero__price">$1245</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
