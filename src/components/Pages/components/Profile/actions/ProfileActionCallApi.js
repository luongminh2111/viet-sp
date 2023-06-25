import { BASE_URL } from "../../../../../contains/config";
import callApi from "../../../../../ulti/callApi";


export const getUserById = () => (dispatch, getState) => {

  const {auth: {
    account: {
      userId
    }
  }} = getState();
  const url = `${BASE_URL}/api/user/get/${userId}`;
  const options = {
    method: 'GET'
  }

  return callApi(url, options).then((res) => {
    if (res?.data) {
      console.log("check res.data :", res.data);
      return res?.data;
    }
  });
};

export const getListOrderedByUser = () => (dispatch, getState) => {

  const {auth: {
    account: {
      userId
    }
  }} = getState();

  const url = `${BASE_URL}/api/cart/get_list_ordered/${userId}`;
  const options = {
    method: 'GET'
  }

  return callApi(url, options).then((res) => {
    if (res?.data) {
      console.log("check res.data order:", res.data);
      return res?.data;
    }
  });
};