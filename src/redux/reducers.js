import { FETCH_COURSES, ADD_COURSE, UPDATE_COURSE, DELETE_COURSE, SET_USER_ROLE } from './actions';

const initialState = {
  courses: [],
  userRole: 'user', // or 'admin'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ROLE:
      return { ...state, userRole: action.payload };
    case FETCH_COURSES:
      return { ...state, courses: action.payload };
    case ADD_COURSE:
      return { ...state, courses: [...state.courses, action.payload] };
    case UPDATE_COURSE:
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === action.payload.id ? action.payload : course
        ),
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;