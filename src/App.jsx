import { useState } from "react";
import menu from "./data";
import Dish from "./dish";

const App = () => {
  const [dishes, setDishes] = useState(menu);
  const [categ, setCateg] = useState("");
  return (
    <>
      <header>
        <h1 className="title">Our Menus</h1>
        <div className="title-underline"></div>
      </header>

      <main>
        <section className="btn-container">
          <button onClick={() => setCateg("")} className="item-price btn">
            All
          </button>
          <button
            onClick={() => setCateg("breakfast")}
            className="item-price btn"
          >
            Breakfast
          </button>
          <button onClick={() => setCateg("lunch")} className="item-price btn">
            Lunch
          </button>
          <button onClick={() => setCateg("shakes")} className="item-price btn">
            Shakes
          </button>
        </section>

        <section className="section-center">
          {dishes
            .filter((dish) => {
              return categ === "" ? true : dish.category === categ;
            })
            .map((dish) => (
              <Dish key={dish.id} {...dish} />
            ))}
        </section>
      </main>
    </>
  );
};
export default App;
