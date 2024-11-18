import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";
import { jwtDecode } from "jwt-decode";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`http://localhost:8800/api/auth/login`, user);
    const token = jwtDecode(res.data.accessToken);
    token.isAdmin ? dispatch(loginSuccess(res.data)) : dispatch(loginFailure());
  } catch (err) {
    dispatch(loginFailure());
  }
};
