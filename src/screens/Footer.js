import React from "react";
import { Box, Grid, Typography,useTheme,useMediaQuery } from "@mui/material";
import { HiLocationMarker } from "react-icons/hi";
import {BsPhoneFill} from "react-icons/bs";
export default function Footer() {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{
        mt:-1.5,
    }}>
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
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
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
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              borderLeft: "2px solid #fff",
            }}
            item
            xs={12}
            md={4}
          >
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
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#111111",
          height: isMobile?"70vh":"50vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                m: "30px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                m: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Information
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    About
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Delivery
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Privacy & Policy
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Sales
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Terms and Conditions
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Payment
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                m: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                if You have any questions, please feel free to contact us on{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  anojadubey@gmail.com
                </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <HiLocationMarker color="#fff" />
                <Typography
                  sx={{
                    color: "#fff",
                  }}
                >
                  India
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <BsPhoneFill color="#fff" />
                <Typography
                  sx={{
                    color: "#fff",
                  }}
                >
                  8652477995
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
