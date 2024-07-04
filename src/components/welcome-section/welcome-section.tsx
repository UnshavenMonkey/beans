import s from "./welcome-section.module.scss";
import welcomeSectionImg from "../../assets/images/welcome-section-img.gif";

const WelcomeSection = () => {
  return (
    <div className={s.contentWrapper}>
      <div className={s.welcomeSection}>
        <div className={s.welcomeImgWrapper}>
          <img src={welcomeSectionImg} alt="Jelly Belly Wiki Logo" />
        </div>
        <div className={s.welcomeTextWrapper}>
          <h1>Welcome to the World of Jelly Belly:</h1>
          <h3>A Rainbow of Flavors Awaits!</h3>
          <p>
            The User Interface of this website makes full use of the API's
            database, showcasing one approach to design by utilizing all the
            endpoints and their various options. Check out the API documentation
          </p>
          <a href="#">Click here for more info</a>
        </div>
      </div>
      <div className={s.welcomeDescription}>
        <div>
          <p>
            The User Interface efficiently integrates with the Jelly Belly Wiki
            API, primarily utilizing the GET method to query and retrieve data
            from the database. This architecture exemplifies a streamlined
            approach to API consumption, focusing on data retrieval to render
            real-time information within the UI.
          </p>
        </div>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-down"
          className="svg-inline--fa fa-arrow-down fa-fade fa-2x "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WelcomeSection;
