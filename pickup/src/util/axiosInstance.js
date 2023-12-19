/*import axios from "axios";
import {jwtDecode} from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";


const baseURL = "http://127.0.0.1:8000/login";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` } 
  }); // 중요! Bearer 인증 방식을 알려주기 위해 'Bearer Token'형식으로 보내줘야합니다.

  axiosInstance.interceptors.request.use(async req => {
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1; // 토큰만료 상태 체크

    if (!isExpired) return req; // 만료 안되면 access토큰 사용

    const response = await axios.post(`${baseURL}/token/refresh/`, {
      refresh: authTokens.refresh
    }); // 만료 되었을 경우 refresh토큰을 사용해서 access 토큰 재발급

    localStorage.setItem("authTokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwtDecode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;*/