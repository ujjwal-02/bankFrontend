
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Registration = () => {

  const backgroundImageUrl = 'https://i.pinimg.com/474x/2c/5d/28/2c5d280f76542f0fb022831905244f55.jpg';

  // Define the inline style object for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
    backgroundPosition: 'center left',
    // Add any other background-related CSS properties here
  };

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [useremail, setEmail] = useState("");
  const [phoneNumber1, setPhoneNumber] = useState("");
  const [password1, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleRegister = async () => {
    // Regular expressions for validation
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    const passwordMinLength = 6;
    const phoneNumberRegex = /^[789]\d{9}$/; // Phone number starts with 7, 8, or 9 and has a total of 10 digits
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/; // Valid email addresses: gmail.com or yahoo.com
  
    // Validate user input
    if (!alphanumericRegex.test(name) || /^\d/.test(name)) {
      alert(
        "Name should be alphanumeric and not start with a number or special character."
      );
    } else if (!emailRegex.test(useremail)) {
      alert("Please enter a valid Gmail or Yahoo email address.");
    } else if (password1.length < passwordMinLength) {
      alert(`Password must be at least ${passwordMinLength} characters long.`);
    } else if (!phoneNumberRegex.test(phoneNumber1)) {
      alert(
        "Phone number must start with 7, 8, or 9 and have a total of 10 digits."
      );
    } else if (password1 !== cpassword) {
      alert("Password and Confirm Password do not match.");
    } else {
      // Proceed with registration
      let customerData = {
        userName: name,
        password: password1,
        email: useremail,
        phoneNumber: phoneNumber1,
      };
  
      axios
        .post("http://localhost:9001/user/register", customerData)
        .then((res) => {
          console.log(res.data["userId"]);
          if (res.data["userId"] != null && res.data["userId"] !== undefined) {
            localStorage.setItem("userId", res.data["userId"]);
          }
          alert("Registration successful.");
        })
        .catch((error) => {
          console.error("Registration failed:", error.response.data);
          alert("Registration failed. Please check your input.");
        });
    }
  };
  

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div style={backgroundImageStyle}>

    <Container sx={{ marginTop: 5}}>
      <Card sx={{ marginLeft: 'auto', width: '500px', borderRadius: '10%', backgroundColor: 'lightblue', height: '500px', marginTop:'100px' }}>
        <CardContent>
          <Typography variant="h5" component="div" style={{textAlign:"center"}}>
            Registration
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
            value={useremail}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            size="small"
            value={phoneNumber1}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
            type="password"
            value={password1}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            size="small"
            type="password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Grid container justifyContent="space-between">
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
              sx={{ marginRight: 1 }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogin}
              sx={{ marginLeft: 1 }}
            >
              Login
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Container>
    </div>
  );
};

export default Registration;
