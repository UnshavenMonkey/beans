export const BACKEND_API_URL = "https://jellybellywikiapi.onrender.com/api";
export enum HeaderMenuItem {
  Beans,
  Facts,
  Recipes,
  Combinations,
  History,
  About,
}

export const HEADER_MENU_ITEM = {
  [HeaderMenuItem.Beans]: { name: "Beans" },
  [HeaderMenuItem.Facts]: { name: "Facts" },
  [HeaderMenuItem.Recipes]: { name: "Recipes" },
  [HeaderMenuItem.Combinations]: { name: "Combinations" },
  [HeaderMenuItem.History]: { name: "History" },
  [HeaderMenuItem.About]: { name: "About" },
};

export enum AboutInfoNumber {
  Beans,
  Propeties,
  Facts,
  History,
  Recipes,
  Combinations,
}

export const ABOUT_INFO_NUMBER = {
  [AboutInfoNumber.Beans]: { title: "100 +", subTitle: "Jelly belly beans" },
  [AboutInfoNumber.Propeties]: {
    title: "8",
    subTitle: "Properties on each bean",
  },
  [AboutInfoNumber.Facts]: { title: "99 +", subTitle: "Facts on Jelly Belly" },
  [AboutInfoNumber.History]: {
    title: "20 +",
    subTitle: "Milestones in the Jelly Belly History",
  },
  [AboutInfoNumber.Recipes]: { title: "25 +", subTitle: "Recipes" },
  [AboutInfoNumber.Combinations]: {
    title: "50 +",
    subTitle: "Jelly Belly Combinations",
  },
};
