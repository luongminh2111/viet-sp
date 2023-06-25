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
import { useSelector } from "react-redux";

function CheckoutModal(props) {
  const { open, handleClose, checkList, handleTotalPrice } = props;
  const [openResult, setOpenResult] = useState(false);

  const items = useSelector((state) => state.cart?.items);

  const itemsSelect = useMemo(() => {
    return items?.filter((e) => checkList?.includes(e.id));
  }, [checkList, items]);
  console.log("itemsSelect : ", itemsSelect);
  const handlePayment = () => {
    setOpenResult(true);
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
        <Button variant="contained" onClick={() => handlePayment()}>
          Confirm payment
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default CheckoutModal;
