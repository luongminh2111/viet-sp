import React from "react";  
import { useHistory, withRouter } from "react-router-dom";
import HeaderNav from "../../../commons/HeaderNav/HeaderNav";
import ListTour from "./ListTour";
import "./styles/index.scss";
import FilterData from "../../../commons/FilterData";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSaleTour } from "./actions/ListTourActionCallApi";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { updateUser } from "../../actions/AccountActionRedux";
import Alerts from "../../../../commons/Alert";


function Tours (props){

  const [sales, setSales] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const [openAlert, setOpenAlert] = useState(false);
  
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
      dispatch(getSaleTour()).then(res => setSales(res));
    }
    catch(e) {
      setOpenAlert(true);
      setTimeout(() => {
        history.push("/");
      }, 0);
    }
  }, []);

  return (
    <div className="tours-wrapper">
      <HeaderNav />
      <hr />
      <div className="tour-content-wrapper">
        <FilterData sales={sales} type="tour" />
        <ListTour />
      </div>
      {/* {openAlert ? (
        <Alerts
          text="Bạn cần đăng nhập để sử dụng chức năng này"
          status="error"
          open={openAlert}
          setOpen={setOpenAlert}
        />
      ) : null} */}
    </div>
  )
}
export default withRouter(Tours);