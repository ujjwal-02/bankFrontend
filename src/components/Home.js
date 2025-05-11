// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
// import IconButton from '@mui/material/IconButton';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import './Home.css'; // Import your custom CSS

// export default function Home() {
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const navigate = useNavigate();

//   const cards = [
//     {
//       title: 'Money Transfer',
//       text: 'Transfer money securely.',
//       bgColor: 'bg-primary',
//     },
//     {
//       title: 'Check Balance',
//       text: 'View your account balance.',
//       bgColor: 'bg-success',
//     },
//     {
//       title: 'Add Credit Card',
//       text: 'Add a new credit card for payments.',
//       bgColor: 'bg-info',
//     },
//     {
//       title: 'View Transactions',
//       text: 'Review your transaction history.',
//       bgColor: 'bg-warning',
//     },
//   ];

//   const showNextCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const showPreviousCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(showNextCard, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleRegister = () => {
//     navigate('/register');
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="home-container" style={{ backgroundColor: 'white' }}>
//       <CssBaseline />
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h4" className="header">
//             <span className="flashpay-text"> Welcome to FlashPay</span>
//           </Typography>
//           <div className="ml-auto">
//             <Button variant="contained" color="primary" onClick={handleRegister}>
//               Register
//             </Button>
//             <Button variant="contained" color="success" onClick={handleLogin}>
//               Login
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Grid container justifyContent="center" className="mt-5">
//           <img
//             src="https://biznext.in/images/services/Money-Transfer-1.png"
//             alt="Money Transfer"
//             width="300"
//           />
//         </Grid>
//         <Card className={`mt-3 ${cards[currentCardIndex].bgColor}`}>
//           <CardContent>
//             <Typography variant="h5" component="div">
//               {cards[currentCardIndex].title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               {cards[currentCardIndex].text}
//             </Typography>
//           </CardContent>
//         </Card>
//         <div className="arrow-buttons-container">
//           <Button className="arrow-button" onClick={showPreviousCard}>
//             <ArrowBackIcon /> Previous
//           </Button>
//           <Button className="arrow-button" onClick={showNextCard}>
//             Next <ArrowForwardIcon />
//           </Button>
//         </div>
//         <footer className="footer">
//           <Container>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="h6" gutterBottom>
//                   Contact Us
//                 </Typography>
//                 <p>Email: flashypay@gmail.com</p>
//                 <p>Phone: 786-420-9211</p>
//                 <p>Address: Balewadi High street</p>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="h6" gutterBottom>
//                   Quick Links
//                 </Typography>
//                 <ul>
//                   <li>
//                     <Link href="#">Home</Link>
//                   </li>
//                   <li>
//                     <Link href="#">About Us</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Services</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Contact</Link>
//                   </li>
//                 </ul>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="h6" gutterBottom>
//                   Follow Us
//                 </Typography>
//                 <ul>
//                   <li>
//                     <Link href="#">
//                       <FacebookIcon /> Facebook
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#">
//                       <TwitterIcon /> Twitter
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#">
//                       <InstagramIcon /> Instagram
//                     </Link>
//                   </li>
//                 </ul>
//               </Grid>
//             </Grid>
//           </Container>
//           <div className="bottom-footer">
//             <p>&copy; 2023 FlashPay. All rights reserved.</p>
//           </div>
//         </footer>
//       </Container>
//     </div>
//   );
// }
/* Home.js */
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Import your custom CSS

// export default function Home() {
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     navigate('/register');
//   };

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   // Define an array of cards with their content
//   const cards = [
//     {
//       title: 'Money Transfer',
//       text: 'Transfer money securely.',
//       bgColor: 'bg-primary',
//     },
//     {
//       title: 'Check Balance',
//       text: 'View your account balance.',
//       bgColor: 'bg-success',
//     },
//     {
//       title: 'Add Credit Card',
//       text: 'Add a new credit card for payments.',
//       bgColor: 'bg-info',
//     },
//     {
//       title: 'View Transactions',
//       text: 'Review your transaction history.',
//       bgColor: 'bg-warning',
//     },
//   ];

