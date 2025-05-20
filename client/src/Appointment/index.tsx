import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Login from "./login";
import { CustomFooter } from "../_shared/components/CustomFooter";

// image import
import bgrnd from "../_shared/assets/book-appointment.jpg";

export const Appointment = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${bgrnd})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        boxShadow: 3,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Stack
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          {/* Hero Section */}
          <Box
            component="section"
            sx={{
              mt: 15,
              mb: 15,
              ml: { xs: 0, sx: 22, md: 22, lg: 22 },
              textAlign: { xs: "center", sx: "left", md: "left", lg: "left" },
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                color: "#fff",
                textShadow: "5px 5px 8px #000",
                fontWeight: 700,
              }}
            >
              Book An Appointment
            </Typography>
          </Box>

          {/* Appointment Login Section */}
          <Box
            component="section"
            sx={{
              background: "#fff",
              p: 10,
              pl: { xs: 2, sm: 6, md: 10, lg: 20 },
              pr: { xs: 2, sm: 6, md: 10, lg: 20 },
              textAlign: "center",
              color: "text.primary",
            }}
          >
            <Login />
          </Box>
        </Stack>

        {/* Contact Section */}
        <Box textAlign={"center"}>
          <Card sx={{ background: "#f1f8e9" }}>
            <CardContent>
              <Box alignItems="center">
                <Box>
                  <Typography variant="subtitle1">
                    Call us for inquiries or appointments:
                  </Typography>
                  <Typography variant="h6" color="primary">
                    <PhoneIcon
                      fontSize="small"
                      color="success"
                      sx={{ mr: 1 }}
                    />
                    (123) 456-7890
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <CustomFooter />
    </Box>
  );
};

export default Appointment;
