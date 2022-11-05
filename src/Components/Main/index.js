import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { listImages } from "../../Containers/actions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ColorButton from "../Button/Button";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: "left",
  color: "#0A0A0A",
  boxShadow: "none",
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "40px",
}));

const ItemRight = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    textAlign: "right",
    color: "#0A0A0A",
    boxShadow: "none",
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "40px",
  }));

export default function Main() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listImages());
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
            <Item sx={{ m: 0.5 }}>
              We are an award winning interior design Agency
            </Item>
            <ItemRight >
            <ColorButton
              variant="outlined"
              size="small"
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              View all properties
            </ColorButton>
            </ItemRight>
      </Box>
      <Container maxWidth="lg" >
        <ImageList variant="masonry" cols={3} gap={8}>
          {state.imagesReducer.images.data?.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.photo}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
}
