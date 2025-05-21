import { useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";

import { useAccountStore } from "../../_shared/store/AccountStore";
import Form from "../../_shared/components/Form";
import { GlobalContext } from "../../_shared/context/GlobalContext";
import { loginUserApi, isLoggedIn } from "./api";
import { LoginCreds } from "./types";
import { getLoginFields } from "./fields";

export default function LoginPortal() {
  const { useSnackBar } = useContext(GlobalContext);
  const { setAccount } = useAccountStore();
  const navigate = useNavigate();

  const form = useForm<LoginCreds>({
    defaultValues: { username: "", password: "" },
  });
  const { reset } = form;

  const { mutateAsync: loginMutation, status } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: (data) => {
      useSnackBar("Welcome!", { variant: "success" });
      setAccount(data?.payload?.BearerToken);
      navigate("appointment");
    },
    onError: (error: any) => {
      useSnackBar(error?.response?.data?.err.status, { variant: "error" });
      reset();
    },
  });

  const onSubmit = async (data: LoginCreds) => {
    await loginMutation({ username: data.username, password: data.password });
  };

  return (
    <Box
      borderRadius={5}
      boxShadow={5}
      p={5}
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h3">
        JDCDC Portal
      </Typography>
      <Toolbar />
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Grid container justifyContent="center" m={3}>
        <Grid sx={{ xs: 12, sm: 8, md: 6 }} justifySelf={"center"}>
          <Form
            form={form}
            onSubmit={onSubmit}
            isLoading={status === "pending"}
            formElements={getLoginFields(status === "pending")}
            submitButtonText={
              status === "pending" ? "Signing in..." : "Sign In"
            }
          />
          <Button
            size="small"
            type="submit"
            variant="contained"
            fullWidth
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 5 }}
      >
        {"Copyright © "}
        <Link color="inherit" to={"/"}>
          JDC Dental Clinic
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
