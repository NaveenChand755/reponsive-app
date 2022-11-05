import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#0A0A0A",
  fontFamily: "Poppins",
  fontSize: "15px",
  fontWeight: 600,
  borderColor: "#0A0A0A",
}));

export default ColorButton;
