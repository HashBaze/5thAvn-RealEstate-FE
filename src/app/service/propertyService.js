import ApiRequest from "../core/api";

export const getPropertys = async (data) => {
  const response = await ApiRequest.post("/graphql/get-listings", data, {});
  return response;
};

export const getProperty = async (data) => {
  const response = await ApiRequest.get(`/graphql/get-property/${data}`, {});
  return response;
};

export const getPropertyByFilter = async (data) => {
  const response = await ApiRequest.post("/graphql/get-by-filter", data, {});
  return response;
};


export const getPropertyByFilterPagination = async (data) => {
  const response = await ApiRequest.post("/graphql/get-by-filter-pagination", data, {});
  return response;
};

export const getAllSuburb = async () => {
  const response = await ApiRequest.get("/graphql/suburb-list", {});
  return response;
}