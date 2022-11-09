import axios from 'axios';
import PropTypes from 'prop-types'

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30132720-432453c2d9eca76418fa34203';

export const getImagesFromAPI = async (query, page) => {
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data
}


getImagesFromAPI.propTypes = {
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
}