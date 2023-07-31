import React, { useState } from "react";
import "../styles/SearchStyle.scss";
import { Button, Input } from "@material-ui/core";
import { GridSearchIcon } from "@mui/x-data-grid";
import { search } from "../actions/actionCallApi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Alerts from "../../../commons/Alert";
function Search(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.account);

  const history = useHistory();
  const [searchItem, setSearchItem] = useState("hotel");
  const [name, setName] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  // const renderLabel = () => {
  //   switch (searchItem) {
  //     case "hotel":
  //       return <div>Khách sạn</div>;
  //     case "tour":
  //       return <div>Thành phố / Địa điểm</div>;
  //     case "vehicle":
  //       return <div>Một chiều / Khứ hồi / Đưa đón sân bay</div>;
  //     default:
  //       return;
  //   }
  // };
  const renderLabel = () => {
    switch (searchItem) {
      case "hotel":
        return <div>Khách sạn</div>;
      case "tour":
        return <div>Thành phố / Địa điểm</div>;
      default:
        return;
    }
  };
  
  const handleFilterLocation = (e) => {
    setName(e.target.value);
  }

  const handleSearch = () => {
    if(auth?.userId > 0) {
      dispatch(search(searchItem, name));
      history.push({
        pathname: `/${searchItem}`,
        state: { name: name }
      });
    } else {
      setOpenAlert(true);
    }

  }

  return (
    <div className="search-wrapper">
      <div className="list-options-search">
        <div className="item hotel" onClick={() => setSearchItem("hotel")}>
          <div className="icon">
            <i
              className="fa-solid fa-hotel"
              style={{ fontSize: "30px", marginRight: "8px" }}
            ></i>
          </div>
          <div className="text">Khách sạn</div>
        </div>
        <div className="item tour" onClick={() => setSearchItem("tour")}>
          <div className="icon">
            <i
              className="fa-solid fa-plane-departure"
              style={{ fontSize: "30px", marginRight: "8px" }}
            ></i>
          </div>
          <div className="text">Tour</div>
        </div>
        {/* <div className="item car" onClick={() => setSearchItem("vehicle")}>
          <div className="icon">
            <i
              className="fa-solid fa-car"
              style={{ fontSize: "30px", marginRight: "8px" }}
            ></i>
          </div>
          <div className="text">Vehicle</div>
        </div> */}
      </div>
      <div className="search-input">
        <div className="input-wrapper">
          <div className={`arrow-top ${searchItem}`}></div>
          <div className="label">{renderLabel()}</div>

          <div className="search-btn d-flex">
            <Input placeholder="Bạn định đến đâu ?" onChange={(e) => handleFilterLocation(e)} />
            <Button
              startIcon={<GridSearchIcon />}
              variant="contained"
              color="#0088FF"
              onClick={() => handleSearch()}
            >
              Tìm kiếm
            </Button>
          </div>
        </div>
      </div>
      {openAlert ? (
        <Alerts
          text="Bạn cần đăng nhập để sử dụng chức năng này"
          status="error"
          open={openAlert}
          setOpen={setOpenAlert}
        />
      ) : null}
    </div>
  );
}
export default Search;
