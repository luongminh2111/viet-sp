import React from "react";
import HeaderNav from "../../../../commons/HeaderNav/HeaderNav";
import "../styles/Detail.scss";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Footer from "../../../../HomePage/Footer";
import {
  handleConvertArr,
} from "../../../../commons/actions/actionCommons";
import { Button } from "@mui/material";
import { getTourDetailItem } from "../actions/ListTourActionCallApi";
import { addCartItem } from "../../Cart/actions/CartActionCallApi";
const nf = new Intl.NumberFormat("en");
function ItemTourDetail(props) {
  const [item, setItem] = useState({});
  const history = useHistory();
  const cartId = useSelector((state) => state.cart?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const path = history.location.pathname;
    const id = path?.split("/tour/detail/")?.[1];
    dispatch(getTourDetailItem(id)).then((res) => {
      setItem(res);
    });
  }, []);

  const handleShowTime = (arr) => {
    const splits = arr?.split(";");
    return splits?.join(" ; ");
  };
  console.log("check item :", item);
  const handleAddCartItem = (e) => {
    console.log(cartId);
    const cartModel = {
      cartId: cartId,
      categoryName: "tour",
      categoryId: e?.id,
      name: e?.name,
      price: Number(e?.price),
      quantity: 1,
    };
    dispatch(addCartItem(cartModel));
  };
  return (
    <div className="hotel-detail-wrapper">
      <HeaderNav />
      <hr />
      <div className="hotel-detail-content-wrapper">
        <div className="bread-scrum d-flex">
          <div className="text" onClick={() => history.push("/")}>
            Trang chủ >{" "}
          </div>
          <div className="text" onClick={() => history.push("/tour")}>
            Tour
          </div>
          <div className="text">> Chi tiết </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9">
              <div className="product">
                <div className="pb-4 mb-2">
                  <div className="tour-item">
                    <div className="image">
                      <img src={item?.image || ""}></img>
                      {item?.sale > 0 ? (
                        <div className="sale-i">Sale {item?.sale}%</div>
                      ) : null}
                    </div>
                    <div className="right-content">
                      <div className="col-1">
                        <div className="name">{item?.name}</div>
                        <div className="distance">
                          <span>
                            <i class="fa-regular fa-clock"></i>
                          </span>
                          <span>Lịch trình:</span>
                          <span>
                            {item?.locationStart} - {item?.locationEnd}
                          </span>
                        </div>
                        <div className="info">
                          <span>
                            <i class="fa-regular fa-clock"></i>
                          </span>
                          <span>Thời gian:</span>
                          <span>
                            {item?.itineraries?.length} ngày -{" "}
                            {item?.itineraries?.length - 1} đêm
                          </span>
                        </div>
                        <div className="info">
                          <span>
                            <i class="fa-regular fa-calendar"></i>
                          </span>
                          <span>Khởi hành:</span>
                          <span>{handleShowTime(item?.timeStart)}</span>
                        </div>
                        <div className="info">
                          <span>
                            <i class="fa-solid fa-car"></i>
                          </span>
                          <span>Phương tiện:</span>
                          <span>
                            {item?.locationStart} - {item?.locationEnd}
                          </span>
                        </div>
                        <div className="info">
                          <span>
                            <i class="fa-solid fa-house"></i>
                          </span>
                          <span>Khách sạn:</span>
                          <span className="rate">
                            {handleConvertArr(Number(item?.hotel) || 0)?.map(
                              (item) => {
                                return (
                                  <i
                                    className="fa-solid fa-star"
                                    style={{
                                      color: "darkorange",
                                      marginRight: "3px",
                                    }}
                                  ></i>
                                );
                              }
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="price">
                          <div className="text-align-center">Giá Tour</div>
                          <div
                            className={`org-price ${
                              item?.sale > 0
                                ? "text-decoration-line-through"
                                : ""
                            }`}
                          >
                            {nf.format(item?.price)}đ
                          </div>
                          {item?.sale ? (
                            <div className="price-sale">
                              {nf.format(
                                (item?.price * (100 - item?.sale)) / 100
                              )}
                              đ
                            </div>
                          ) : null}
                        </div>
                        <div className="btn-add">
                          <button onClick={() => handleAddCartItem(item)}>
                            Đặt ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="single-hotel__description border-bottom">
                  <h5 className="text-dark font-weight-bold description-title">
                    CHI TIẾT CHUYẾN ĐI
                  </h5>
                  <div className="description">
                    <div className="label-1 primary">
                      <span style={{ marginRight: "12px" }}>
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                      <span> Bao gồm</span>
                    </div>
                    <div className="list-desc">
                      <ul>
                        {item?.includeds?.map((e) => (
                          <li>{e?.description}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="label-1 error">
                      <span style={{ marginRight: "12px" }}>
                        <i class="fa-regular fa-circle-xmark"></i>
                      </span>
                      <span>Không bao gồm</span>
                    </div>
                    <div className="list-desc">
                      <ul>
                        {item?.excludeds?.map((e) => (
                          <li>{e?.description}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="label-1 rules">
                      <span style={{ marginRight: "12px" }}>
                        <i class="fa-solid fa-scale-balanced"></i>
                      </span>
                      <span>Qui định</span>
                    </div>
                    <div className="list-desc">
                      <ul>
                        {item?.rules?.map((e) => (
                          <li>
                            {e?.title} -{e?.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
export default ItemTourDetail;
