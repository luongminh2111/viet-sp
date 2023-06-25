import React from "react";
import HeaderNav from "../../../commons/HeaderNav/HeaderNav";
import Footer from "../../../HomePage/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListOrderedByUser, getUserById } from "./actions/ProfileActionCallApi";
import { useState } from "react";
import "./styles/index.scss";

function Profile(props) {
  const dispatch = useDispatch();

  const [tab, setTab] = useState(1);
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    dispatch(getUserById()).then((res) => {
      setUser(res);
      setPhone(res?.phone);
      setAddress(res?.address);
      setFullName(res?.fullName);
      setUserName(res?.username);
    });
    dispatch(getListOrderedByUser()).then(json => setOrders(json));
  }, []);

  const handleChangeTab = (value) => {
    setTab(value);
  }

  const renderOrdered = () => {
    return(
      <div></div>
    )
  }

  return (
    <div className="profile-wrapper">
      <HeaderNav />
      <hr />
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">{user?.username}</span>
              <span class="text-black-50">{user?.email}</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-6 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class={`text-header-right ${tab === 1 ? 'active' : ''}`} onClick={() => handleChangeTab(1)}>Profile Settings</h4>
                <h4 class={`text-header-right ${tab === 2 ? 'active' : ''}`} onClick={() => handleChangeTab(2)}>Orders History</h4>
              </div>
              {tab === 1 ? 
              <div class="row mt-2">
                <div class="col-lg-12">
                <label class="labels mb-2">Email</label>
                  <input
                    type="text"
                    class="form-control mb-3"
                    disabled
                    placeholder="first name"
                    value={user?.email}
                  />
                  <label class="labels mb-2">Username</label>
                  <input
                    type="text"
                    class="form-control mb-3"
                    disabled
                    placeholder="full name"
                    value={username}
                  />
                   <label class="labels mb-2">Password</label>
                  <input
                    type="password"
                    class="form-control mb-3"
                    placeholder="full name"
                    value={user?.password}
                  />
                  <div class="col-md-12">
                    <label class="labels">Full name</label>
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="first name"
                      value={fullName}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Phone Number</label>
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="enter phone number"
                      value={phone}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Address</label>
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="enter address line 1"
                      value={address}
                    />
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <button class="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
                </div>
              </div> : null}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
export default Profile;
