import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '20792904-7b714194335b4ba783f2ee189';
const TYPE = 'photo';
const ORIENTATION = 'horizontal';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?key=${MY_KEY}&q=${searchQuery}&image_type=${TYPE}&orientation=${ORIENTATION}&page=${currentPage}&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
