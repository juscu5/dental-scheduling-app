import { Box, Typography, Card, CardContent, Stack, Toolbar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

// image import
import bgrnd from "../_shared/assets/about-us.webp";

import { CustomFooter } from "../_shared/components/CustomFooter";
import { useNavigate } from "react-router-dom";

export const AboutUs = () => {
  const navigate = useNavigate();
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
            About Us
          </Typography>
        </Box>

        {/* About Us Section */}
        <Box
          component="section"
          sx={{
            background: "#fff",
            p: 10,
            pl: { xs: 2, sm: 6, md: 10, lg: 20 },
            pr: { xs: 2, sm: 6, md: 10, lg: 20 },
            mt: 4,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          <Typography variant="h4" color="primary" textAlign={"center"}>
            HISTORY
          </Typography>
          <Typography variant="h6" mt={3} mb={5}>
            Doc Juan Dela Cruz has been a dentist for more than three decades, with
            a thriving practice he has nurtured and built from the ground up. In
            1978, he graduated from the University of the East in the Top 10 of
            the Dental Board Exams and obtained his post-graduate degrees in
            dental surgery from Indonesia and Golden Bridge in 2010. Initially starting
            as a corporate dentist for Philacor, he eventually started his own
            clinic in 1982 making a name for himself as a hardworking, reliable
            corporate dentist. By 1995, he had offices in five cities across the
            metro, with a flagship office in Filinvest, Alabang. Now, with 40
            employees across three locations. JDC Dental Group is the
            premier corporate dental group in Northern Metro Manila.
          </Typography>
        </Box>

        <Stack flexDirection="row" gap={2} width="100%" flexWrap="wrap">
          <Box
            component="section"
            sx={{
              background: "#fff",
              p: 10,
              pl: { xs: 2, sm: 6, md: 10, lg: 20 },
              pr: { xs: 2, sm: 6, md: 10, lg: 20 },
              mt: 6,
              textAlign: "center",
              color: "text.primary",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h4" color="primary" textAlign={"center"}>
              VISION
            </Typography>
            <Typography variant="h6" mt={3} mb={5}>
              Our Vision is to be the preferred dental clinic of all the clients
              we serve.
            </Typography>
            <Typography variant="h4" color="primary" textAlign={"center"}>
              MISSION
            </Typography>
            <Typography variant="h6" mt={3} mb={5}>
              The Mission of JDC Dental Clinic is to provide the best
              dental health service by continuously aiming for excellence
              through a constant, healthy, and dynamic relationship with our
              patients.
            </Typography>
          </Box>
          <Box
            component="section"
            sx={{
              background: "#fff",
              p: 10,
              pl: { xs: 2, sm: 6, md: 10, lg: 20 },
              pr: { xs: 2, sm: 6, md: 10, lg: 20 },
              mt: 4,
              textAlign: "center",
              color: "text.primary",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h4" color="primary" textAlign={"center"}>
              Our Team
            </Typography>
            <Typography variant="h6" mt={3} mb={5}>
              JDC Dental core team began in 2002, composed of PUP Graduates
              from multiple disciplines and backgrounds. Through Doc Juan's
              leadership, guidance and mentorship, the core team has been able
              to create a healthy working environment that fosters
              specialization and a multi-disciplinary approach to patient
              treatment. This unique approach has made JDC Dental Clinic a
              center of learning where professional growth and exposure is
              consistent and reliable, allowing like-minded dentists and
              professionals to thrive and work harmoniously.
            </Typography>
          </Box>
        </Stack>

        <Toolbar/>

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

export default AboutUs;
