import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Toolbar,
  TextField,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

// image import
import bgrnd from "../_shared/assets/dental-office.jpg";

import { CustomFooter } from "../_shared/components/CustomFooter";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface ContactUsFormType {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsFormType>();

  const handleSubmitForm = (data: ContactUsFormType) => {
    console.log("this is the data", data);
    reset()
  };

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
            Contact Us
          </Typography>
        </Box>

        {/* Contact Us Section */}

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
          <Stack
            flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            gap={5}
          >
            {/* Contact Form */}
            <Box
              width={"100%"}
              sx={{ border: "1px solid lightGray", borderRadius: 5, p: 5 }}
            >
              <form
                onSubmit={handleSubmit((data) => {
                  return handleSubmitForm(data);
                })}
                style={{ maxWidth: 500, margin: "0 auto" }}
              >
                <Stack spacing={3}>
                  <Typography variant="h5" fontWeight={600}  gutterBottom>
                    SEND US A MESSAGE
                  </Typography>
                  <TextField
                    label="Name"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={
                      typeof errors.name?.message === "string"
                        ? errors.name?.message
                        : undefined
                    }
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    error={!!errors.email}
                    helperText={
                      typeof errors.email?.message === "string"
                        ? errors.email?.message
                        : undefined
                    }
                    fullWidth
                  />
                  <TextField
                    label="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    error={!!errors.subject}
                    helperText={
                      typeof errors.subject?.message === "string"
                        ? errors.subject?.message
                        : undefined
                    }
                    fullWidth
                  />
                  <TextField
                    label="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    error={!!errors.message}
                    helperText={
                      typeof errors.message?.message === "string"
                        ? errors.message?.message
                        : undefined
                    }
                    multiline
                    rows={4}
                    fullWidth
                  />
                  <Box>
                    <Button type="submit" variant="contained">
                      Send
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Box>
            
            {/* Contact Details */}
            <Box width={"100%"} textAlign={"left"}>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                CONTACT
              </Typography>
              <Stack
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                gap={2}
              >
                <Box width={"100%"}>
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    JDC Dental Clinic Monumento
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    Address: 4th Level Victory Mall City, Caloocan City <br />
                    Mobile. Nos.: +639123121362 <br />
                    Landline: (123) 456-7890
                  </Typography>
                </Box>
                <Box
                  width={{ xs: "100%", md: 350 }}
                  height={200}
                  sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 2 }}
                >
                  <iframe
                    title="JDC Dental Clinic Balintawak Map"
                    src="https://www.google.com/maps?q=4th+Level+Victory+Mall+City+Caloocan+City&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Stack>

              <Stack
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                gap={2}
              >
                <Box width={"100%"} mt={5}>
                  <Typography variant="h6" color="primary" textAlign={"left"}>
                    JDC Dental Clinic Balintawak
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {" "}
                    Address: 2nd Level Cloverleaf Balintawak, Quezon City <br />
                    Mobile. Nos.: +639333125271 <br />
                    Landline: (123) 654-0987
                  </Typography>
                </Box>
                <Box
                  width={{ xs: "100%", md: 350 }}
                  height={200}
                  mt={5}
                  sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 2 }}
                >
                  <iframe
                    title="JDC Dental Clinic Balintawak Map"
                    src="https://www.google.com/maps?q=2nd+Level+Cloverleaf+Balintawak,+Quezon+City&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Stack>
            </Box>
            <Toolbar
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            />
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

export default ContactUs;
