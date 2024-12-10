import ApiRequest from "../core/api";

export const sendCompanyEmail = async (email, name, message, subject) => {
  try {
    const data = { email, name, message, subject };
    return await ApiRequest.post("/mail/send-company-email", data);
  } catch (error) {
    throw error;
  }
};

export const sendRentalAppreisal = async (email) => {
  try {
    return await ApiRequest.post("/mail/rent-appresal", email, {});
  } catch (error) {
    throw error;
  }
};

export const sendDigitalAppraisal  = async (email) => {
  try {
    return await ApiRequest.post("/mail/digital-appraisal", email, {});
  } catch (error) {
    throw error;
  }
}

export const sendByeWithUs = async (email) => {
  try {
    return await ApiRequest.post("/mail/buy-with-us", email, {});
  } catch (error) {
    throw error;
  }
}