import s from "./beans-card.module.scss";
import { BeanType } from "../beans-page-slice.ts";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes.ts";

type BeansCardProps = {
  bean: BeanType;
};
const BeansCard: FC<BeansCardProps> = ({ bean }) => {
  const { flavorName, imageUrl, description } = bean;
  return (
    <div className={s.beanCardWrapper}>
      <Link to={AppRoutes.Bean.replace(":id", bean.beanId.toString())}>
        <h4>{flavorName}</h4>
      </Link>
      <img src={imageUrl} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default BeansCard;
