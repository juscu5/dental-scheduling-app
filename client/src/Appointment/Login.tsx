import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid, Stack } from "@mui/material";
import { useAccountStore } from "../_shared/store/AccountStore";
import { useMutation } from "@tanstack/react-query";
import { loginUserApi } from "../Portal/Login/api";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../_shared/context/GlobalContext";
import Register from "./Register";

type LoginFormInputs = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const { account } = useAccountStore();
  const { useSnackBar } = useContext(GlobalContext);
  const { setAccount } = useAccountStore();
  const navigate = useNavigate();

  // use state
  const [isRegister, setRegister] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const { mutateAsync: loginMutation, status } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: (data) => {
      useSnackBar("Welcome!", { variant: "success" });
      setAccount(data?.payload?.BearerToken);
      navigate("/jdcdc-portal/appointment");
    },
    onError: (error: any) => {
      useSnackBar(error?.response?.data?.err.status, { variant: "error" });
      reset();
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    await loginMutation({ username: data.username, password: data.password });
  };

  return (
    <Stack
      flexDirection={{
        xs: "column",
        sm: "column",
        md: "column",
        lg: "row",
      }}
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
          textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "right",
          },
        }}
      >
        JDC Dental Clinic wants you to
        <br /> smile with love
      </Typography>

      {!account ? (
        !isRegister ? (
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
              label="Username"
              fullWidth
              margin="normal"
              {...register("username", {
                required: "username is required",
              })}
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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => setRegister((e) => !e)}>
                Register Account
              </Button>
            </Box>
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
        ) : (
          <Box>
            {" "}
            <Stack>
              <Register />
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}>
                <Button onClick={() => setRegister((e) => !e)}>
                  Cancel Register
                </Button>
              </Box>
            </Stack>
          </Box>
        )
      ) : (
        <Box
          sx={{
            maxWidth: "100%",
            bgcolor: "background.paper",
            mt: { xs: 0, sm: 0, md: 10, lg: 10 },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/jdcdc-portal/appointment")}
          >
            Book An Appointment Now
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default Login;
