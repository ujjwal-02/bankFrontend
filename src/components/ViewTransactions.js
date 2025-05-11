// import React, { useState, useEffect } from 'react';

// const ViewTransactions = () => {
//   const [accountNumberUser1, setAccountNumberUser1] = useState(null);
  
//   const [accountNumberUser2, setAccountNumberUser2] = useState('');
//   const [transactionAmount, setTransactionAmount] = useState('');
//   const [transactionType, setTransactionType] = useState('');
//   const [description, setDescription] = useState('');

//   const [list, setList] = useState([]);

//   const handleAccountNumberChange = (e) => {
//     setAccountNumberUser1(e.target.value);
//   };

//   const fetchTransactions = async () => {
//     // setLoading(true);
//     try {
//       let token = localStorage.getItem("jwttoken");
//       const response = await fetch(`http://localhost:9001/bankaccount/bankstatement/${localStorage.getItem("userId")}/${accountNumberUser1}`, {
//         headers: {"Authorization" : `Bearer ${token}`}
//       });
//       const data = await response.json();
//       if(response.status >=200 && response.status < 300){
        
//         setList(data);

//       }else {
//         // setTransactions([]);
//         alert('An error occurred while fetching transactions. Please try again later.');
//       }

    
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//       // setTransactions([]);
//       // setNoTransactions(true); // Set the flag in case of an error
//     } finally {
//       // setLoading(false);
//     }
//   };

//   // useEffect(() => {
//   //   if (accountNumber) {
//   //     fetchTransactions();
//   //   }
//   // }, [accountNumber]);

//   return (
//     <div>
//       <h2>View Transactions</h2>
//       <div>
//         <label>Enter Account Number:</label>
//         <input
//           type="text"
//           value={accountNumberUser1}
//           onChange={handleAccountNumberChange}
//         />
//       </div>
//       <button onClick={fetchTransactions}>Fetch Transactions</button>
//       {/* {loading && <p>Loading...</p>} */}
//       {accountNumberUser1 !== null && (
//         <div className="card">
//           <h3>Your Bank Account Transactions : </h3>
//           <p>Account Number: {accountNumberUser1}</p>
//           <p>Reciver Account Number: {accountNumberUser2}</p>
//           <p>Transaction Amount: {transactionAmount}</p>
//           <p>Transaction Type: {transactionType}</p>
//           <p>Description: {description}</p>
//           <p>transactions : {list}</p>

//         </div>
//       )}
//       {/* {noTransactions && !loading && (
//         <p>No transactions found for this account.</p>
//       )} */}
//     </div>
//   );
// };

// export default ViewTransactions;

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';

const ViewTransactions = () => {
  const [accountNumberUser1, setAccountNumberUser1] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  const handleAccountNumberChange = (e) => {
    setAccountNumberUser1(e.target.value);
  };

  const fetchTransactions = async () => {
    try {
      let token = localStorage.getItem("jwttoken");
      const response = await fetch(`http://localhost:9001/bankaccount/bankstatement/${localStorage.getItem("userId")}/${accountNumberUser1}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setList(data);
        setError(null);
      } else {
        setList([]);
        setError('An error occurred while fetching transactions. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setList([]);
      setError('An error occurred while fetching transactions. Please try again later.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" style={{textAlign:'center'}}>View Transactions</Typography>
      <div>
        <TextField
          label="Enter Account Number"
          type="text"
          value={accountNumberUser1}
          onChange={handleAccountNumberChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={fetchTransactions}
        fullWidth
      >
        Fetch Transactions
      </Button>
      {error && <p>{error}</p>}
      {list.length > 0 && (
        <div>
          <Typography variant="h4" style={{textAlign:'center'}}>Your Bank Account Transactions :</Typography>
          {list.map((transaction, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px', backgroundColor: 'blue', padding: '10px', alignItems: 'center' , width: '40%' }}>
            <Card sx={{ margin: 'auto', width: '400px', borderRadius: '5%', backgroundColor: 'lightblue' }}>
              <CardContent>
                <p>Account Number User 1: {transaction.accountNumberUser1}</p>
                <p>Receiver Account Number: {transaction.accountNumberUser2}</p>
                <p>Transaction Amount: {transaction.transactionAmount}</p>
                <p>Transaction Type: {transaction.transactionType}</p>
                <p>Description: {transaction.description}</p>
                <p>Date and Time: {transaction.createdAt}</p>
              </CardContent>
            </Card>
          </div>
          
          ))}
        </div>
      )}
    </Container>
  );
};

export default ViewTransactions;