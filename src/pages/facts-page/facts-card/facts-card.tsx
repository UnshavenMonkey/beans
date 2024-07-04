import s from "./facts-card.module.scss";
import { FC } from "react";
import { FactType } from "../facts-page-slice.ts";

type FactsCardProps = {
  fact: FactType;
  index: number;
};
const FactsCard: FC<FactsCardProps> = ({ fact, index }) => {
  const { title, description } = fact;
  return (
    <div className={s.factCardWrapper}>
      <a>
        <h4>
          {index + 1}. {title}
        </h4>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default FactsCard;
