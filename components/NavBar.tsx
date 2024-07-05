// NavBar.tsx
import React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



const NavBar = () => {
    return (
      <>

        <AppBar position="fixed"> {/* Change position to fixed */}
          <Toolbar style={{ justifyContent: 'space-evenly' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" passHref>
                <IconButton edge="start" color="inherit" aria-label="home">
                  <HomeIcon />
                  <Typography variant="h6" style={{ marginLeft: '10px' }}>
                    Home
                  </Typography>
                </IconButton>
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/pages/recipe/list" passHref>
                <IconButton color="inherit">
                  <MenuBookIcon />
                  <Typography variant="h6" style={{ marginLeft: '10px' }}>
                    Recipes
                  </Typography>
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Add an empty Toolbar to offset the content below the AppBar */}
      </>
    );
  };

export default NavBar;