import React from "react";
import "../styles/ListVehicle.scss";
import Pagination from "../../../../commons/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListVehicle } from "../actions/ListVehicleActionCallApi";
import { everageStar, handleEverageStar } from "../../../../commons/actions/actionCommons";

function ListVehicle(props) {

  const items = useSelector(state => state.vehicle.items);
  const filter = useSelector(state => state.vehicle.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListVehicle(filter));
  }, []);

  useEffect(() => {
    dispatch(getListVehicle(filter));
  }, [filter.page]);

  console.log("check itemsoooo :", items);

  return (
    <div className="list-vehicle-wrapper">
      <div className="title">
        <div className="text">Vehicle: {items?.length || 0} results found</div>
        <div className="filter-icons"></div>
      </div>
      <div className="nav-link-filter">
        <div className="nav-item">popularity</div>
        <div className="nav-item">guest rating</div>
        <div className="nav-item">latest</div>
        <div className="nav-item">Price: low to hight</div>
        <div className="nav-item">Price: hight to low</div>
      </div>
      <div className="list-items">
        {items?.map((e) => {
          return (
            <div className="vehicle-item">
              <div className="image">
                <img src={e.image}></img>
                <div className="location d-flex">
                  <div className="icon">
                  <i className="fa-solid fa-location-dot fa-xl"></i>
                  </div>
                  <div className="text">{e?.location?.description}</div>
                </div>
              </div>
              <div className="rate">
                {handleEverageStar(e?.reviews)?.map(item => {
                   return (<i className="fa-solid fa-star" style={{color: '#b0d12b', marginRight: '3px'}}></i>)
                })}
             
              </div>
              <div className="point-rate d-flex">
                <div className="point">{everageStar(e?.reviews)}.0/5.0</div>
                <div className="view">( {e?.reviews?.length || 0} review )</div>
              </div>
              <div className="price">
                From $ <b>{e.price}</b>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <Pagination filter={filter}/>
    </div>
  );
}
export default ListVehicle;
