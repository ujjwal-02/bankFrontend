

import React, { useState } from 'react';
// import './CheckBalance.css';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { height } from '@mui/system';

const CheckBalance = () => {

  const backgroundImageUrl = 'https://i.pinimg.com/474x/2c/5d/28/2c5d280f76542f0fb022831905244f55.jpg';

  // Define the inline style object for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
    backgroundPosition: 'top left',
    // Add any other background-related CSS properties here
  };

  const [accountNumber, setAccountNumber] = useState('');
  const [bankBalance, setBalance] = useState(null);
  const [bankName, setBankName] = useState(null);
  const [branchName, setBranchName] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [ifscCode, setIfscCode] = useState(null);
  const [totalBalance, setTotalBalance] = useState();

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/first');
  };
  const handleTotalBalance = () => {
    setTotalBalance(localStorage.getItem("totalamount"));
  };

  const handleCheckBalance = async () => {
    try {
      let token = localStorage.getItem('jwttoken');
      const response = await fetch(
        `http://localhost:9001/bankaccount/checkbalance/${localStorage.getItem(
          'userId'
        )}/${accountNumber}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();

      if (response.status >= 200 && response.status < 300) {
        setBalance(data.bankBalance);
        setBankName(data.bankName);
        setBranchName(data.branchName);
        setAccountType(data.accountType);
        setIfscCode(data.ifscCode);
      } else {
        setBalance(null);
        alert(
          'Wrong Account Number'
        );
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
      alert(
        'Wrong Account Number'
      );
    }
  };

  return (

    <div style={backgroundImageStyle}>
      <div >
      <Container className="container" maxWidth="sm" sx={{ marginTop: 10 , marginLeft:'50%', backgroundColor:'lightblue', height:'700px'}}>
      <Typography variant="h4" style={{textAlign:"center", textSizeAdjust:"auto", fontSize : '50px'}}>Check Balance</Typography>
      <div>
        <TextField
          label="Enter Account Number"
          type="text"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckBalance}
        fullWidth
      >
        Check Balance
      </Button>
      {bankBalance !== null && (
        <Card className="card">
          <CardContent>
            <Typography variant="h6">Your Account Balance</Typography>
            <Typography>Account Number: {accountNumber}</Typography>
            <Typography style={{fontWeight : "bold"}}>Balance: ${bankBalance}</Typography>
            <Typography>BankName: {bankName}</Typography>
            <Typography>BranchName: {branchName}</Typography>
            <Typography>AccountType: {accountType}</Typography>
            <Typography>IfscCode: {ifscCode}</Typography>
          </CardContent>
        </Card>
      )}
      <Button variant="contained" color="primary" onClick={handleTotalBalance} fullWidth>
        Total balance
      </Button>
      {totalBalance !== null && (
        <Card className="card">
          <CardContent>
            <Typography variant="h6">Total Account Balance</Typography>
            
            <Typography style={{fontWeight : "bold"}}> Balance: ${totalBalance}</Typography>
            
          </CardContent>
        </Card>
      )}
      <Button variant="contained" color="secondary" onClick={handleHome} fullWidth>
        Return Home
      </Button>
    </Container>

    </div>

    </div>

    
    
  );
};

export default CheckBalance;
