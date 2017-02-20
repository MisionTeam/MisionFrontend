import { createApiWrappers } from 'utils/apiUtils.js';

export default createApiWrappers({
  getMissionList: ['GET', '/mission/list?token=:token'],
  getMissionDetails: ['GET', '/mission/detail?token=:token&id=:missionId']
});
