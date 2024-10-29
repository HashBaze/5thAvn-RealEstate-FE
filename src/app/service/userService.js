import ApiRequest from "../core/api";

export const loginRequest = async (email, password) => {
  try {
    const data = { email, password };
    return await ApiRequest.post("/user/login", data);
  } catch (error) {
    throw error;
  }
};
