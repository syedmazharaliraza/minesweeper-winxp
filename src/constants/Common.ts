import minesweeperIcon from "../assets/AppIcons/minesweeperIcon.webp";
import chessProfile from "../assets/StartMenu/chessProfile.webp";

export interface appsInterface {
  name: string;
  icon: string;
}

export interface userInfoInterface {
  name: string;
  profilePic: string;
}

export const allApps: appsInterface[] = [
  {
    name: "Minesweeper",
    icon: minesweeperIcon,
  },
];

export const StartMenuApps: appsInterface[] = [
  {
    name: "Minesweeper",
    icon: minesweeperIcon,
  },
];

export const userInfo: userInfoInterface = {
  name: "IEUser",
  profilePic: chessProfile,
};
