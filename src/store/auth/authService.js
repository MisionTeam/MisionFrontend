import { createApiWrappers } from 'utils/apiUtils.js';

export default createApiWrappers({
	login: ['POST', '/auth/login'],
});
