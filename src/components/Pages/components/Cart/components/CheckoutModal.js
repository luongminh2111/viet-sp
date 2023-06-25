import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

function CheckoutModal(props) {
  const { open, handleClose } = props;
  const [openResult, setOpenResult] = useState(false);

  const handlePayment = () => {
    setOpenResult(true);
  };

  const renderResultCheckout = () => {
    return (
      <Dialog open={openResult} className="dialog-result">
        <DialogTitle className="title">
          <div>
            <i class="fa-sharp fa-solid fa-circle-check"></i>
            <p>Thanks for your order </p>
          </div>
        </DialogTitle>
        <DialogContent>
          <Box>aaaaaa</Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          <Button>Confirm payment</Button>
        </DialogActions>
      </Dialog>
    );
  };
  console.log("check openResult : ", openResult);
  return openResult ? (
    renderResultCheckout()
  ) : (
    <Dialog open={open} className="dialog-checkout">
      <DialogTitle>
        <Typography className="text-align-center">Prepayment Info</Typography>
      </DialogTitle>
      <DialogContent>
        <Box>aaaaaa</Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button onClick={() => handlePayment()}>Confirm payment</Button>
      </DialogActions>
    </Dialog>
  );
}
export default CheckoutModal;
