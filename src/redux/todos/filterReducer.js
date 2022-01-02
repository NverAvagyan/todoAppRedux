const CHANGE_DATE_RANGE = "filter/CHANGE_DATE_RANGE";
const CHANGE_SHOW_TODOS = "filter/CHANGE_SHOW_TODOS";
const CHANGE_TITLE = "filter/CHANGE_TITLE";

const initState = {
  dateRange: "30",
  showTodos: "all",
  title: "",
};

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_DATE_RANGE:
      return { ...state, dateRange: action.payload };
    case CHANGE_SHOW_TODOS:
      return { ...state, showTodos: action.payload };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export const changeDateRange = (newRange) => ({
  type: CHANGE_DATE_RANGE,
  payload: newRange,
});

export const changeShowTodos = (filterType) => ({
  type: CHANGE_SHOW_TODOS,
  payload: filterType,
});

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  payload: title,
});
