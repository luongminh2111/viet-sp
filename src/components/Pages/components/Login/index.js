import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@material-ui/icons";
import "../styles/Login.scss";
import { login } from "../../actions/AccountActionCallApi";
import { useHistory } from "react-router-dom";
import Alerts from "../../../../commons/Alert";

function Login(props) {
  const { open, handleClose, handleOpenRegisterForm } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [messageUsername, setMessageUsername] = useState("");
  const [messagePass, setMessagePass] = useState("");
  const [textError, setTextError] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();

  const onClose = () => {
    handleClose();
    dispatch({type: 'CHECK_AUTH', value: false})
  }

  const history = useHistory();

  const handleChangePass = (value) => {
    if (value.length === 0) {
      setErrorPass(true);
      setMessagePass("Mật khẩu không được để trống");
    } else if (value?.length < 6) {
      setErrorPass(true);
      setMessagePass("Mật khẩu không được ít hơn 6 ký tự");
    } else {
      setErrorPass(false);
      setMessagePass("");
      setPassword(value);
    }
  };

  const handleChangeUsername = (value) => {
    if (value.length === 0) {
      setErrorUsername(true);
      setMessageUsername("Tên người dùng không thể để trống");
    } else {
      setErrorUsername(false);
      setMessageUsername("");
    }
    setUsername(value);
  };

  const handleLogin = () => {
    if (username?.length === 0) {
      setErrorUsername(true);
      setMessageUsername("Tên người dùng không thể để trống");
    } else if (password?.length === 0) {
      setErrorPass(true);
      setMessagePass("Mật khẩu không được để trống");
    } else if (!errorUsername && !errorPass) {
      const loginRequest = {
        username: username,
        password: password,
      };
      dispatch(login(loginRequest)).then((json) => {
        if (json?.error) {
          setTextError(json?.error);
          setOpenAlert(true);
        } else {
          setOpenAlert(true);
          setTimeout(() => {
            handleClose();
            history.push("/");
          }, [1000]);
        }
      });
    }
  };

  return (
    <Dialog
      className="dialog-login"
      open={open}
      maxWidth="lg"
      onClose={onClose}
    >
      <DialogTitle>
        <Box className="head">
          <ArrowCircleLeftOutlinedIcon onClick={handleOpenRegisterForm} />
        </Box>
        <Box>Đăng nhập</Box>
        <Box className="close">
          <Close onClick={onClose} />
        </Box>
      </DialogTitle>
      <DialogContent>
        <div className="login-container">
          <Box className="login-form">
            <Box className="username form-input">
              <Box className="txt-label">Tên người dùng</Box>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Enter your username"
                error={errorUsername}
                helperText={messageUsername}
                onChange={(e) => handleChangeUsername(e.target.value)}
              />
            </Box>
            <Box className="password form-input">
              <Box className="txt-label">Mật khẩu</Box>
              <TextField
                type="password"
                error={errorPass}
                placeholder="Enter your password"
                helperText={messagePass}
                variant="outlined"
                onChange={(e) => handleChangePass(e.target.value)}
              />
            </Box>
            <Box className="btn-list">
              <Button
                variant="outlined"
                className="signin-btn"
                onClick={handleLogin}
              >
                Đăng nhập
              </Button>
              <Button
                variant="text"
                className="signup-btn"
                onClick={handleOpenRegisterForm}
              >
                Đăng ký
              </Button>
            </Box>
          </Box>
          {openAlert && textError?.length > 0 ? (
            <Alerts
              text={textError}
              status="error"
              open={openAlert}
              setOpen={setOpenAlert}
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default Login;
