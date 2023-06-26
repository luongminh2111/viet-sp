import React from "react";
import HeaderNav from "../../../commons/HeaderNav/HeaderNav";
import Footer from "../../../HomePage/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListOrderedByUser, getUserById, updateProfile, updatePassword } from "./actions/ProfileActionCallApi";
import { useState } from "react";
import "./styles/index.scss";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

function Profile(props) {
  const dispatch = useDispatch();

  const [tab, setTab] = useState(1);
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    dispatch(getUserById()).then((res) => {
      setUser(res);
      setPhone(res?.phone);
      setAddress(res?.address);
      setFullName(res?.fullName);
      setUserName(res?.username);
    });
    dispatch(getListOrderedByUser()).then((json) => setOrders(json));
  }, []);

  const handleChangeTab = (value) => {
    setTab(value);
  };

  const renderOrdered = () => {
    return (
      <div className="order-container">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-item-image">
              <img src={order.image} alt={order.name} />
            </div>
            <div className="order-item-details">
              <div className="order-item-name">{order.name}</div>
              <div className="order-item-price">Price: {order.price}</div>
              <div className="order-item-sale">Sale: {order.price}</div>
              <div className="order-item-quantity">Quantity: {order.quantity}</div>
              <div className="order-item-status">Status: {order.status}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleSaveProfile = () => {
    const updatedUser = { ...user, password, newPassword };
    dispatch(updateProfile(updatedUser))
      .then((response) => {
        if (response.status === 200) {
          setShowSuccessPopup(true);
          console.log("Updated successfully!");
        } else {
          setShowSuccessPopup(false);
          console.error("Failed to update:", response);
        }
      })
      .catch((error) => {
        setShowSuccessPopup(false);
        console.error("Failed to update:", error);
      });
  };
  
  const handleSavePassword = () => {
    const updatedUser = { ...user, password, newPassword };
    console.log(updatedUser);
    dispatch(updatePassword(updatedUser))
      .then((response) => {
        if (response.status === 200) {
          setShowSuccessPopup(true);
          console.log("Updated successfully!");
        } else {
          setShowSuccessPopup(false);
          console.error("Failed to update:", response);
          console.log(showSuccessPopup);
        }
      })
      .catch((error) => {
        setShowSuccessPopup(false);
        console.error("Failed to update:", error);
      });
  };
  

  return (
    <div className="profile-wrapper">
      <HeaderNav />
      <hr />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile"
              />
              <span className="font-weight-bold">{user?.username}</span>
              <span className="text-black-50">{user?.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-6 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className={`text-header-right ${tab === 1 ? "active" : ""}`} onClick={() => handleChangeTab(1)}>
                  Profile Settings
                </h4>
                <h4 className={`text-header-right ${tab === 3 ? "active" : ""}`} onClick={() => handleChangeTab(3)}>
                  Update Password
                </h4>
                <h4 className={`text-header-right ${tab === 2 ? "active" : ""}`} onClick={() => handleChangeTab(2)}>
                  Orders History
                </h4>
              </div>
              {tab === 1 ? (
  <div className="row mt-2">
    <div className="col-lg-12">
      <label className="labels mb-2">Email</label>
      <input type="text" className="form-control mb-3" disabled placeholder="first name" value={user?.email} />
      <label className="labels mb-2">Username</label>
      <input type="text" className="form-control mb-3" disabled placeholder="full name" value={username} />
      <div className="col-md-12">
        <label className="labels">Full name</label>
        <input type="text" className="form-control mb-3" placeholder="first name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-12">
        <label className="labels">Phone Number</label>
        <input type="text" className="form-control mb-3" placeholder="enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="col-md-12">
        <label className="labels">Address</label>
        <input type="text" className="form-control mb-3" placeholder="enter address line 1" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
    </div>
    <div className="mt-5 text-center">
      <button className="btn btn-primary profile-button" type="button" onClick={handleSaveProfile}>
        Save Profile
      </button>
    </div>
  </div>
) : null}

              {tab === 2 && <div className="row mt-2">
                <div className="col-lg-12">{renderOrdered()}</div>
              </div>}
              {tab === 3 ? (
  <div className="row mt-2">
    <div className="col-lg-12">
    <label className="labels mb-2">Email</label>
      <input type="text" className="form-control mb-3" disabled placeholder="first name" value={user?.email} />
      <label className="labels mb-2">Username</label>
      <input type="text" className="form-control mb-3" disabled placeholder="full name" value={username} />
      <div className="col-md-12">
        <label className="labels">Password</label>
        <input type="password" className="form-control mb-3" placeholder="enter current password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="col-md-12">
        <label className="labels">New Password</label>
        <input type="password" className="form-control mb-3" placeholder="enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
    </div>
    <div className="mt-5 text-center">
      <button className="btn btn-primary profile-button" type="button" onClick={handleSavePassword}>
        Update Password
      </button>
    </div>
  </div>
) : null}
            </div>
          </div>
        </div>
      </div>
      <hr />
      {showSuccessPopup ? (
  <Dialog open={showSuccessPopup} className="dialog-result">
    <DialogTitle>
      <Box className="title-result">
        <i className="fa-sharp fa-solid fa-circle-check"></i>
        <p>Update successfully</p>
      </Box>
      <Box className="text-send-mail">
        The update confirmation has been sent to your email
      </Box>
    </DialogTitle>
    <DialogActions className="d-flex justify-content-center">
      <Button color="error" onClick={() => setShowSuccessPopup(false)}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
) : (
  <Dialog open={showSuccessPopup} className="dialog-result">
    <DialogTitle>
      <Box className="title-result">
        <i className="fa-sharp fa-solid fa-circle-check"></i>
        <p>Update failed. Please try again.</p>
      </Box>
    </DialogTitle>
    <DialogActions className="d-flex justify-content-center">
      <Button color="error" onClick={() => setShowSuccessPopup(false)}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
)}

      <Footer />
    </div>
  );
}

export default Profile;
