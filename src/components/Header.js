import React, { useState } from 'react';
import { Toolbar, 
		 Divider, 
		 Typography, 
		 IconButton, 
		 Badge, 
		 Breadcrumbs,
		 Button,
		 Box,
		 Icon,
		Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon  from '@material-ui/icons/Menu';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SideDrawer from './SideDrawer';
import AppBar from '@material-ui/core/AppBar';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Carousel from '../Carousel';
import Countdown from 'react-countdown';

const useStyle = makeStyles((theme) => ({

	title: {

		flexGrow: 1,
		justifyContent: 'left'
	},

	tagLine: {

		fontSize: 20,
		textTransform: 'uppercase',
		justifyContent: 'center',
		fontFamily: 'Montserrat',
		flexGrow: 1
		},
		
	root: {
		flexGrow: 1,
	},
	
	  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  
  link: {
	  

	  fontSize: 25,
	  textTransform: 'uppercase',
	  justifyContent: 'center',
	  fontFamily: 'arial'
	  
  },
  
  breadcrumb: {
	
     flexGrow: 1,
	 borderBottom: '1px solid '
	  
  },
  
    imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit',
  },
  
  toolbar: {
	  
	  spacing: 8,
	  alignText: 'center'
  },

  countdown: {

	[theme.breakpoints.only('xs')]: {
			
		display: 'flex',
		flexDirection: 'column',
		padding: '10px',
	  
				  
	  },
	 [theme.breakpoints.between('sm', 'xl')]: {

	   display: 'flex',
	   flexDirection: 'column',
	   padding: '20px',
	   alignText: 'center'
				  
	}

  },

  countdownItens: {

	[theme.breakpoints.only('xs')]: {
			

		padding: '10px',
	  
				  
			  },
			  [theme.breakpoints.between('sm', 'xl')]: {

			  padding: '20px'
				  
			  }


  },
  
  toolBar:{
	  
	  		[theme.breakpoints.only('xs')]: {
			
  display: 'flex',

			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
		display: 'none',
			
		}
	  
  },
  
  breadCrumbs:{
	  
	  		[theme.breakpoints.only('xs')]: {
			
		display: 'none',
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
			display: 'flex',
			fontSize: '35px',
			borderBottom: '1px solid #ffb800',
			backgroundColor: 'black',
			width: '100%'
			
		}
	  
  },

  bread:{

	[theme.breakpoints.only('xs')]: {
			
		display: 'none',
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
			width: '70vw',
			display: 'flex',
			flexDirection: 'row'
			
		}

  },

  buttonOne: {

		[theme.breakpoints.only('xs')]: {width: '100%', marginTop: '10vh', marginBottom: '10vh', margiLeft: '7vw'},
		[theme.breakpoints.between('sm', 'xl')]: {width: '100%', marginTop: '10vh', marginBottom: '10vh'}

  },

doubleButtonBlue: {

	[theme.breakpoints.only('xs')]: {
		marginLeft: '5vw', 
		background: 'linear-gradient(90deg, #f6d048, #c85423)',
		color: 'white'
	},
	[theme.breakpoints.between('sm', 'xl')]: {
		marginLeft: '5vw', 
		background: 'linear-gradient(90deg, #f6d048, #c85423)',
		color: 'white',
		marginLeft: '20vw',
		marginTop: '10vh'
	},

	

},

doubleButtonYellow: {

	[theme.breakpoints.only('xs')]: {
		marginLeft: '5vw', 
		background: 'linear-gradient(90deg, #f6d048, #c85423)',
		color: 'white'
	},
	[theme.breakpoints.between('sm', 'xl')]: {
		marginLeft: '5vw', 
		background: 'linear-gradient(90deg, #69c9e1, #2151f4 )',
		color: 'white',
		marginLeft: '20vw',
		marginTop: '10vh'
	},

	

}
  
  
	

}));



const Header = (props) => {
	
	

	
	const classes = useStyle();
	const [wallet, setWallet] = useState(false);
	const { width } = props;

	
	return(
	
		<>  

		
		<Toolbar className={classes.breadCrumbs} style={{color: 'secundary'}} >
			<Grid container>
				<Grid item><img src={require('./image/logo.png')} /></Grid>
				<Grid item><Typography style={{marginTop: '6vh', marginLeft: '2vw'}} variant='h4' className={classes.title}> GUNKS </Typography></Grid>
			</Grid>				
			<Breadcrumbs className={classes.bread} aria-label="breadcrumb" separator=' | '>
			  <Link color="inherit" href='' className={classes.link} variant='inherit' >
				ABOUT
			  </Link>
			  <Link underline='hover' href='' className={classes.link} variant='inherit' color="inherit" >
				TEAM
			  </Link>
			  <Link underline='hover' href='' className={classes.link} variant='inherit' color="inherit" >
				ROADMAP
			  </Link>
			  <Link underline='hover' className={classes.link} variant='inherit' color="inherit" >
				FAQ
			  </Link>
			  <Link underline='hover' className={classes.link} variant='inherit' color="inherit" >
				Chart
			  </Link>
			</Breadcrumbs>
		</Toolbar>
	
		
		

				<Toolbar className={classes.toolBar} style={{backgroundColor: 'black'}}>	
					<Grid container>
					<Grid item><img src={require('./image/logo.png')} /></Grid>
					<Grid item><Typography style={{marginTop: '8vh', marginLeft: '2vw', fontSize: '18px'}} variant='h4' className={classes.title}> GUNKS </Typography></Grid>
					</Grid>					
					<IconButton color='inherit' fontSize="large">
						<Badge badgeContent={1} color='white' >
							<AccountBalanceWalletIcon size="large" color="white" onClick={() => {setWallet(true);}} />
						</Badge>
						</IconButton>
						<SideDrawer>
							<IconButton>
								<MenuIcon color="white" size="large" />
							</IconButton>
						</SideDrawer>
				</Toolbar> 

			<Toolbar className={classes.countdown}>
				<Grid container alignItems="center" justifyContent="center" style={{marginTop: '10vh'}}>
					<Grid item>
						<Typography align='center' variant='h1'>GUNKS</Typography>
						<Typography style={{marginLeft: '10vw', marginTop: '10vh'}}align='center' variant='h5'>

						GUNKS
Gunks is an NFT Collection of 4269 unique characters that bring utility by giving back to the community with unique marketing approaches.

						</Typography>
					</Grid>
					<Grid container justifyContent="center" alignItems="center" spacing={3} className={classes.buttonOne}>
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
						<Button className={classes.doubleButtonBlue} size="large" variant="contained">Learn</Button>

						</Grid>
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
						<Button className={classes.doubleButtonYellow} size="large" variant="contained">Roadmap</Button>

						</Grid>
					</Grid>
				</Grid>
			</Toolbar>

			<Divider /> 	
			

		
		</>
	
	);
	
}

Header.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Header);