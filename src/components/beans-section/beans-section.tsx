import s from "./beans-section.module.scss";
import { BeanType } from "../../pages/beans-page/beans-page-slice.ts";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes.ts";
const BeansSection: FC<{ beans: BeanType[] }> = ({ beans }) => {
  return (
    <div className={s.beansContainer}>
      <div className={s.beansGrid}>
        <div className={s.beansWrapper}>
          <h2>Explore Beans</h2>
        </div>
        {beans.map((item, index) => {
          return (
            <div key={index} className={s.itemWrapper}>
              <Link to={AppRoutes.Bean.replace(":id", item.beanId.toString())}>
                <h3>{item.flavorName}</h3>
              </Link>
              <div className={s.imgWrapper}>
                <img src={item.imageUrl} alt={item.flavorName} />
              </div>
            </div>
          );
        })}
        <div className={s.beansExplore}>
          <Link to={AppRoutes.Beans}>Explore More Beans</Link>
        </div>
      </div>
    </div>
  );
};

export default BeansSection;
