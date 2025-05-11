import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for loading indicator
import { margin } from '@mui/system';

const AddBankAccount = () => {

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


  const [formData, setFormData] = useState({
    bankName: '',
    branchName: '',
    accountNumber: '',
    accountType: '',
    ifscCode: '',
    bankBalance: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [successMessage, setSuccessMessage] = useState(''); // Add success message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation error message when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  let token=localStorage.getItem("jwttoken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator

    // Add your validation logic here
    const validationErrors = {}; 

    if (!formData.bankName) {
      validationErrors.bankName = 'Bank Name is required';
    }

    if (!formData.branchName) {
      validationErrors.branchName = 'Branch Name is required';
    }

    if (!formData.accountNumber) {
      validationErrors.accountNumber = 'Account Number is required';
    }

    if (!formData.accountType) {
      validationErrors.accountType = 'Account Type is required';
    }

    if (!formData.ifscCode) {
      validationErrors.ifscCode = 'IFSC Code is required';
    }

    if (!formData.bankBalance) {
      validationErrors.bankBalance = 'Bank Balance is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false); // Hide loading indicator
    } else {
      try {
        // Simulate an API request (replace with your actual API call)
        setTimeout(async () => {
          // Send the form data to your backend API
          const response = await axios.post(
            `http://localhost:9001/bankaccount/addbankaccount/${localStorage.getItem('userId')}`,
            formData,
            {
              headers: {"Authorization" : `Bearer ${token}`}
            }
          );
          if (response.status === 200) {
            // Handle success
            setSuccessMessage('Bank account added successfully');
          } else {
            // Handle other response statuses (error cases)
            console.error('Failed to add bank account');
          }
        }, 1000); // Simulating a 1-second delay (remove this in your actual code)

        // Clear the form fields and errors after submission
        setFormData({
          bankName: '',
          branchName: '',
          accountNumber: '',
          accountType: '',
          ifscCode: '',
          bankBalance: '',
        });
        setErrors({});
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false); // Hide loading indicator
      }
    }
  };

// start

const [bankAccounts, setBankAccounts] = useState([]);
  const [isLoadingBankAccounts, setIsLoadingBankAccounts] = useState(true);

  // Function to fetch bank account data
  const fetchBankAccounts = async () => {
    try {
      const token = localStorage.getItem("jwttoken");

      const response = await axios.get(
        `http://localhost:9001/bankaccount/getbankaccountlistbasedonuserid/${localStorage.getItem('userId')}`,
        {
          headers: { "Authorization": `Bearer ${token}` },
        }
      );
      console.log(bankAccounts);
      if (response.status >=200 && response.status < 300) {
        setBankAccounts(response.data);
        setIsLoadingBankAccounts(false);
        let counttotal = 0;
bankAccounts.map((bankAccount) => {
  counttotal += bankAccount.bankBalance;
  localStorage.setItem("totalamount", counttotal);
});

      } else {
        console.error('Failed to fetch bank accounts');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  // Fetch bank accounts when the component mounts
  useEffect(() => {
    fetchBankAccounts();
  }, );

// end
  return (

    <div style={backgroundImageStyle}>

<div>
      <Container>
      <Typography variant="h6" gutterBottom style={{ fontSize:"50px" , marginLeft:'600px'}}>
        Add Bank Account
        </Typography>
        <Card sx={{ marginLeft: '50%', width: '500px', borderRadius: '5%', backgroundColor: 'lightblue', height: '500px', marginTop:'100px' }}>
        <CardContent>
        <form onSubmit={handleSubmit}>
        <TextField
          name="bankName"
          label="Bank Name"
          variant="outlined"
          fullWidth
          value={formData.bankName}
          onChange={handleChange}
          error={Boolean(errors.bankName)}
          helperText={errors.bankName}
        />
        <TextField
          name="branchName"
          label="Branch Name"
          variant="outlined"
          fullWidth
          value={formData.branchName}
          onChange={handleChange}
          error={Boolean(errors.branchName)}
          helperText={errors.branchName}
        />
        <TextField
          name="accountNumber"
          label="Account Number"
          variant="outlined"
          fullWidth
          value={formData.accountNumber}
          onChange={handleChange}
          error={Boolean(errors.accountNumber)}
          helperText={errors.accountNumber}
        />
        <TextField
          name="accountType"
          label="Account Type"
          variant="outlined"
          fullWidth
          value={formData.accountType}
          onChange={handleChange}
          error={Boolean(errors.accountType)}
          helperText={errors.accountType}
        />
        <TextField
          name="ifscCode"
          label="IFSC Code"
          variant="outlined"
          fullWidth
          value={formData.ifscCode}
          onChange={handleChange}
          error={Boolean(errors.ifscCode)}
          helperText={errors.ifscCode}
        />
        <TextField
          name="bankBalance"
          label="Bank Balance"
          variant="outlined"
          fullWidth
          value={formData.bankBalance}
          onChange={handleChange}
          error={Boolean(errors.bankBalance)}
          helperText={errors.bankBalance}
        />
        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
          {isLoading ? (
            <CircularProgress size={24} color="inherit" /> // Show loading indicator
          ) : (
            'Add Bank Account'
          )}
        </Button>
      </form>
        </CardContent>
      </Card>



      
      
      {successMessage && (
        <Typography variant="body1" color="primary" sx={{ marginTop: '16px' }}>
          {successMessage}
        </Typography>
      )}
    </Container>
    <br></br>

    <div>
    <Container>
        <Typography variant="h6" gutterBottom style={{ fontSize:"30px" , marginLeft:'400px'}} >
          Your Bank Accounts
        </Typography>
        {isLoadingBankAccounts ? (
          <CircularProgress />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          {bankAccounts.map((bankAccount) => (
            <Card
              key={bankAccount.accountNumber}
              variant="outlined"
              style={{ width: '300px', marginBottom: '16px', textAlign: 'center', margin:'auto', backgroundColor:'lightblue' }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  Bank Name: {bankAccount.bankName}
                </Typography>
                <Typography variant="h6" component="div">
                  Branch Name: {bankAccount.branchName}
                </Typography>
                <Typography variant="h6" component="div">
                  Account Number: {bankAccount.accountNumber}
                </Typography>
                <Typography variant="h6" component="div">
                  Account Type: {bankAccount.accountType}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        
        )}
      </Container>
    </div>
    </div>

    </div>

    
    
  );
};

export default AddBankAccount;
