import React from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Container,
  InputAdornment 
} from "@mui/material";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import illustration from "../../assets/Illustration.svg";

const LoginForm = () => {
    
  return (
    <Container sx={{ margin: "20px" }}>
      <Grid
        container
        component="main"
        sx={{
          height: "90vh",
          width: "96vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{
            height: "700px",
            backgroundImage: `url(${illustration})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          ml={4}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "90vh",
            }}
          >
            <Typography component="h1" variant="h5" fontWeight={600} textAlign="left">
              Sign In to Your Account!
            </Typography>
            <Typography component="h4" variant="h6" >
                Welcome back! please enter your detail
            </Typography>
            <Box sx={{ mt: 1 }}>
              <form >
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default LoginForm;
