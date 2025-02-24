import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export const fetchPhotos = async () => {
  try {
    const response = await axios.get(BASE_URL);

    return response.data.products;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};

export const fetchPhotoDetails = async id => {
  try {
    var url = `${BASE_URL}/${id}`;
    console.log('url: ', url);

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error('Error fetching details:', error);
    return null;
  }
};
