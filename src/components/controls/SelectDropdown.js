import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SelectDropdown = (props) => {
  const { label, value, onChange, options } = props;
  const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-label`;
  const selectId = `${label.replace(/\s+/g, "-").toLowerCase()}-select`;
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        id={selectId}
        labelId={labelId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={label}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SelectDropdown;
