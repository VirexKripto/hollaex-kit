const PRODUCTION_ENDPOINT =
	process.env.REACT_APP_SERVER_ENDPOINT || 'https://api.xivex.io';

const DEVELOPMENT_ENDPOINT = 'https://api.xivex.io';

const API_PATH = '/v1';

const generateEndpoint = (endpoint, path) => ({
	API_URL: `${endpoint}${path}`,
	WS_URL: endpoint
});

const VARIABLES = {
	production: generateEndpoint(PRODUCTION_ENDPOINT, API_PATH),
	development: generateEndpoint(DEVELOPMENT_ENDPOINT, API_PATH)
};

export default VARIABLES;
