import ApiRequest from '../core/api';

export const sendCompanyEmail = async (email, name, message, subject) => {
    try {
      const data = { email, name, message, subject };
      return await ApiRequest.post('/mail/send-company-email', data);
    } catch (error) {
      throw error;
    }
  };