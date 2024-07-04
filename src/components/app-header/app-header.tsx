import s from "./app-header.module.scss";
import headerLogo from "../../assets/images/header-logo.png";
import { getEnumValues } from "../../utils.ts";
import { HEADER_MENU_ITEM, HeaderMenuItem } from "../../consts.ts";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes.ts";
const AppHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.headerWrapper}>
        <Link to={AppRoutes.Index} className={s.headerLogoLink}>
          <img
            src={headerLogo}
            alt="Jwlly Belly Wiki"
            className={s.headerLogo}
          />
        </Link>
        <ul className={s.headerNav}>
          {getEnumValues(HeaderMenuItem).map((item, index) => {
            const menuItem = HEADER_MENU_ITEM[item as HeaderMenuItem];
            return (
              <li key={index} className={s.headerNavItem}>
                <Link
                  to={AppRoutes[menuItem.name as keyof typeof AppRoutes]}
                  className={s.headerNavItemLink}
                >
                  {menuItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
