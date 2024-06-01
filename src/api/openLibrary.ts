import { OPEN_LIBRARY_API_URL } from '../utils/constants';
import axios from 'axios';

const apiOpenLibraryClient = axios.create({
  baseURL: OPEN_LIBRARY_API_URL,
  timeout: 1000,
});

export default apiOpenLibraryClient;
