// export const API_KEY = '24435359-4fe3fd99e7e91c25a1144d667';
import axios from "axios";
import PropTypes from "prop-types";

axios.defaults.baseURL = "https://pixabay.com/api/";

export default async function getImg(searchQuery, page) {
  const searchParams = new URLSearchParams({
    key: "24435359-4fe3fd99e7e91c25a1144d667",
    q: searchQuery,
    page: page,
    per_page: 12,
    image_type: "photo&orientation=horizontal",
  });

  try {
    const response = await axios.get(`?${searchParams}`);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}

getImg.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
