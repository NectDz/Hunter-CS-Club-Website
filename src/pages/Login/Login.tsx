import { useAuth } from "../../Context/AuthContext"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Login = () => {
  let navigate = useNavigate();
  const { signInWithGoogle } = useAuth(); // Use the signInWithGoogle from the context

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Sign In With Google to Continue
      </Typography>
      <Button
        variant="contained"
        onClick={handleSignInWithGoogle} // Use the new handler
        sx={{
          backgroundColor: "#4285F4",
          "&:hover": { backgroundColor: "#357ae8" },
        }}
      >
        Sign In With Google
      </Button>
    </Box>
  );
};

export default Login;
