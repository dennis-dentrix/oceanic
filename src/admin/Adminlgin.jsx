import { FormControl, Input, InputLabel } from "@mui/material";

export default function Adminlgin() {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="email">Email </InputLabel>
        <Input id="email" />
      </FormControl>
    </div>
  );
}
