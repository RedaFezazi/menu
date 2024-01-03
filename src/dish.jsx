const Dish = ({ title, price, img, desc }) => {
  return (
    <article className="menu-item">
      <figure>
        <img className="img" src={img} alt={title} />
      </figure>
      <section className="item-info ">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </section>
    </article>
  );
};

export default Dish;
