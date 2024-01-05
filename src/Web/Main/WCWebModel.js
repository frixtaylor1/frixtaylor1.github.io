import { projectsData } from '../projectsData/projectsData.js';

class WCWebModel {
  getProjectsData() {
    console.log(projectsData);
    return projectsData;
  }
};

export { WCWebModel };