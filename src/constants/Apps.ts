import helpIcon from "../assets/StartMenu/helpIcon.webp";
import searchIcon from "../assets/StartMenu/searchIcon.webp";
import runIcon from "../assets/StartMenu/runIcon.webp";
import internetIcon from "../assets/StartMenu/internetIcon.webp";
import emailIcon from "../assets/StartMenu/mailIcon.webp";
import myDocIcon from "../assets/StartMenu/myDocIcon.webp";
import recentDocIcon from "../assets/StartMenu/recentDocIcon.webp";
import myComputerIcon from "../assets/StartMenu/myComputerIcon.webp";
import myImagesIcon from "../assets/StartMenu/myImagesIcon.webp";
import myMusicIcon from "../assets/StartMenu/myMusicIcon.webp";
import controlPanelIcon from "../assets/StartMenu/controlPanelIcon.webp";
import printersIcon from "../assets/StartMenu/printersIcon.webp";
import minesweeperIcon from "../assets/AppIcons/minesweeperIcon.webp";
import { v4 as uuidv4 } from "uuid";

export interface appInterface {
  id: string;
  name: string;
  fullname?: string;
  icon: string;
  disabled: boolean;
}

export const startMenuLeftPinnedApps: appInterface[] = [
  {
    id: uuidv4(),
    name: "Internet",
    fullname: "InternetExplorer",
    icon: internetIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "E-mail",
    fullname: "Outlook Express",
    icon: emailIcon,
    disabled: true,
  },
];

export const startMenuRightTopApps: appInterface[] = [
  {
    id: uuidv4(),
    name: "My Documents",
    icon: myDocIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "My Recent Docum..",
    icon: recentDocIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "My Pictures",
    icon: myImagesIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "My Music",
    icon: myMusicIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "My Computer",
    icon: myComputerIcon,
    disabled: true,
  },
];

export const startMenuRightMiddleApps: appInterface[] = [
  {
    id: uuidv4(),
    name: "Control Panel",
    icon: controlPanelIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "Printers",
    icon: printersIcon,
    disabled: true,
  },
];

export const startMenuRightBottomApps: appInterface[] = [
  {
    id: uuidv4(),
    name: "Help and Support",
    icon: helpIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "Search",
    icon: searchIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: "Run",
    icon: runIcon,
    disabled: true,
  },
];

export const allApps: appInterface[] = [
  {
    id: uuidv4(),
    name: "Minesweeper",
    icon: minesweeperIcon,
    disabled: false,
  },
];
