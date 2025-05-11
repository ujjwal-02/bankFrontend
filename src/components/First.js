// import React from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import IconButton from '@mui/material/IconButton';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import ImageCarousel from './ImageCarousel'; // Import the ImageCarousel component
// import ShopHere from './ShopHere'; // Import the ShopHere component

// const Header = () => {
//   const handleLogout = () => {
//     // Clear localStorage or perform any other logout actions
//     localStorage.clear();
//     window.location.href = '/';
//   };

//   return (
//     <div>
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to="/" className="navbar-brand header" style={{ textDecoration: 'none', color: 'white' }}>
//                FlashPay
//             </Link>
//           </Typography>
//           <div>
//             <Button component={Link} to="/MoneyTransfer" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
//               Money Transfer
//             </Button>
//             <Button component={Link} to="/CheckBalance" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
//               Check Balance
//             </Button>
//             <Button component={Link} to="/transactions" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
//               View Transaction
//             </Button>
//             <Button component={Link} to="/profile" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
//               Profile Management
//             </Button>
//             <Button component={Link} to="/CreditCard" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
//               Credit Card
//             </Button>
//             <Button component={Link} to="/Addbankaccount" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
//               Add Bank Account
//             </Button>
//             <IconButton onClick={handleLogout} color="inherit">
//               <ExitToAppIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Container sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//         {/* Include the ImageCarousel component below the navigation menu */}
//         <ImageCarousel />
//         {/* Include the ShopHere component */}
//         <ShopHere />
//       </Container>
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ImageCarousel from './ImageCarousel'; // Import the ImageCarousel component
import ShopHere from './ShopHere'; // Import the ShopHere component

const Header = () => {
  const handleLogout = () => {
    // Clear localStorage or perform any other logout actions
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="navbar-brand header" style={{ textDecoration: 'none', color: 'white' }}>
            <img
      src="https://i.pinimg.com/474x/2c/5d/28/2c5d280f76542f0fb022831905244f55.jpg"
      alt="Logo"
      style={{ width: "60px", height: "60px" }}
    />
               FlashPay
            </Link>
          </Typography>
          <div>
            <Button component={Link} to="/MoneyTransfer" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
              Money Transfer
            </Button>
            <Button component={Link} to="/CheckBalance" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
              Check Balance
            </Button>
            <Button component={Link} to="/transactions" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
              View Transaction
            </Button>
            
            {/* <Button component={Link} to="/CreditCard" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
              Credit Card
            </Button> */}
            <Button component={Link} to="/Addbankaccount" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
              Add Bank Account
            </Button>
            <Button component={Link} to="/profile" color="inherit" style={{ textDecoration: 'none', color: 'white' }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle />
              </IconButton>
            </Button>
            <IconButton onClick={handleLogout} color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Include the ImageCarousel component below the navigation menu */}
        <ImageCarousel />
        {/* Include the ShopHere component */}
        <p>The Fastest Way to Pay!</p>
        <ShopHere />
      </Container>
    </div>
  );
};

export default Header;

