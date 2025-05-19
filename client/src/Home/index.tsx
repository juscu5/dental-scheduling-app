import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Avatar,
  Toolbar,
  AvatarGroup,
} from "@mui/material";
import { Grid } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PhoneIcon from "@mui/icons-material/Phone";

// image import
import jdcImage from "../_shared/assets/jdc_dental.png";
import bgrnd from "../_shared/assets/background.png";
import dentist1 from "../_shared/assets/dentist1.png";
import dentist2 from "../_shared/assets/dentist2.png";
import dentist3 from "../_shared/assets/dentist3.png";
import dentist4 from "../_shared/assets/dentist4.png";
import dentist5 from "../_shared/assets/dentist5.png";
import dentist6 from "../_shared/assets/dentist6.png";
import dentist7 from "../_shared/assets/dentist7.png";
import dentist8 from "../_shared/assets/dentist8.png";
import { CustomFooter } from "../_shared/components/CustomFooter";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
          <LocalHospitalIcon
            color="primary"
            sx={{
              fontSize: 60,
              mb: 2,
              color: "#fff",
              ml: "auto",
              textShadow: "5px 5px 8px #000",
            }}
          />
          <img
            src={jdcImage}
            alt="JDC Dental Clinic Logo"
            style={{
              width: 100,
              height: 60,
              marginBottom: 16,
              marginLeft: "auto",
              filter: "drop-shadow(5px 5px 8px #000)",
            }}
          />
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "#fff",
              textShadow: "5px 5px 8px #000",
              fontWeight: 700,
            }}
          >
            Welcome to JDC Dental Clinic
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            gutterBottom
            sx={{
              textShadow: "5px 5px 8px #000",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Your smile, our passion. Quality dental care for the whole family.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<EventAvailableIcon />}
            sx={{ mt: 2, ml: "auto" }}
            onClick={() => navigate("/book-an-appointment")}
          >
            Book An Appointment
          </Button>
        </Box>

        {/* Services Section */}
        <Box
          component="section"
          sx={{
            background: "#fff",
            p: 4,
            pb: 8,
            mt: 4,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          <Typography variant="h5" mt={3} mb={5}>
            Our Services
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }} justifyContent="center">
            <Grid sx={{ width: 500 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Tooth Fillings</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Routine check-ups, cleanings, and fillings to keep your
                    teeth healthy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ width: 500 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Cosmetic Dentistry</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Teeth whitening, veneers, and smile makeovers for your
                    confidence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ width: 500 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Orthodontics</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Braces and aligners for children and adults to straighten
                    your smile.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ width: 500 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Tooth Fillings</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A tooth with a cavity can be identified by black/blown
                    lesions that may or may not
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ width: 500 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Teeth Cleaning (Oral Prophylaxis)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plaque which is composed of bacteria and other debris found
                    in the mouth
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid sx={{ width: 500 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Tooth Extraction</Typography>
                  <Typography variant="body2" color="text.secondary">
                    When a tooth can no longer be saved and needed to be removed
                    because of an infection
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/services")}
          >
            See More
          </Button>
        </Box>

        {/* Dentist Section */}
        <Box component="section">
          <Stack
            flexDirection={{ sx: "column", sm: "row", md: "row", lg: "row" }}
            justifyContent="center"
          >
            <Toolbar sx={{ m: 6 }} />
            <Box
              width="100vw"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255,255,255,0.15)",
                borderRadius: 4,
                py: { xs: 2, sm: 4, md: 4, lg: 4 },
                m: { xs: 0, sm: 4, md: 4, lg: 4 },
                p: { xs: 2, sm: 4, md: 4, lg: 4 },
                boxShadow: 3,
                gap: { xs: 2, sm: 3, md: 3, lg: 3 },
              }}
            >
              <Stack
                direction="column"
                spacing={{ xs: 2, sm: 3, md: 3, lg: 3 }}
              >
                <AvatarGroup>
                  {[
                    // Array for easy expansion
                    {
                      alt: "Dentist 1",
                      src: dentist1,
                    },
                    {
                      alt: "Dentist 2",
                      src: dentist2,
                    },
                    {
                      alt: "Dentist 3",
                      src: dentist3,
                    },
                    {
                      alt: "Dentist 4",
                      src: dentist4,
                    },
                  ].map((dentist, idx) => (
                    <Avatar
                      alt={dentist.alt}
                      src={dentist.src}
                      sx={{
                        width: { xs: 50, sm: 100, md: 100, lg: 100 },
                        height: { xs: 50, sm: 100, md: 100, lg: 100 },
                        border: "2px solid #eee",
                        boxShadow: 2,
                        bgcolor: "#fafafa",
                      }}
                    />
                  ))}
                </AvatarGroup>
                <AvatarGroup total={14}>
                  {[
                    // Array for easy expansion
                    {
                      alt: "Dentist 1",
                      src: dentist5,
                    },
                    {
                      alt: "Dentist 2",
                      src: dentist6,
                    },
                    {
                      alt: "Dentist 3",
                      src: dentist7,
                    },
                    {
                      alt: "Dentist 4",
                      src: dentist8,
                    },
                  ].map((dentist, idx) => (
                    <Avatar
                      alt={dentist.alt}
                      src={dentist.src}
                      sx={{
                        width: { xs: 50, sm: 100, md: 100, lg: 100 },
                        height: { xs: 50, sm: 100, md: 100, lg: 100 },
                        border: "2px solid #eee",
                        boxShadow: 2,
                        bgcolor: "#fafafa",
                      }}
                    />
                  ))}
                </AvatarGroup>
              </Stack>
            </Box>
            <Box
              width="100vw"
              sx={{
                mt: 15,
                mb: 15,
                mr: { xs: 0, sx: 22, md: 22, lg: 22 },
                textAlign: {
                  xs: "center",
                  sx: "right",
                  md: "right",
                  lg: "right",
                },
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
                Looking for a Dentist?
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                gutterBottom
                sx={{
                  textShadow: "5px 5px 8px #000",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Book a Free Consultation with your account
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2, ml: "auto" }}
                onClick={() => navigate("/book-an-appointment")}
              >
                Book Now!
              </Button>
            </Box>
          </Stack>
        </Box>

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

export default Home;
