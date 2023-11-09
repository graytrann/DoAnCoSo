import fetcher from "./fetcher";
import axios from "axios";

// ĐĂNG KÝ
export const signup = async (payload) => {
  try {
    const response = await fetcher.post("/auth-signup", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};


