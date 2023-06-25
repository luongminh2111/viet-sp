
const initState = {
  items: [],
  categories: [],
  filter: {
    page: 1,
    limit: 20,
    total: 20,
    category: ''
  }
};

const blog = (state = initState, action) => {
  console.log("check action blog :", action);
  switch (action.type) {
    case 'ADD_LIST_BLOG': 
    return {
      ...state, 
      items: action.data
    }
    case 'ADD_LIST_BLOG_CATEGORY': 
    return {
      ...state, 
      categories: action.data
    }
    case 'CHANGE_FILTER_BLOG': 
      return {
        ...state, 
        filter: {
          ...state.filter,
          [action.key]: action.data
        }
      }
    default:
      return state;
  }
};

export default blog;
