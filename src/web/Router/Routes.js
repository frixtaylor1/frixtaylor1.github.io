import itBlogComponent from "../blog/blog.js";
import homeComponent from "../home/home.js";
import notFoundPageComponent from "../notfound/notfound.js";
import projectsComponent from "../projects/projects.js";
export const HOME_ROUTE = "/";
export const HOME_ROUTE_EXPERIENCE = "#experience";
export const HOME_ROUTE_EDUCATION = "#education";
export const PROJECTS_ROUTE = "/projects";
export const IT_BLOG_ROUTE = "/it-blog";
export const ERROR_ROUTE = "/error";
export const ROUTES = [
  { path: HOME_ROUTE, component: homeComponent() },
  { path: PROJECTS_ROUTE, component: projectsComponent() },
  { path: IT_BLOG_ROUTE, component: itBlogComponent() },
  { path: ERROR_ROUTE, component: notFoundPageComponent() },
  { path: HOME_ROUTE_EXPERIENCE, },
  { path: HOME_ROUTE_EDUCATION, },
];
