import { Radio } from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../styles/FilterData/FilterSale.scss";
import React from "react";
import { useState } from "react";

function FilterSale() {
  const [saleSelect, setSaleSelect] = useState(0);

  const handleSelectRadio = (e) => {
    setSaleSelect(e.target.value);
  };

  return (
    <div className={`sale-wrapper`}>
      <div className="title">Hot Sale</div>
      <div className="sale-list">
        {saleFake?.map((e, index) => {
          return (
            <div className={`sale-item`} key={index}>
              <FormControlLabel
                value={e.value}
                control={
                  <Radio
                    checked={e.value === Number(saleSelect)}
                    onChange={(e) => handleSelectRadio(e)}
                  />
                }
                label={`${e.value}$`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FilterSale;

const saleFake = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
  {
    id: 4,
    value: 40,
  },
  {
    id: 5,
    value: 50,
  },
  {
    id: 6,
    value: 60,
  },
  {
    id: 7,
    value: 70,
  },
  {
    id: 8,
    value: 80,
  },
  {
    id: 9,
    value: 90,
  },
];
