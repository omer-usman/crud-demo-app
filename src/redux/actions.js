export const FETCH_COURSES = 'FETCH_COURSES';
export const ADD_COURSE = 'ADD_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';

export const fetchCourses = () => ({ type: FETCH_COURSES });
export const addCourse = (course) => ({ type: ADD_COURSE, payload: course });
export const updateCourse = (course) => ({ type: UPDATE_COURSE, payload: course });
export const deleteCourse = (id) => ({ type: DELETE_COURSE, payload: id });
export const SET_USER_ROLE = 'SET_USER_ROLE';

export const setUserRole = (role) => ({ type: SET_USER_ROLE, payload: role });