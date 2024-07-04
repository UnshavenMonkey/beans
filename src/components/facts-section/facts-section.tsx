import s from "./facts-section.module.scss";
import cherry from "../../assets/images/cherry.png";
import beans from "../../assets/images/beans.png";
import { FC } from "react";
import { FactType } from "../../pages/facts-page/facts-page-slice.ts";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes.ts";
const FactsSection: FC<{ facts: FactType[] }> = ({ facts }) => {
  return (
    <div className={s.factsContainer}>
      <div className={s.exampleFacts}>
        <h2>Did You Know?</h2>
        <div className={s.factsSide}>
          <div>
            <img src={cherry} alt="cherry" className={s.cherryImg} />
            <h2>Did You Know?</h2>
            <p>
              The company has evolved from its original eight flavors in 1976 to
              more than 100 over the years. Current popular flavors include
              Buttered Popcorn, Very Cherry, Cotton Candy, Watermelon, and Green
              Apple.
            </p>
          </div>
          <div>
            <img src={beans} alt="cherry" className={s.cherryImg} />
            <h2>Did You Know?</h2>
            <p>
              Jelly Belly have collaborated with brands like Dr. Pepper, A&W
              Root Beer, Snapple, Tabasco, Krispy Kreme, and Coldstone Creamery.
            </p>
          </div>
        </div>
        <div>
          {facts.map((item, index) => {
            return (
              <div key={index} className={s.itemWrapper}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
          <Link to={AppRoutes.Facts}>Check Out More Facts </Link>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
