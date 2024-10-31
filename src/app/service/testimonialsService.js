import ApiRequest from "../core/api";

export const getReviews = async (page, limit) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    return await ApiRequest.get(
      `/testimonials?page=${page}&limit=${limit}`,
      headers
    );
  } catch (error) {
    throw error;
  }
};

export const getAllReviews = async (token) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    return await ApiRequest.get("/testimonials/all", headers);
  } catch (error) {
    throw error;
  }
};

export const getOneReview = async (id, token) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    return await ApiRequest.get(`/testimonials/one/${id}`, headers);
  } catch (error) {
    throw error;
  }
};

export const createReview = async (data, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.post("/testimonials/create", data, headers);
  } catch (error) {
    throw error;
  }
};

export const updateReview = async (id, data, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.put(`/testimonials/update/${id}`, data, headers);
  } catch (error) {
    throw error;
  }
};

export const deleteReview = async (id, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.delete(`/testimonials/delete/${id}`, headers);
  } catch (error) {
    throw error;
  }
};

export const updateIsShow = async (id, isShow, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.put(`/testimonials/show/${id}`, { isShow }, headers);
  } catch (error) {
    throw error;
  }
};

export const getReviewsByStatus = async () => {
  try {
    return await ApiRequest.get(`/testimonials/is-show`, {});
  } catch (error) {
    throw error;
  }
};