//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   // Function to switch to the next card
//   const showNextCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Function to switch to the previous card
//   const showPreviousCard = () => {
//     setCurrentCardIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   // Automatically switch to the next card every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(showNextCard, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       <nav className="navbar navbar-expand-lg navbar-light bg-success" >
//         <a className="navbar-brand header"  href="#">
//           Welcome to FlashPay
//         </a>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <button
//                 className="btn btn-primary btn-register"
//                 onClick={handleRegister}
//               >
//                 Register
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="btn btn-success btn-login"
//                 onClick={handleLogin}
//               >
//                 Login
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div className="mt-5 text-center">
//         <img
//           src="https://biznext.in/images/services/Money-Transfer-1.png"
//           alt="Money Transfer"
//           width="300"
//         />
//       </div>
//       <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '20px', marginBottom: '20px' }}>
//         <div className={`card mt-3 ${cards[currentCardIndex].bgColor}`} >
//         <div className="card-body" >
//           <h5 className="card-title">{cards[currentCardIndex].title}</h5>
//           <p className="card-text">{cards[currentCardIndex].text}</p>
//         </div>
//       </div>

//       </div>
      
//       <div className="d-flex justify-content-center mt-3 mb-3">
//   <div className="arrow-buttons">
//     <button
//       className="btn btn-link arrow-button"
//       onClick={showPreviousCard}
//     >
//       &lt; Previous
//     </button>
//     <button className="btn btn-link arrow-button" onClick={showNextCard}>
//       Next &gt;
//     </button>
//   </div>
// </div>

//       <footer className="footer" >
//         <div className="container" style={{ backgroundColor: "black" }}>
//           <div className="row">
//             <div className="col-md-4 white" >
//               <h3>Contact Us</h3>
//               <p>Email: flashypay@gmail.com</p>
//               <p>Phone: 786-420-9211</p>
//               <p>Address: Taj Mahal</p>
//             </div>
//             <div className="col-md-4 white">
//               <h3>Quick Links</h3>
//               <ul className="white">
//                 <li>
//                   <a className="white" href="#">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a className="white" href="#">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a className="white" href="#">
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a className="white" href="#">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-md-4 white">
//               <h3>Follow Us</h3>
//               <ul className="white">
//                 <li>
//                   <a className="white" href="#">
//                     <i className="fab fa-facebook"></i> Facebook
//                   </a>
//                 </li>
//                 <li>
//                   <a className="white" href="#">
//                     <i className="fab fa-twitter"></i> Twitter
//                   </a>
//                 </li>
//                 <li>
//                   <a className="white" href="#">
//                     <i className="fab fa-instagram"></i> Instagram
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="bottom-footer">
//           <p>&copy; 2023 FlashPay. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Home.css'; // Import your custom CSS

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Money Transfer',
      text: 'Transfer money securely.',
      bgColor: 'bg-primary',
    },
    {
      title: 'Check Balance',
      text: 'View your account balance.',
      bgColor: 'bg-success',
    },
    {
      title: 'Add Credit Card',
      text: 'Add a new credit card for payments.',
      bgColor: 'bg-info',
    },
    {
      title: 'View Transactions',
      text: 'Review your transaction history.',
      bgColor: 'bg-warning',
    },
  ];

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(showNextCard, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="home-container" style={{ backgroundColor: 'white' }}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" className="header">
          <img
      src="https://i.pinimg.com/474x/2c/5d/28/2c5d280f76542f0fb022831905244f55.jpg"
      alt="Logo"
      style={{ width: "60px", height: "60px" }}
    />
            <span className="flashpay-text"> Welcome to FlashPay</span>
          </Typography>
          <div className="ml-auto">
            <Button variant="contained" color="primary" onClick={handleRegister}>
              Register
            </Button>
            <Button variant="contained" color="success" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container justifyContent="center" className="mt-5">
          <img
            src="https://biznext.in/images/services/Money-Transfer-1.png"
            alt="Money Transfer"
            width="300"
          />
        </Grid>
        <Card className={`mt-3 ${cards[currentCardIndex].bgColor}`}>
          <CardContent>
            <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
              {cards[currentCardIndex].title}
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
              {cards[currentCardIndex].text}
            </Typography>
          </CardContent>
        </Card>
        <div className="arrow-buttons-container">
          <Button className="arrow-button" onClick={showPreviousCard}>
            <ArrowBackIcon /> Previous
          </Button>
          <Button className="arrow-button" onClick={showNextCard}>
            Next <ArrowForwardIcon />
          </Button>
        </div>
        <footer className="footer">
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Contact Us
                </Typography>
                <p>Email: flashypay@gmail.com</p>
                <p>Phone: 786-420-9211</p>
                <p>Address: Balewadi High street</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <ul>
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <ul>
                  <li>
                    <Link href="#">
                      <FacebookIcon /> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <TwitterIcon /> Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <InstagramIcon /> Instagram
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Container>
          <div className="bottom-footer">
            <p>&copy; 2023 FlashPay. All rights reserved.</p>
          </div>
        </footer>
      </Container>
    </div>
  );
}


