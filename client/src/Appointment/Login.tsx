import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid, Stack } from "@mui/material";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <Stack
      flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
      gap={5}
      justifyContent={"right"}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          p: 5,
          color: "#123",
          fontWeight: 700,
          textAlign: { xs: "center", sm: "center", md: "center", lg: "right" },
        }}
      >
        JDC Dental Clinic wants you to
        <br /> smile with love
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: 400 },
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" mb={2} align="center">
          Book an Appointment using JDCDC Portal
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={isSubmitting}
        >
          Login
        </Button>
      </Box>
    </Stack>
  );
};

export default Login;
