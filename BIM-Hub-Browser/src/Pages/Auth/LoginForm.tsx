import { Grid, Box, Button, Typography, Container } from "@mui/material";
import illustration from "../../assets/Illustration.svg";
import axios from "axios";
const LoginForm = () => {
  const handleAuthentication = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/auth/login");
      const redirectUrl = response.data;

      // Redirect the user to the obtained URL
      window.location.href = redirectUrl;

      return response;
    } catch (error) {
      // Handle login error
      console.log(error);
    }
  };

  return (
    <Container sx={{ margin: "20px" }}>
      <Grid
        container
        component="main"
        sx={{
          height: "90vh",
          width: "90vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
        <Grid item xs={12} sm={4} md={4} ml={4}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "90vh",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              fontWeight={600}
              textAlign="left"
              width="100%"
            >
              Welcome to BIM Browser!!
            </Typography>
            <Typography
              component="h4"
              variant="h6"
              textAlign="left"
              width="100%"
              mt={3}
            >
              You are only step away from getting the access to BIM Hubs
              Dashboard and Viewer
            </Typography>
            <Box sx={{ mt: 1, width: "100%" }}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuthentication}
              >
                Sign In
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default LoginForm;
