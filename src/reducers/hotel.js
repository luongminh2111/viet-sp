import * as actionTypeHotel from "../components/Pages/components/Hotels/actions/ListHotelActionType";

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
    checkOut: '',
  }
};

const hotel = (state = initState, action) => {
  console.log("check hotel action :", action);
  switch (action.type) {
    case actionTypeHotel.UPDATE_LIST_HOTEL:
      return {
        ...state,
        items: action.data || [],
      };
    case actionTypeHotel.UPDATE_LIST_HOTEL_TRENDING:
      return {
        ...state,
        trendingItems: action.data,
      };
    case actionTypeHotel.UPDATE_LIST_HOTEL_DEAL:
      return {
        ...state,
        deals: action.data,
      }
    case 'CHANGE_FILTER_HOTEL': 
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

export default hotel;
