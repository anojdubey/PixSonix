import React from "react";
import { Box, Grid, Typography, Container, useTheme } from "@mui/material";
import backgroundImage from "../assets/redcar.png";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import { AiOutlineRight } from "react-icons/ai";
import useMediaQuery from "@mui/material/useMediaQuery";
import NewArrivals from "./NewArrivals";
import BestSeller from "./BestSeller";
import Footer from "./Footer";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        m: 0,
        p: 0,
      }}
    >
      <Grid
        sx={{
          m: 0,
          p: 0,
        }}
        container
      >
        <Grid item xs={12}>
          <Box
            sx={{
              height: "60vh",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Container>
              <Typography
                sx={{ color: "#fff", fontSize: "40px", fontWeight: "bold" }}
              >
                Experince The Power Within
              </Typography>
              <Typography
                sx={{ color: "#fff", fontSize: "16px", fontWeight: "400" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
              <CollectionBox />
            </Container>
          </Box>
        </Grid>
        <Grid
          sx={{
            height: "50vh",
          }}
          item
          xs={4}
        >
          <Box sx={{
            height: "50vh",
            backgroundImage: `url(${logo1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
          </Box>
        </Grid>
        <Grid
          sx={{
            height: "50vh",
          }}
          item
          xs={4}
        >
          <Box sx={{
            height: "50vh",
            backgroundImage: `url(${logo2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
            {/* <img height={isMobile?"151px":"361px"} src={logo1} alt="logo" /> */}
          </Box>
        </Grid>
        <Grid
          sx={{
            height: "50vh",
          }}
          item
          xs={4}
        >
          <Box sx={{
            height: "50vh",
            backgroundImage: `url(${logo3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
            {/* <img height={isMobile?"151px":"361px"} src={logo1} alt="logo" /> */}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <NewArrivals/>
        </Grid>
        <Grid item xs={12}>
          <BestSeller/>
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
}

const CollectionBox = () => {
  return (
    <Box
      sx={{
        m: 0,
        marginTop: "20px",
        display: "flex",
        width: "190px",
        flexDirection: "row",
        position: "relative",
        borderRadius: "25px",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#111111",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          padding: "15px",
        }}
      >
        View Collection
      </Typography>
      <Box
        sx={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: "0px",
        }}
      >
        <AiOutlineRight
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
          color="black"
        />
      </Box>
    </Box>
  );
};
