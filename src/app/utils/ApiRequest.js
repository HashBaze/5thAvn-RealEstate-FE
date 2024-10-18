import axios from "axios";

export const ApiRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendEmailRequest = async (email, name, message, subject) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  try {
    const response = await ApiRequest.post("/mail/send-company-email", {
      email,
      name,
      message,
      subject,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Other API functions can be defined here
export const getUserData = async () => {
  try {
    const response = await ApiRequest.get("/users");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
