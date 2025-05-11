
import React, { useState } from 'react';
import './MoneyTransfer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';

const MoneyTransfer = () => {

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

  const [senderData, setSenderData] = useState({
    accountNumberUser1: '',
    transactionAmount: '',
    transactionType: 'Debit',
    description: '',
  });

  const [accountNumberUser2, setReceiverAccountNumber] = useState('');
  const navigate = useNavigate();

  const handleSenderInputChange = (e) => {
    const { name, value } = e.target;
    setSenderData({
      ...senderData,
      [name]: value,
    });
  };

  const handleReceiverInputChange = (e) => {
    setReceiverAccountNumber(e.target.value);
  };

  let token = localStorage.getItem('jwttoken');

  const transactionData = {
    ...senderData,
    accountNumberUser2: accountNumberUser2,
  };

  const handleTransfer = async () => {
    try {
      if(senderData.transactionAmount <= 0){
        alert('transaction amount should not be less than 0');
      }else{
        const response = await axios.post(
          `http://localhost:9001/bankaccount/transfermoney/${localStorage.getItem(
            'userId'
          )}`,
          transactionData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        if (response.status >= 200 && response.status < 300) {
          alert('Money transfer confirmed!');
        } else {
          alert(`Money transfer failed. Status: ${response}`);
        }
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert("check account number"); 
    }
  };

  const handleReturnToHomepage = () => {
    navigate('/first');
  };

  return (

    <div style={backgroundImageStyle}>

<Container className="money-transfer-container" maxWidth="sm" sx={{ marginTop: 10 , marginLeft:'50%', backgroundColor:'blue', height : '700px'}}>
      <Card sx={{ marginTop: '20px' , backgroundColor:'lightblue'}}>
        <CardContent>
          <Typography variant="h5" component="div" style={{textAlign:"center", fontSize:"50px"}}>
            Money Transfer
          </Typography>
          <div className="sender-container">
            <Typography variant="h6">Sender Information</Typography>
            <TextField
              label="Account Number"
              name="accountNumberUser1"
              value={senderData.accountNumberUser1}
              onChange={handleSenderInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Transaction Amount"
              name="transactionAmount"
              value={senderData.transactionAmount}
              onChange={handleSenderInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Transaction Type"
              name="transactionType"
              value={senderData.transactionType}
              fullWidth
              margin="normal"
              variant="outlined"
              disabled
            />
            <TextField
              label="Description"
              name="description"
              value={senderData.description}
              onChange={handleSenderInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="receiver-container">
            <Typography variant="h6">Receiver Information</Typography>
            <TextField
              label="Receiver Account Number"
              value={accountNumberUser2}
              onChange={handleReceiverInputChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              onClick={handleTransfer}
              fullWidth
            >
              Confirm and Transfer Money
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleReturnToHomepage}
              fullWidth
            >
              Return to Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
    </div>

    
  );
};

export default MoneyTransfer;
