import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import jdcImage from "../assets/jdc_dental.png";

export const CustomFooter = () => {
  return (
    <React.Fragment>
      {/* footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          p: 10,
          backgroundColor: "#315A39",
          color: "#fff",
          textAlign: "center",
          borderTop: "1px solid #444",
        }}
      >
        <Stack
          flexDirection={{ sx: "column", sm: "row", md: "row", lg: "row" }}
          gap={2}
        >
          <Box
            width={"100vw"}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          />
          <Box
            width={"100vw"}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          />
          <Box
            width={"100vw"}
            textAlign="left"
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            <img
              src={jdcImage}
              alt="JDC Dental Clinic Logo"
              style={{
                width: 320,
                height: 180,
                marginBottom: 16,
                marginRight: 20,
                filter: "drop-shadow(5px 5px 8px #000)",
              }}
            />
          </Box>
          <Box width={"100vw"} textAlign={"left"}>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#fff",
                mb: 3,
              }}
            >
              SERVICES
            </Typography>
            <Stack>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/services"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Tooth Creaming
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/services"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Cosmetic Dentistry
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/services"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Orthodontics
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/services"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Tooth Fillings
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/services"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Teeth Cleaning
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/services"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Tooth Extraction
              </Typography>
            </Stack>
          </Box>
          <Box width={"100vw"} textAlign={"left"}>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#fff",
                mb: 2,
              }}
            >
              QUICK LINKS
            </Typography>
            <Stack>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/home"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Home
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/services"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Services
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/about-us"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/contact-us"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                component="a"
                href="#/book-an-appointment"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#90caf9",
                  },
                }}
              >
                Book An Appointment
              </Typography>
            </Stack>
          </Box>
          <Box width={"100vw"} textAlign={"left"}>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#fff",
                mb: 2,
              }}
            >
              SOCIAL MEDIA
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <Typography
                component="a"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  "&:hover": { color: "#90caf9", textDecoration: "underline" },
                }}
              >
                <svg width="24" height="24" fill="currentColor">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12" />
                </svg>
              </Typography>
              <Typography
                component="a"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  "&:hover": { color: "#90caf9", textDecoration: "underline" },
                }}
              >
                <svg width="24" height="24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </Typography>
            </Stack>
          </Box>
          <Box
            width={"100vw"}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          />
          <Box
            width={"100vw"}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          />
        </Stack>
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: "rgba(0,0,0,0.85)",
          color: "#fff",
          textAlign: "center",
          borderTop: "1px solid #444",
        }}
      >
        <Typography variant="body2" sx={{ mb: 1 }}>
          &copy; {new Date().getFullYear()} JDC Dental Clinic. All rights
          reserved.
        </Typography>
        <Typography variant="caption" sx={{ display: "block" }}>
          Designed with <span style={{ color: "#f44336" }}>&hearts;</span> for
          your smile.
        </Typography>
      </Box>
    </React.Fragment>
  );
};
