import { useAppDispatch, useAppSelector } from "../../store.ts";
import {
  getCombinations,
  selectCombinationsList,
  selectCombinationsLoading,
  selectCombinationsTotalCount,
} from "./combinations-page-slice.ts";
import { useEffect } from "react";
import s from "./combinations-page.module.scss";
import firstItem from "../../assets/images/facts-first-item.png";

const CombinationsPage = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectCombinationsTotalCount);
  const combinationsList = useAppSelector(selectCombinationsList);
  const loading = useAppSelector(selectCombinationsLoading);

  useEffect(() => {
    const query = totalItems ? `?pageSize=${totalItems}` : null;
    dispatch(getCombinations(query));
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
        <h3>Explore Combinations ...</h3>
      </div>
      <div className={s.factsGrid}>
        <img src={firstItem} alt="happy-bean" />
        {combinationsList.map((item, index) => (
          <div className={s.factCardWrapper} key={index}>
            <h4>{item.name}</h4>
            <p>{item.tag[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinationsPage;
