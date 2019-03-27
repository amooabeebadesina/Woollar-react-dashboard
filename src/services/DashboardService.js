// @flow
import ApiService from './ApiService';

const DashboardService = {
  getDashboardData: () => ApiService.get('/dashboard-data'),
};

export default DashboardService;
