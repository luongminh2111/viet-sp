import React, { useEffect, useMemo, useState } from "react";
import HeaderNav from "../../../../commons/HeaderNav/HeaderNav";
import Footer from "../../../../HomePage/Footer";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import "../styles/index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCartItemProperties,
  deleteAllCartItem,
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from "../actions/CartActionCallApi";
import { useHistory } from "react-router-dom";
import CheckoutModal from "./CheckoutModal";

function Cart(props) {
  const [checkAll, setCheckAll] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);

  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const search = new URLSearchParams(history.location.search);
      const idParam = search?.get("id");
      history.push(`/cart?id=${cart?.id || idParam}`);
      if (!cart?.id) {
        dispatch({
          type: "UPDATE_CART_PROPERTIES",
          key: "id",
          value: cart?.id || idParam,
        });
      }

      dispatch(getCartItems(cart?.id || idParam));
    } catch (e) {}
  }, []);

  const handleChangeQuantityItem = (cartItem, value) => {
    if (cartItem.quantity + value === 0) {
      return;
    }
    const item = {
      ...cartItem,
      quantity: cartItem.quantity + value,
    };
    dispatch(changeCartItemProperties(item));
    dispatch(updateCartItem(cartItem.quantity + value, cartItem.id));
  };

  const handleDeleteCartItem = (id) => {
    dispatch(deleteCartItem(id));
  };
  const handleDeleteAllCartItem = (id) => {
    dispatch({
      type: "UPDATE_CART_PROPERTIES",
      key: "items",
      value: [],
    });
    dispatch(deleteAllCartItem(cart?.id));
  };
  const handleCheckAll = () => {
    if (checkAll) {
      setCheckAll(false);
      setCheckList([]);
    } else {
      setCheckAll(true);
      const ids = cart?.items?.map((e) => e.id);
      setCheckList(ids);
    }
  };

  const handleCheckItem = (id) => {
    if (checkList?.includes(id)) {
      const newCheckList = checkList?.filter((e) => e !== id);
      setCheckList(newCheckList);
    } else {
      setCheckList(checkList.concat(id));
    }
  };

  const handleTotalPrice = useMemo(() => {
    const cartSelect = cart?.items?.filter((e) => checkList?.includes(e.id));
    let price = 0;
    const temp = cartSelect?.map((e) => {
      price += e.quantity * e.price;
    });
    return price;
  }, [checkList]);


  return (
    <>
      <div className="cart-wrapper">
        <HeaderNav />
        <hr />
        <div className="cart-content">
          <div className="cart-table">
            <div className="cart-header">
              <div className="header_top">
                <div className="text-cart">Cart</div>
                <div
                  className="text-action"
                  onClick={() => handleDeleteAllCartItem()}
                >
                  <span>
                    <i class="fa-solid fa-trash"></i>
                  </span>
                  <span>Remove</span>
                </div>
              </div>
              <div className="header_bottom">
                <div className="text-product">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkAll}
                        onChange={() => handleCheckAll()}
                      />
                    }
                    label="Product"
                  />
                </div>
                <div className="text-quantity">Quantity</div>
                <div className="text-price">Price</div>
              </div>
            </div>
            <div className="cart-body">
              {cart?.items?.map((e) => {
                return (
                  <div className="cart-item">
                    <div className="text-product">
                      <span>
                        <input
                          type="checkbox"
                          checked={checkList?.includes(e.id)}
                          onChange={() => handleCheckItem(e.id)}
                        ></input>
                      </span>
                      <span>
                        <img src={e?.image}></img>
                      </span>
                      <span>{e?.name}</span>
                    </div>
                    <div className="text-quantity">
                      <div className="">
                        <div className="box">
                          <span onClick={() => handleChangeQuantityItem(e, -1)}>
                            <i class="fa-solid fa-minus"></i>
                          </span>
                          <span>{e?.quantity}</span>
                          <span onClick={() => handleChangeQuantityItem(e, 1)}>
                            <i class="fa-solid fa-plus"></i>
                          </span>
                        </div>
                        <div
                          className="remove-item"
                          onClick={() => handleDeleteCartItem(e.id)}
                        >
                          <span>
                            <i class="fa-solid fa-trash"></i>
                          </span>
                          <span>Remove</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-price">{e?.price * e?.quantity}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="checkout-box">
            <div className="total">
              <div className="text">Subtotal</div>
              <div className="value">{handleTotalPrice}</div>
            </div>
            <div className="checkout">
              <div>
                <div className="text">GrandTotal</div>
                <div className="value">{handleTotalPrice}</div>
              </div>
              <Button onClick={() => setOpenCheckoutModal(true)}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
      {openCheckoutModal ? (
        <CheckoutModal
          open={openCheckoutModal}
          handleClose={() => setOpenCheckoutModal(false)}
        />
      ) : null}
    </>
  );
}
export default Cart;
