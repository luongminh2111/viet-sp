import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../styles/Register.scss";
import { Close } from "@material-ui/icons";
import { register } from "../../actions/AccountActionCallApi";

function Register(props) {
  const { open, handleClose, handleOpenLoginForm } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorPass, setErrorPass] = useState(false);
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);
  const [messageConfirmPass, setMessageConfirmPass] = useState("");
  const [messagePass, setMessagePass] = useState("");
  const [messageMail, setMessageMail] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messageUserName, setMessageUserName] = useState("");
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  const dispatch = useDispatch();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const onCloseClickHandler = (event) => {
    setShowSnackbar(false);
  };

  const CustomSnackbar = (props) => (
    <Snackbar
      autoHideDuration={2000}
      open={showSnackbar}
      onClose={onCloseClickHandler}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      children={props.children}
    ></Snackbar>
  );

  const handleChangeMail = (value) => {
    if (handleValidateEmail(value)) {
      setErrorMail(true);
      setMessageMail("Email is not in the correct format");
    } else {
      setErrorMail(false);
      setMessageMail("");
    }
    setEmail(value);
  };

  const handleChangePass = (value) => {
    if (value?.length < 6) {
      setErrorPass(true);
      setMessagePass("Password must not be less than 6 characters");
    } else {
      setErrorPass(false);
      setMessagePass("");
      setPassword(value);
    }
  };

  const handleValidatePhone = (phone) => {
    const phoneFormat = /^[0-9]{10,11}$/;
    if(phone.match(phoneFormat)){
      return false;
    }
    return true;
  }

  const handleChangePhone = ( value ) => {
    if((value?.length < 10 && value?.length > 11) || handleValidatePhone(value)){
      setErrorPhone(true);
      setMessagePhone("Phone number is not in the correct format")
    } else {
      setErrorPhone(false);
      setMessagePhone("");
      setPhoneNumber(value);
    }
  }

  const handleChangeConfirmPass = (value) => {
    if (value !== password) {
      setErrorConfirmPass(true);
      setMessageConfirmPass("Password does not match");
    } else {
      setErrorConfirmPass(false);
      setMessageConfirmPass("");
    }
  };

  const handleValidateEmail = (mail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return false;
    }
    return true;
  };
  
  const handleChangeUserName = (value) => {
    if(value?.length === 0){
      setErrorUserName(true);
      setMessageUserName("Username cannot be blank");
    } else {
      setErrorUserName(false);
      setMessageUserName('');
      setUsername(value);
    }
  }

  const handleRegister = () => {
    if (email?.length === 0) {
      setErrorMail(true);
      setMessageMail("Email cannot be blank");
      return;
    }
    if (username?.length === 0) {
      setErrorUserName(true);
      setMessageUserName("Username cannot be blank");
      return;
    }
    if(phoneNumber?.length === 0) {
      setErrorPhone(true);
      setMessagePhone("Phone number cannot be blank");
      return;
    }
    if (password?.length === 0) {
      setErrorPass(true);
      setMessagePass("Password cannot be blank");
      return;
    } 
    if (!errorConfirmPass && !errorMail && !errorPass && !errorPhone && !errorUserName) {
      const registerRequest = {
        username: username,
        email: email,
        password: password,
        phone: phoneNumber,
      }
      dispatch(register(registerRequest)).then(json => {
        console.log("check json :", json);
        if(json){
          setTimeout(() => {
            handleOpenLoginForm();
          }, [2000])
        } else {
          setDuplicate(true);
        }
        setShowSnackbar(true);
        setShowAlert(true);
      })
    }
  };

  return (
    <Dialog
      className="dialog-register"
      open={open}
      maxWidth="lg"
      onClose={handleClose}
    >
      <DialogTitle>
        <Box className="head">
          <ArrowCircleLeftOutlinedIcon onClick={handleOpenLoginForm} />
        </Box>
        <Box>Đăng ký tài khoản</Box>
        <Box className="close">
          <Close onClick={handleClose} />
        </Box>
      </DialogTitle>
      <DialogContent>
        <div className="register-container">
          <Box className="register-form">
            <Box className="row">
              <Box className="username form-input">
                <Box className="txt-label">Username</Box>
                <TextField
                  variant="outlined"
                  error={errorUserName}
                  helperText={messageUserName}
                  onChange={(e) => handleChangeUserName(e.target.value)}
                />
              </Box>
              <Box className="email form-input">
                <Box className="txt-label">Email</Box>
                <TextField
                  variant="outlined"
                  error={errorMail}
                  helperText={messageMail}
                  onChange={(e) => handleChangeMail(e.target.value)}
                />
              </Box>
            </Box>
            <Box className="row">
              <Box className="password form-input">
                <Box className="txt-label">Password</Box>
                <TextField
                  type="password"
                  error={errorPass}
                  helperText={messagePass}
                  variant="outlined"
                  onChange={(e) => handleChangePass(e.target.value)}
                />
              </Box>
              <Box className="phone form-input">
                <Box className="txt-label">Phone number</Box>
                <TextField
                  variant="outlined"
                  error={errorPhone}
                  helperText={messagePhone}
                  onChange={(e) => handleChangePhone(e.target.value)}
                />
              </Box>
            </Box>
            <Box className="row">
              <Box className="password-confirm form-input">
                <Box className="txt-label">Confirm password</Box>
                <TextField
                  type="password"
                  error={errorConfirmPass}
                  helperText={messageConfirmPass}
                  variant="outlined"
                  onChange={(e) => handleChangeConfirmPass(e.target.value)}
                />
              </Box>
            </Box>

            <Box className="btn-list">
              <Button
                variant="outlined"
                className="signup-btn"
                onClick={handleRegister}
              >
                Đăng ký
              </Button>
              <Button
                variant="text"
                className="signin-btn"
                onClick={handleOpenLoginForm}
              >
                Đăng nhập
              </Button>
            </Box>
          </Box>
          {showAlert ? (
            duplicate ? (
              <CustomSnackbar>
                <Alert severity="error">
                Account registration failed, please try again
                </Alert>
              </CustomSnackbar>
            ) : (
              <CustomSnackbar>
                <Alert severity="success">Successful account registration</Alert>
              </CustomSnackbar>
            )
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default Register;
