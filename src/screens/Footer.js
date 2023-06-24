import React from "react";
import { Box, Grid, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                gap: "10px",
                backgroundColor: "#000",
                p: "40px",
                pl: "40px",
                pr: "40px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Free Delivery
              </Typography>
              <Typography
                sx={{ color: "#fff", fontSize: "14px", fontWeight: "400" , textAlign: "center"}}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                gap: "10px",
                backgroundColor: "#000",
                p: "40px",
                pl: "40px",
                pr: "40px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Money Back Guarantee
              </Typography>
              <Typography
                sx={{ color: "#fff", fontSize: "14px", fontWeight: "400" , textAlign: "center"}}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{
            borderLeft: "2px solid #fff",
          }} item xs={12} md={4}>
            <Box
              sx={{
                gap: "10px",
                backgroundColor: "#000",
                p: "40px",
                pl: "40px",
                pr: "40px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Online Support
              </Typography>
              <Typography
                sx={{ color: "#fff", fontSize: "14px", fontWeight: "400" , textAlign: "center"}}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
