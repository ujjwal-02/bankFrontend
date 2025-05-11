import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';

const initialCreditCard = {
  cardNumber: '',
  creditCardPerks: '',
  creditScoreBill: 0,
  creditScore: 0,
  creditCardName: '',
  creditCardBank: '',
};

const CreditCard = () => {
  const [creditCard, setCreditCard] = useState(initialCreditCard);
  const [creditCards, setCreditCards] = useState([]);
  
  // useEffect(() => {
  //   // Fetch credit card details from the backend using Axios
  //   const token = localStorage.getItem("userId");
  //   axios.get(`http://localhost:9001/api/creditcards/getallcreditcard/${localStorage.getItem(
  //     'userId'
  //   )}`,
  //   {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => {
  //       setCreditCards(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching credit card details:', error);
  //     });
  // }, []);
  useEffect(() => {
    // Fetch credit card details from the backend using Axios
    const token = localStorage.getItem('jwttoken'); // Make sure you use the correct token key
    axios
      .get(`http://localhost:9001/api/creditcards/getallcreditcard/${localStorage.getItem('userId')}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setCreditCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching credit card details:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreditCard({
      ...creditCard,
      [name]: value,
    });
  };

  const handleAddCreditCard = () => {
    // Send a POST request to add a new credit card to the backend
    const token = localStorage.getItem("jwttoken");
    console.log(token);
    try {
      const response =  axios.post(
        `http://localhost:9001/api/creditcards/addcreditcard/${localStorage.getItem('userId')}`,
        creditCard, // Request body
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    
      if (response.status >= 200 && response.status < 300) {
        // If the request is successful, update the state and clear the form
        setCreditCards([...creditCards, creditCard]);
        setCreditCard(initialCreditCard);
      } else {
        // Handle errors when the response status code is not in the 2xx range
        console.error('Error adding credit card');
      }
    } catch (error) {
      // Handle network errors or exceptions here
      console.error('Error adding credit card:', error);
    }
    
    
    // const response = axios.post(`http://localhost:9001/api/creditcards/addcreditcard/${localStorage.getItem(
    //   'userId'
    // )}`,
    // CreditCard,
    // {
    //   headers: { Authorization: `Bearer ${token}` },
    // })
    // if(response.status >= 200 && response.status < 300){
    //   setCreditCards([...creditCards, creditCard]);
    //     // Clear the form
    //     setCreditCard(initialCreditCard);
    // }else{
    //   console.error('Error adding credit card');
    // }
      // .then(() => {
      //   // After successfully adding the card, update the list of credit cards
      //   setCreditCards([...creditCards, creditCard]);
      //   // Clear the form
      //   setCreditCard(initialCreditCard);
      // })
      // .catch((error) => {
      //   console.error('Error adding credit card:', error);
      // });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Credit Cards
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Credit Card Details</Typography>
              <TextField
                name="cardNumber"
                label="Card Number"
                fullWidth
                value={creditCard.cardNumber}
                onChange={handleInputChange}
              />
              <TextField
                name="creditCardPerks"
                label="Credit Card Perks"
                fullWidth
                value={creditCard.creditCardPerks}
                onChange={handleInputChange}
              />
              <TextField
                name="creditScoreBill"
                label="Credit Score Bill"
                fullWidth
                type="number"
                value={creditCard.creditScoreBill}
                onChange={handleInputChange}
              />
              <TextField
                name="creditScore"
                label="Credit Score"
                fullWidth
                type="number"
                value={creditCard.creditScore}
                onChange={handleInputChange}
              />
              <TextField
                name="creditCardName"
                label="Credit Card Name"
                fullWidth
                value={creditCard.creditCardName}
                onChange={handleInputChange}
              />
              <TextField
                name="creditCardBank"
                label="Credit Card Bank"
                fullWidth
                value={creditCard.creditCardBank}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddCreditCard}
                style={{ marginTop: '16px' }}
              >
                Add Credit Card
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Existing Credit Cards
          </Typography>
          <ul>
            {creditCards.map((card, index) => (
              <li key={index}>
                <strong>Card Number:</strong> {card.cardNumber}<br />
                <strong>Credit Card Perks:</strong> {card.creditCardPerks}<br />
                <strong>Credit Score Bill:</strong> {card.creditScoreBill}<br />
                <strong>Credit Score:</strong> {card.creditScore}<br />
                <strong>Credit Card Name:</strong> {card.creditCardName}<br />
                <strong>Credit Card Bank:</strong> {card.creditCardBank}<br />
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreditCard;
