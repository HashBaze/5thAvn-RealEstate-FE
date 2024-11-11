// pages/properties.js
import { gql, useQuery } from "@apollo/client";
import ApiRequest from "../core/api";
import axios from "axios";

export const getToken = async () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;
  const seactret = process.env.NEXT_PUBLIC_GRAPHQL_CLIENT_SECRET;

  const headers = {
    headers: {
      Authorization: `Bearer ${seactret}`,
    },
  };
  try {
    const response = await axios.post("/token", {}, headers);
    console.log(response);
  } catch (error) {
    throw error;
  }
};

export const GET_PROPERTIES = gql`
  query Get($offset: Int, $limit: Int) {
    properties(offset: $offset, limit: $limit) {
      edges {
        node {
          id
          formattedAddress
          latitude
          longitude
          addressDisplay
          advertisedPrice
          advertisingCost
          altToPrice
          country
          createdAt
          description
          displayOnWebsite
          landSize
          activeAt
          price
          status
          listingType
          appraisal {
            id
            saleOrRent
          }
          images {
            createdAt
            url
          }
          vendors {
            contact {
              firstName
              lastName
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
