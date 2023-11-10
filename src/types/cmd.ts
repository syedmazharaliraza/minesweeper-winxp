import { commands } from "../constants/cmd";

export type Command = (typeof commands)[number]["cmd"];
