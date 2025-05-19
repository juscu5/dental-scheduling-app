import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

// image import
import bgrnd from "../_shared/assets/services.jpg";
import toothFillings from "../_shared/assets/tooth-fillings.jpg";
import teethCleaning from "../_shared/assets/teeth-cleaning.jpg";
import diagnosticServices from "../_shared/assets/diagnostic.jpeg";
import childCleaning from "../_shared/assets/child-cleaning.jpg";
import toothImplant from "../_shared/assets/tooth-implants.jpeg";
import toothCapping from "../_shared/assets/tooth-capping.jpeg";
import tmjTherapy from "../_shared/assets/tmj-therapy.jpeg";
import rootCanal from "../_shared/assets/root-canal.jpg";
import gumDesease from "../_shared/assets/gum-disease.jpeg";
import bleachingDestistry from "../_shared/assets/bleaching-dentistry.jpeg";

import { CustomFooter } from "../_shared/components/CustomFooter";
import { useNavigate } from "react-router-dom";

export const Services = () => {
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
            Services
          </Typography>
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
          <Typography variant="h5" mt={3} mb={5} />
          <Stack
            direction="row"
            gap={2}
            pl={{ xs: 0, sm: 0, md: 15, lg: 15 }}
            pr={{ xs: 0, sm: 0, md: 15, lg: 15 }}
            justifyContent="flex-start"
            flex={1}
            flexWrap="wrap"
          >
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Tooth Fillings
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    A tooth with a cavity can be identified by black/blown
                    lesions that may or may not lead to tooth sensitivity. Tooth
                    decay is addressed by removing the portion of the tooth with
                    a lesion and filling it with a restorative material. The
                    type of restoration material used depends on the size,
                    location, and other factors that are taken into
                    consideration by the dentist.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={toothFillings}
                      alt="tooth-fillings"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Tooth Extraction
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    When a tooth can no longer be saved and needed to be removed
                    because of an infection, trauma, or other indications, an
                    extraction of the said tooth may be in order. This procedure
                    is done under local anesthesia. An x-ray is taken prior to
                    removing the tooth to determine if there are factors which
                    may complicate the procedure. Some cases of extraction
                    however may be too difficult to remove in the conventional
                    matter, therefore surgical removal of the tooth may be
                    necessary.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={teethCleaning}
                      alt="teeth-cleaning"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    X-ray and other Diagnostic Services
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    JDC Dental Clinic offers services such as digital Periapical
                    and Panoramic X-rays to facilitate proper diagnosis and
                    treatment planning. Our facility is also equipped to
                    fabricate diagnostic materials such as X-rays, dental models
                    and photos essential for orthodontic treatment planning.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={diagnosticServices}
                      alt="diagnostic-services"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Children's Dentistry Services
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    Your child’s first visit to the dentist need not be a
                    daunting experience. The members of our Pediatric Dentistry
                    Team have undergone certification and extensive training on
                    how to manage pediatric patients properly, therefore we
                    believe we can provide your child with a less stressful and
                    more enjoyable dental experience.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={childCleaning}
                      alt="child-cleaning"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Tooth Implants
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    In instances when a tooth cannot be saved and dental
                    prosthesis is not ideal, a dental implant may be required.
                    Dental implants involve the use of a tooth substitute –
                    often times made of titanium – to replace the missing tooth
                    and is placed within the bone. Over time, the dental implant
                    will fuse with the bone via osseous integration and act just
                    like a normal tooth. Dental implants not only address
                    esthetic concerns but it can restore a tooth’s functionality
                    as well.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={toothImplant}
                      alt="tooth-implant"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Dentures and Tooth Capping
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    When tooth loss is inevitable, dentures can be used as a way
                    to restore one's smile and confidence. Prosthodontic
                    rehabilitation can be achieved with either fixed or
                    removable dentures. Removable dentures are indicated for
                    those with few remaining teeth. This type of denture is
                    ideal for those who prefer a more conservative restoration
                    that is more easily cleaned. Fixed prosthesis on the other
                    hand come in the form of crowns, onlays and inlays. These
                    are cemented in place and require some form of tooth
                    preparation. For patients whose teeth are all missing,
                    complete dentures are recommended.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={toothCapping}
                      alt="tooth-capping"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Orthodontic Braces and TMJ Therapy
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    Patients who may have issues with teeth alignment or
                    occlusion may need interventional treatment through the use
                    of braces, retainers or other orthodontic appliances. In
                    order to determine what treatment approach is necessary, our
                    orthodontic specialists can prepare and analyze diagnostic
                    materials such as casts, x-rays and photos.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={tmjTherapy}
                      alt="tmj-therapy"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Root Canal Therapy
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    Root canal therapy treats an infected tooth through the
                    elimination of infection via manual debridement and chemical
                    treatment. Decontaminating the tooth and filling it from the
                    inside removes harmful bacteria and prevents reinfection.
                    This type of treatment is often a better alternative to
                    having the infected tooth extracted.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={rootCanal}
                      alt="root-canal-therapy"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Gum Diseases / Bleeding Gums Management
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    Inflamed gums with gingivitis may develop a more serious
                    condition known as Periodontal disease. When Periodontal
                    disease occurs, the bone supporting the tooth may be
                    affected and thereby lead to the loosening of the tooth or
                    in some case tooth loss. To treat periodontal disease,
                    procedures such as deep cleaning and other periodontal
                    services may be necessary. The type of treatment plan needed
                    to properly manage the patient's condition will depend upon
                    clinical findings and your dentist’s recommendations.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={gumDesease}
                      alt="gum-disease"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
            <Card sx={{ p: 3, width: { xs: 350, sm: 350, md: 800, lg: 800 } }}>
              <Stack
                gap={5}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                justifyContent="flex-start"
              >
                <Box
                  width={{ xs: "100%", sm: 300, md: 350 }}
                  minWidth={300}
                  maxWidth={500}
                  textAlign="left"
                >
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    Cosmetic, Smile Management, and Teeth Whitening / Bleaching
                    Dentistry
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    A patient’s esthetic concerns can be addressed by modifying
                    a tooth’s color, shape, size and alignment. Some of these
                    changes can be attained by procedures such as in-office
                    whitening, veneers and crowns. Esthetic dentistry aims to
                    improve quality of life by improving one’s self-image
                    because a confident smile is a beautiful smile.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/book-an-appointment")}
                  >
                    Get Services
                  </Button>
                </Box>
                <Box justifyContent="flex-start">
                  <Box
                    width={"100vw"}
                    textAlign="left"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                  >
                    <img
                      src={bleachingDestistry}
                      alt="bleaching-dentistry"
                      style={{
                        width: 350,
                        height: 250,
                        marginBottom: 16,
                        marginLeft: "auto",
                        filter: "drop-shadow(5px 5px 8px #000)",
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Card>
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

export default Services;
