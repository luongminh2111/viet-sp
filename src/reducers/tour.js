import * as actionTypeTour from "../components/Pages/components/Tours/actions/ListTourActionActionType";

const initState = {
  items: [],
  trendingItems: [],
  deals: [],
  filter: {
    page: 1,
    limit: 20,
    total: 20,
    priceStart: 0,
    priceEnd: 0,
    location :'',
    checkIn: '',
    checkOut: ''
  }
};

const tour = (state = initState, action) => {
  console.log("check tour action :", action);

  switch (action.type) {
    case actionTypeTour.UPDATE_LIST_TOUR:
      return {
        ...state,
        items: action.data || [],
      };
    case actionTypeTour.UPDATE_LIST_TOUR_TRENDING:
      return {
        ...state,
        trendingItems: action.data,
      }
    case actionTypeTour.UPDATE_LIST_TOUR_DEAL:
      return {
        ...state,
        deals: action.data,
      }
      case 'CHANGE_FILTER_TOUR': 
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

export default tour;
