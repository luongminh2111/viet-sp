import React from "react";
import HeaderNav from "../../../../commons/HeaderNav/HeaderNav";
import "../styles/Detail.scss";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHotelDetailItem } from "../actions/ListHotelActionCallApi";
import { useState } from "react";
import Footer from "../../../../HomePage/Footer";

function ItemHotelDetail(props){

  const [item, setItem] = useState({});
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    const path = history.location.pathname;
    const id = path?.split("/hotel/detail/")?.[1];
    dispatch(getHotelDetailItem(id)).then(res => {
      setItem(res);
    });
    
  }, []);

  return (
    <div className="hotel-detail-wrapper">
    <HeaderNav />
    <hr />
    <div className="hotel-detail-content-wrapper">
      <div className="bread-scrum d-flex">
        <div className="text" onClick={() => history.push('/')}>Home > </div>
        <div className="text" onClick={() => history.push('/hotel')}>Hotel</div>
        <div className="text">>  Detail </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="product">
              <div className="d-block d-md-flex flex-center-between align-items-start mb-2">
                <div className="mb-3">
                  <div className="d-block d-md-flex flex-horizontal-center mb-2 mb-md-0">
                    <h4 className="font-size-23 font-weight-bold mb-1">{item?.name}</h4>
                    <div className="ml-3 font-size-10 letter-spacing-2">
                      <div className="fas fa-star"></div>
                      <div className="fas fa-star"></div>
                      <div className="fas fa-star"></div>
                      <div className="fas fa-star"></div>
                      <div className="fas fa-star"></div>
                    </div>
                  </div>
                  <div className="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1 sub-description">
                    <i className="fa-solid fa-location-dot mr-2 font-size-20"></i>
                    <div>{item?.description}</div>
                  </div>
                </div>
              </div>
              <div className="pb-4 mb-2">
                <img src="https://mytour.webtravel.vn/images/desti1.jpeg"></img>
              </div>
              <div className="single-hotel__description border-bottom">
                <h5 className="text-dark font-weight-bold description-title">Description</h5>
                <div className="description">
                  {item?.location?.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="flex-horizontal-center mb-4 single-product">
              <div className="badge-primary rounded-xs px-1">
                <span className="badge font-size-19 px-2 py-2 mb-0 text-lh-inherit text-nowrap">4.0 / 5</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer />
  </div>
  );
}
export default ItemHotelDetail;