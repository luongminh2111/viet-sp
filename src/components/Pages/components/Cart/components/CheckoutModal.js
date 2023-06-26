import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { useState } from "react";
import "../styles/CheckoutModal.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, deleteCartItem } from "../../Cart/actions/CartActionCallApi";
import { initCart, getCartByUser } from "../../../actions/AccountActionCallApi";

function CheckoutModal(props) {
  const { open, handleClose, checkList, handleTotalPrice, unCheckList } = props;
  const [openResult, setOpenResult] = useState(false);
  const cartId = useSelector(state => state.cart?.id);
  const items = useSelector((state) => state.cart?.items);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.account);

  const itemsSelect = useMemo(() => {
    return items?.filter((e) => checkList?.includes(e.id));
  }, [checkList, items]);

  const handlePayment = (totalPrice) => {
    setOpenResult(true);

    unCheckList?.map((e) => {
      console.log(e);
      dispatch(deleteCartItem(e));
    });
    const cartModel = {
      userId: auth.userId,
      priceTotal: totalPrice,
      paymentMethod: "CASH DELIVERY",
      status: "PROCESS",
    }
    dispatch(updateCart(cartId, cartModel));
    dispatch(initCart(auth.userId));
    dispatch(getCartByUser(auth.userId));
  };

  const handleCloseModal = () => {
    setOpenResult(false);
    handleClose();
  }

  const renderResultCheckout = () => {
    return (
      <Dialog open={openResult} className="dialog-result">
        <DialogTitle >
          <Box className="title-result">
            <i class="fa-sharp fa-solid fa-circle-check"></i>
            <p>Thanks for your order </p>
          </Box>
          <Box className="text-send-mail">
            The order confirmation has been send to your email
          </Box>

        </DialogTitle>
        <DialogActions className="d-flex justify-content-center">
          <Button color="error" onClick={() => handleCloseModal()}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  if(open && openResult) {
    return renderResultCheckout();
  }

  return (
    <Dialog open={open} className="dialog-checkout">
      <DialogTitle className="checkout-title">
        <Typography className="text-align-center">Your order</Typography>
      </DialogTitle>
      <DialogContent>
        <Box className="list-items">
          {itemsSelect?.map((e) => {
            return (
              <Box className="item">
                <Box className="image">
                  <img src={e?.image}></img>
                </Box>
                <Box className="name">
                  <Box className="text">{e?.name}</Box>
                  <Box className="mt-3">x{e?.quantity}</Box>
                </Box>
                <Box className="price">
                  ${(e?.price - e?.sale) * e.quantity}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className="total-price">
          <Box>
            <Box className="text">GrandTotal</Box>
            <Box className="value">${handleTotalPrice}</Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleClose()}
          sx={{ marginRight: "16px" }}
        >
          Cancel
        </Button>
        <Button variant="contained" onClick={() => handlePayment(handleTotalPrice)}>
          Confirm payment
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default CheckoutModal;
