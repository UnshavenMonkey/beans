import s from "./about-section.module.scss";
import { getEnumValues } from "../../utils.ts";
import {
  ABOUT_INFO_NUMBER,
  AboutInfoNumber,
  HEADER_MENU_ITEM,
  HeaderMenuItem,
} from "../../consts.ts";
const AboutSection = () => {
  return (
    <div className={s.aboutWrapper}>
      <div className={s.aboutContainer}>
        <div>
          <h3>What to find in this API?</h3>
          <hr />
          <div className={s.aboutInfoNumbers}>
            {getEnumValues(AboutInfoNumber).map((item, index) => {
              const aboutItem = ABOUT_INFO_NUMBER[item as AboutInfoNumber];
              return (
                <div key={index}>
                  <h3>{aboutItem.title}</h3>
                  <p>{aboutItem.subTitle}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.aboutInfoLast}>
          All data reflecting from the original{" "}
          <a href="#">
            Jelly Belly Website
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right-long"
              className="svg-inline--fa fa-arrow-right-long "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
              ></path>
            </svg>
          </a>
          <ul className={s.aboutList}>
            <h3>Check out all endpoints</h3>
            {getEnumValues(HeaderMenuItem)
              .filter((i) => i !== AboutInfoNumber.Propeties)
              .map((item, index) => {
                const aboutItem = HEADER_MENU_ITEM[item as HeaderMenuItem];
                return (
                  <li key={index}>
                    <a href="#">
                      {aboutItem.name}
                      Jelly Belly Website
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-right-long"
                        className="svg-inline--fa fa-arrow-right-long "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
