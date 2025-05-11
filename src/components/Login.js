import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import './Login.css';
import { textAlign } from "@mui/system";

function Login() {
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

  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Regular expressions for validation
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    const passwordMinLength = 6;

    if (!alphanumericRegex.test(userName) || /^\d/.test(userName)) {
      setError("Username should be alphanumeric and not start with a number or special character.");
    } else if (password.length < passwordMinLength) {
      setError(`Password must be at least ${passwordMinLength} characters long.`);
    } else {
      setError(""); // Clear any previous error messages

      const requestBody = {
        userName: userName,
        password: password,
      };

      try {
        // Attempt the registration and login in a single request
        const registerResponse = await fetch("http://localhost:9001/userauth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
      
        if (registerResponse.status === 200) {
          const loginResponse = await fetch("http://localhost:9001/userauth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          });
          if (loginResponse.status === 200) {
            const result = await loginResponse.json();
            localStorage.setItem("jwttoken", result["jwttoken"]);
            localStorage.setItem("username", userName);
            navigate("/first");
          } else {
            setError("Wrong Username or Password!");
          }
        } else {
          try {
            const response = await fetch("http://localhost:9001/userauth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
            });
      
            if (response.status === 200) {
              
              const result = await response.json();
              console.log(result);
              localStorage.setItem("jwttoken", result["jwttoken"]);
              localStorage.setItem("username", userName);
              // localStorage.setItem("userId", 1);
              
              axios
      .get(`http://localhost:9001/user/getuserid/${userName}/${password}`)
      .then((res) => {
        const data = res.data;
        if (data.userId != null && data.userId !== undefined) {
          
          localStorage.setItem("userId", data.userId);
          alert("Login successful. UserId: " + data.userId);
        } else {
          alert("User not found or login failed.");
        }
      })
              // alert(localStorage.getItem("userId"));
              navigate("/first");
            } else {
              setError("Wrong Username or Password!");
            }
          } catch (error) {
            console.error("Error during login:", error);
            setError("Wrong username or password!!");
          }
        }
      } catch (error) {
        setError("An error occurred");
      }
      // try {
      //   // Your login logic here...
      //   // ... (rest of the code remains the same)
      // } catch (error) {
      //   console.error("Error during login:", error);
      //   setError("An error occurred during login.");
      // }
    }
  };

  return (
    <div style={backgroundImageStyle}>

<Container sx={{ marginTop: 5 }}>
      <Card sx={{ marginLeft: 'auto', width: '500px', borderRadius: '10%', backgroundColor: 'lightblue', height: '500px', marginTop:'100px' }}>
        <CardContent>
          <Typography variant="h5" component="div" style={{textAlign : "center"}}>
            Login
          </Typography>
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            size="small"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
    </div>
    
  );
}

export default Login;
