import ApiRequest from "../core/api";

export const createBlog = async (data, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    return await ApiRequest.post("/blog/create", data, headers);
  } catch (error) {
    throw error;
  }
};

export const getBlogs = async (token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.get("/blog/getall", headers);
  } catch (error) {
    throw error;
  }
};

export const getBlog = async (id, token) => {
  console.log(id);
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.get(`/blog/get/${id}`, headers);
  } catch (error) {
    throw error;
  }
};

export const updateBlog = async (id, data, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.put(`/blog/update/${id}`, data, headers);
  } catch (error) {
    throw error;
  }
};

export const deleteBlog = async (id, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.delete(`/blog/delete/${id}`, headers);
  } catch (error) {
    throw error;
  }
};

export const updateIsShow = async (id, status, token) => {
  try {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    return await ApiRequest.put(
      `/blog/update-is-show/${id}/${status}`,
      {},
      headers
    );
  } catch (error) {
    throw error;
  }
};

export const getBlogsByPagination = async (page, limit, token) => {
  try {
    return await ApiRequest.get(`/blog/get-pagination/${page}/${limit}`, {});
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getBlogById = async (id) => {
  try {
    return await ApiRequest.get(`/blog/get-blog/${id}`, {});
  } catch (error) {
    throw error;
  }
};

export const getRecentBlogs = async () => {
  try {
    return await ApiRequest.get("/blog/get-recent", {});
  } catch (error) {
    throw error;
  }
};

export const getBlogsByTag = async () => {
  try {
    return await ApiRequest.get(`/blog/get-tag-list`, {});
  } catch (error) {
    throw error;
  }
};

export const serchByTags = async (tags) => {
  try {
    return await ApiRequest.put("/blog/serch-blogs-by-tags", tags, {});
  } catch (error) {
    console.log(error);
  }
};
