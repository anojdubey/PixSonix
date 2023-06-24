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
} from "@mui/material";
import backgroundImage from "../assets/bs.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

export default function BestSeller() {
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
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "30px",
          fontWeight: "400",
          textAlign: "center",
          pt: "50px",
          mb: "30px",
        }}
      >
        ⭐ Best Seller Products ⭐
      </Typography>
      <Container>
        <Grid container gap={2}>
          {data.map((product, index) => (
            <Grid item xs={3.8}>
              <Product
                img={product.img}
                title={product.title}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const Product = ({ img, title, price }) => {
  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "row",
        p: "15px",
        borderRadius: "10px",
        border: "1px solid yellow",
        borderRight: "none",
      }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "10px",
      }}>
        <img width="80px" src={img} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          ml: "10px",
        }}
      >
        <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#fff" }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "400", color: "red",textDecoration:"underline" }}>
          {price}
        </Typography>
      </Box>
    </Box>
  );
};
