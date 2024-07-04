import { useAppDispatch, useAppSelector } from "../../store.ts";
import {
  getBeans,
  selectBeansList,
  selectBeansLoading,
  selectBeansTotalCount,
} from "./beans-page-slice.ts";
import { useEffect } from "react";
import s from "./beans-page.module.scss";
import BeansCard from "./beans-card/beans-card.tsx";

const BeansPage = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectBeansTotalCount);
  const beansList = useAppSelector(selectBeansList);
  const loading = useAppSelector(selectBeansLoading);

  useEffect(() => {
    const query = totalItems ? `?pageSize=${totalItems}` : null;
    dispatch(getBeans(query));
  }, [dispatch, totalItems]);

  if (loading)
    return (
      <div className={s.beansPageWrapper}>
        <div className={s.beansLoading}>Loading...</div>
      </div>
    );

  return (
    <div className={s.beansPageWrapper}>
      <div className={s.beansPageContainer}>
        <h3>Explore All Beans ...</h3>
      </div>
      <div className={s.beansGrid}>
        {beansList.map((item, index) => (
          <BeansCard bean={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BeansPage;
