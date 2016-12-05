import { createApiWrappers } from 'utils/apiUtils.js';

export default createApiWrappers({
  getFullProfile: ['GET', '/profile/full?token=:token'],
  patchProfile: ['PATCH', '/profile?token=:token']
});
