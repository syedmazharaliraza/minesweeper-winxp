import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import chessProfile from "../../assets/StartMenu/chessProfile.webp";

interface userInfoState {
  id: string;
  name: string;
  profilePic: string;
}

const initialState: userInfoState = {
  id: uuidv4(),
  name: "IEUser",
  profilePic: chessProfile,
};

const userInfoSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {},
});

export default userInfoSlice.reducer;
