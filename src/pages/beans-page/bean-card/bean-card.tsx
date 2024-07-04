import s from "./bean-card.module.scss";
import { BeanType, getBean } from "../beans-page-slice.ts";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store.ts";
import { useEffect, useState } from "react";
import { AppRoutes } from "../../../routes.ts";
const BeanCard = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [bean, setBean] = useState<BeanType | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(getBean(id)).then((res) => setBean(res.payload as BeanType));
    }
  }, [id]);

  return (
    <div className={s.container}>
      <div className={s.beanCard}>
        <div className={s.beanCardWrapper}>
          <h3>{bean?.flavorName}</h3>
        </div>
        <div className={s.beanCardWrapper}>
          <p>{bean?.description}</p>
        </div>
        <div className={s.imgWrapper}>
          <img src={bean?.imageUrl} alt={bean?.flavorName} />
        </div>
        <div className={s.beanCardWrapper}>
          <p className={s.beanTextLeft}>Group Name:</p>
          <p className={s.beanTextLeft}>{bean?.groupName}</p>
        </div>
        <div className={s.beanCardWrapper}>
          <p className={s.beanTextLeft}>Ingredients:</p>
          <p className={s.beanTextLeft}>{bean?.ingredients.join(", ")}</p>
        </div>
        <div className={s.beanGrid}>
          <div className={s.gridItem}>
            <p>Color Group:</p>
            <p>{bean?.colorGroup}</p>
          </div>
          <div className={s.gridItem}>
            <p>Hexadecimal Color:</p>
            <p>{bean?.backgroundColor}</p>
          </div>
          <div className={s.gridItem}>
            <p>Bean ID:</p>
            <p>{bean?.beanId}</p>
          </div>
          <div className={s.gridItem}>
            <p>Kosher:</p>
            <p>{bean?.kosher ? "yes" : "no"}</p>
          </div>
          <div className={s.gridItem}>
            <p>Seasonal:</p>
            <p>{bean?.seasonal ? "yes" : "no"}</p>
          </div>
          <div className={s.gridItem}>
            <p>Gluten Free:</p>
            <p>{bean?.glutenFree ? "yes" : "no"}</p>
          </div>
          <div className={s.gridItem}>
            <p>Sugar Free:</p>
            <p>{bean?.sugarFree ? "yes" : "no"}</p>
          </div>
        </div>
        <Link to={AppRoutes.Beans}>Back to Beans</Link>
      </div>
    </div>
  );
};

export default BeanCard;
