import s from "./history-page.module.scss";
import { useAppDispatch, useAppSelector } from "../../store.ts";
import { FC, useEffect } from "react";
import firstItem from "../../assets/images/facts-first-item.png";
import {
  getMileStones,
  selectMileStonesList,
  selectMileStonesLoading,
  selectMileStonesTotalCount,
} from "./history-page-slice.ts";

const HistoryPage: FC<{ title?: string; mainPage?: boolean }> = ({
  title = "Explore History ...",
  mainPage,
}) => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectMileStonesTotalCount);
  const historyList = useAppSelector(selectMileStonesList);
  const loading = useAppSelector(selectMileStonesLoading);

  useEffect(() => {
    const query = totalItems
      ? `?pageSize=${totalItems}`
      : `?pageSize=${totalItems}`;
    dispatch(getMileStones(query));
  }, [dispatch, totalItems]);

  if (loading)
    return (
      <div className={s.historyPageWrapper}>
        <div className={s.beansLoading}>Loading...</div>
      </div>
    );

  const itemList = mainPage ? historyList.slice(0, 10) : historyList;

  return (
    <div className={s.historyPageWrapper}>
      <div className={s.historyPageContainer}>
        <h3>{title}</h3>
      </div>
      <div className={s.historyGrid}>
        <img src={firstItem} alt="happy-bean" />
        {itemList.map((item, index) => (
          <div className={s.historyCardWrapper} key={index}>
            <div>
              <h4>{item.year}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
