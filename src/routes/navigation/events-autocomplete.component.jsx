import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useSelector } from "react-redux";
import { selectEventDetails } from "../../store/event/eventSlice";

export default function EventSelect({ onEventSelect }) {
  const events = useSelector(selectEventDetails);
  return (
    <Autocomplete
      id="event-select"
      sx={{ width: 300 }}
      onChange={(event, newValue) => {
        onEventSelect(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      options={events}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for an event"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
}
