import s from "./facts-page.module.scss";
import { useAppDispatch, useAppSelector } from "../../store.ts";
import { useEffect } from "react";
import {
  getFacts,
  selectFactsList,
  selectFactsLoading,
  selectFactsTotalCount,
} from "./facts-page-slice.ts";
import FactsCard from "./facts-card/facts-card.tsx";
import firstItem from "../../assets/images/facts-first-item.png";

const FactsPage = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectFactsTotalCount);
  const factsList = useAppSelector(selectFactsList);
  const loading = useAppSelector(selectFactsLoading);

  useEffect(() => {
    const query = totalItems ? `?pageSize=${totalItems}` : null;
    dispatch(getFacts(query));
  }, [dispatch, totalItems]);

  if (loading)
    return (
      <div className={s.factsPageWrapper}>
        <div className={s.beansLoading}>Loading...</div>
      </div>
    );

  return (
    <div className={s.factsPageWrapper}>
      <div className={s.factsPageContainer}>
        <h3>Explore All Facts ...</h3>
      </div>
      <div className={s.factsGrid}>
        <img src={firstItem} alt="happy-bean" />
        {factsList.map((item, index) => (
          <FactsCard fact={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FactsPage;
