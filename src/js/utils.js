import { API_KEY, API_URL } from "./constants";

export const generateApiUrl = path => `${API_URL}${path}?api_key=${API_KEY}`;