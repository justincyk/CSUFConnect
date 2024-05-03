import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth({
  label,
  options,
  onChange,
  defaultValue,
}) {
  const [val, setVal] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setVal(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 165 }}>
        <InputLabel id="simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="simple-select-autowidth-label"
          id="simple-select-autowidth"
          value={val}
          onChange={handleChange}
          autoWidth
          label={label}
          required={true}
          defaultValue={defaultValue}
        >
          {options.map((title, index) => (
            <MenuItem value={title} key={index}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
