import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
	baseURL: Config.API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

axios.interceptors.request.use(
	(config: any) => {
		console.log('API::', config);
		return config;
	},
	(error: any) => {
		console.log('failure:: request', error);
		return Promise.reject(error);
	},
);

axios.interceptors.response.use(
	(response: any) => {
		console.log('response', response);
		return response;
	},
	(error: any) => {
		console.log('failure:: response', error);
		return Promise.reject(error);
	},
);

export default instance;
