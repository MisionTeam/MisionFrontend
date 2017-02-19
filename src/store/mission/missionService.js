import { createApiWrappers } from 'utils/apiUtils.js';

export default createApiWrappers({
  getMissionList: ['GET', '/mission/list?token=:token']
});
