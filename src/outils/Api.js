import Config from '../Config';

class Api {
	getHome = async () => {
		const url = Config.host + '/api/home';
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Status Code Error', response.status);
			}
			const data = await response.json();
			return data.cities;
		} catch (error) {
			return error;
		}
	};
}

export default new Api();
