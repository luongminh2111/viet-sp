

import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import "../styles/FilterData/FilterLocaton.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

function FilterLocation(props){
  const { type } = props;
  const [locationValue, setLocationValue] = useState('');

  const handleFilterLocation = (e) => {
    setLocationValue(e.target.value);
  }

  const dispatch = useDispatch();

  const handleChangeFilter = () => {
    switch (type) {
      case "blog": {
        dispatch({
          type: "CHANGE_FILTER_BLOG",
          key: "location",
          data: locationValue,
        });
        break;
      }
      case "hotel": {
        dispatch({
          type: "CHANGE_FILTER_HOTEL",
          key: "location",
          data: locationValue,
        });
        break;
      }
      case "tour": {
        dispatch({
          type: "CHANGE_FILTER_TOUR",
          key: "location",
          data: locationValue,
        });
        break;
      }
      case "vehicle": {
        dispatch({
          type: "CHANGE_FILTER_VEHICLE",
          key: "location",
          data: locationValue,
        });
        break;
      }
      default:
        return;
    }
  };

  return (
    <div className="filter-location-wrapper">
      <div className="title">
        Destination or name
      </div>
      <div className="input-field">
      <TextField id="standard-basic" label="Search..." variant="standard" onChange={(e) => handleFilterLocation(e)} />
      </div>
      <Button variant="contained" onClick={() => handleChangeFilter()}>Search</Button>
    </div>      
  )
}
export default FilterLocation;