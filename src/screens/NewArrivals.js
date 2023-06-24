import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  ImageList,
} from "@mui/material";
import {
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import "react-horizontal-scrolling-menu/dist/styles.css";
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));
const data = [
  {
    img: p1,
    title: "Product 1",
    price: "$100",
  },
  {
    img: p2,
    title: "Product 2",
    price: "$200",
  },
  {
    img: p3,
    title: "Product 3",
    price: "$300",
  },
  {
    img: p4,
    title: "Product 4",
    price: "$400",
  },
  {
    img: p4,
    title: "Product 4",
    price: "$400",
  },
  {
    img: p4,
    title: "Product 4",
    price: "$400",
  },
];

export default function NewArrivals() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset) => {
    setScrollPosition((prevPosition) => prevPosition + scrollOffset);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        mt: "50px",
        mb: "50px",
      }}
    >
      <Container
        sx={{
          mb: "30px",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            mb: "30px",
          }}
        >
          ⭐ New Arrivals ⭐
        </Typography>
        <Typography
          sx={{
            color: "#000",
            fontSize: "20px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </Typography>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "30px",
          width: "100%",
          overflow: "auto",
        }}
      >
        <IconButton onClick={() => handleScroll(100)}>
          <Box
            sx={{
              backgroundColor: "#d3d3d3",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineLeft
              style={{
                fontWeight: "bold",
              }}
            />
          </Box>
        </IconButton>
        <ImageList
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            scrollbarWidth: "none" /* For Firefox */,
            msOverflowStyle: "none",
            overflow: "auto",
            '&::-webkit-scrollbar': {
                display: "none",
            },
            gridAutoFlow: "column",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)",
          }}
        >
          {data.map((item, index) => (
            <ListItems
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </ImageList>
        <IconButton onClick={() => handleScroll(100)}>
          <Box
            sx={{
              backgroundColor: "#d3d3d3",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineRight />
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
}

const ListItems = ({ img, title, price }) => {
  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        borderRadius: "10px",
        pb: "20px",
        border: "1px solid #d3d3d3",
        mr: "30px",
      }}
    >
      <Box
        sx={{
          width: "250px",
          height: "250px",
          backgroundColor: "#d3d3d3",
          borderRadius: " 10px 10px 0px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="150px" src={img} alt="" />
      </Box>
      <Container
        sx={{
          gap: "20px",
        }}
      >
        <Typography>{title}</Typography>
        <Typography
          sx={{
            color: "red",
            textDecoration: "underline",
          }}
        >
          {price}
        </Typography>
        <Button
          sx={{
            mt: "10px",
            backgroundColor: "yellow",
            borderRadius: "20px",
            padding: "10px 20px",
            width: "100%",
          }}
          variant="contained"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexDirection: "row",
              textTransform: "none",
              color: "#000",
            }}
          >
            <AiOutlineShoppingCart />
            <Typography>Add to Cart</Typography>
          </Box>
        </Button>
      </Container>
    </Box>
  );
};
