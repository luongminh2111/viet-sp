import React from "react";  
import { useHistory, withRouter } from "react-router-dom";
import HeaderNav from "../../../commons/HeaderNav/HeaderNav";
import ListHotel from "./ListHotel";
import "./styles/index.scss";
import FilterData from "../../../commons/FilterData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSaleHotel } from "./actions/ListHotelActionCallApi";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { updateUser } from "../../actions/AccountActionRedux";

function Hotels (props){

  const [sales, setSales] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    try {
      const token = sessionStorage.getItem('token');
      const username = jwt_decode(JSON.stringify(token))?.sub;
      const id = jwt_decode(JSON.stringify(token))?.id;
      const role = jwt_decode(JSON.stringify(token))?.role;
      const account = {
        username: username,
        userId: id,
        userRole: role,
      };
      dispatch(updateUser(account));
      dispatch(getSaleHotel()).then(res => setSales(res));
    }
    catch(e) {
      setTimeout(() => {
        history.push("/");
      }, 0);

    }
  
  }, []);

  // useEffect(() => {
  //   dispatch(getSaleHotel()).then(res => setSales(res));
  // }, []);

  return (
    <div className="hotels-wrapper">
      <HeaderNav />
      <hr />
      <div className="hotel-content-wrapper">
        <FilterData sales={sales} type="hotel" />
        <ListHotel />
      </div>
    </div>
  )
}
export default withRouter(Hotels);