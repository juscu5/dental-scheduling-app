import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Stack,
  MenuItem,
} from "@mui/material";
import { GlobalContext } from "../_shared/context/GlobalContext";
import { addUserQuery } from "./api";

type RegisterFormInputs = {
  firstname: string;
  lastname: string;
  address: string;
  username: string;
  password: string;
};

const Register: React.FC = () => {
  const { useSnackBar } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    console.log("data", data);
    try {
      const res = await addUserQuery(JSON.stringify(data));
      if (res.status === "Success") {
        useSnackBar(res.payload?.msg, { variant: "success" });
      } else {
        useSnackBar(res.payload?.msg, { variant: "error" });
      }
    } catch (e: any) {
      const errorMessage = e.response.data?.payload?.msg;
      const error = errorMessage ? errorMessage : e;
      useSnackBar(`Error: ${error}`, { variant: "error" });
    }
    reset();
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: 800,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h5" mb={2} align="center">
          Register New Account
        </Typography>
        <TextField
          label="First Name"
          fullWidth
          margin="normal"
          {...register("firstname", { required: "First name is required" })}
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
        />
        <TextField
          label="Last Name"
          fullWidth
          margin="normal"
          {...register("lastname", { required: "Last name is required" })}
          error={!!errors.lastname}
          helperText={errors.lastname?.message}
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          {...register("address", { required: "Address is required" })}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={errors.username?.message}
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
          sx={{ mt: 2 }}
          disabled={isSubmitting}
        >
          Register
        </Button>
      </Box>
    </Stack>
  );
};

export default Register;
