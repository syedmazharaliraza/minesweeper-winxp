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
import cmdIcon from "../assets/AppIcons/cmdIcon.webp";
import { v4 as uuidv4 } from "uuid";
import Minesweeper from "../Components/Minesweeper";
import CommandPrompt from "../Components/CommandPrompt";
import { AppNamesEnum } from "../types/apps";

export interface appInterface {
  id: string;
  name: AppNamesEnum;
  icon: string;
  disabled: boolean;
  component?: any;
}

export const startMenuLeftPinnedApps: appInterface[] = [
  {
    id: uuidv4(),
    name: AppNamesEnum.Internet,
    icon: internetIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.Email,
    icon: emailIcon,
    disabled: true,
  },
];

export const startMenuRightTopApps: appInterface[] = [
  {
    id: uuidv4(),
    name: AppNamesEnum.MyDocuments,
    icon: myDocIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.MyRecentDocuments,
    icon: recentDocIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.MyPictures,
    icon: myImagesIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.MyMusic,
    icon: myMusicIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.MyComputer,
    icon: myComputerIcon,
    disabled: true,
  },
];

export const startMenuRightMiddleApps: appInterface[] = [
  {
    id: uuidv4(),
    name: AppNamesEnum.ControlPanel,
    icon: controlPanelIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.Printers,
    icon: printersIcon,
    disabled: true,
  },
];

export const startMenuRightBottomApps: appInterface[] = [
  {
    id: uuidv4(),
    name: AppNamesEnum.HelpAndSupport,
    icon: helpIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.Search,
    icon: searchIcon,
    disabled: true,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.Run,
    icon: runIcon,
    disabled: true,
  },
];

export const allApps: appInterface[] = [
  {
    id: uuidv4(),
    name: AppNamesEnum.Minesweeper,
    icon: minesweeperIcon,
    disabled: false,
    component: Minesweeper,
  },
  {
    id: uuidv4(),
    name: AppNamesEnum.Portfolio,
    icon: cmdIcon,
    disabled: false,
    component: CommandPrompt,
  },
];
