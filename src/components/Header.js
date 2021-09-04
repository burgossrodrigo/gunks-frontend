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
	
     flexGrow: 2,
	 border: '1px solid '
	  
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
			border: '1px solid #ffb800',
			backgroundColor: 'black'
			
		}
	  
  },

  bread:{

	[theme.breakpoints.only('xs')]: {
			
		display: 'none',
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
			width: '75vw',
			display: 'flex',
			flexDirection: 'row'
			
		}

  },

  buttonOne: {

		[theme.breakpoints.only('xs')]: {width: '100%', marginTop: '10vh', marginBottom: '10vh', position: 'relative'},
		[theme.breakpoints.between('sm', 'xl')]: {width: '100%', marginTop: '10vh', marginBottom: '10vh'}

  },

doubleButtonBlue: {

	[theme.breakpoints.only('xs')]: {
		position: 'relative', 
		background: 'linear-gradient(90deg, #f6d048, #c85423)',
		color: 'white'

	},
	[theme.breakpoints.between('sm', 'xl')]: {
		background: 'linear-gradient(90deg, #f6d048, #c85423)',
		color: 'white',
		marginTop: '10vh',
		position: 'relative',
		float: 'right'
	},

	

},

doubleButtonYellow: {

	[theme.breakpoints.only('xs')]: {
		background: 'linear-gradient(90deg, #f6d048, #c85423)',
		color: 'white',
		
	},
	[theme.breakpoints.between('sm', 'xl')]: { 
		background: 'linear-gradient(90deg, #69c9e1, #2151f4 )',
		color: 'white',
		marginTop: '10vh',
		float: 'left'
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
				<Grid item><Typography style={{marginTop: '6vh'}} variant='h4' className={classes.title}> GUNKS </Typography></Grid>
			</Grid>				
			<Breadcrumbs className={classes.bread} aria-label="breadcrumb" separator=' | '>
			  <Link color="primary" href='#about' className={classes.link} variant='inherit' >
				ABOUT
			  </Link>
			  <Link underline='hover' color="primary" href='' className={classes.link} variant='inherit' >
				TEAM
			  </Link>
			  <Link underline='hover' color="primary" href='' className={classes.link} variant='inherit' >
				ROADMAP
			  </Link>
			  <Link underline='hover' color="primary" className={classes.link} variant='inherit' >
				FAQ
			  </Link>
			  <Link underline='hover' color="primary" className={classes.link} variant='inherit' >
				Multivisa
			  </Link>
			</Breadcrumbs>
		</Toolbar>
	
		
		

				<Toolbar className={classes.toolBar} style={{backgroundColor: 'black'}}>	
					<Grid container>
					<Grid item><img src={require('./image/logo.png')} width={75} height={75} /></Grid>
					<Grid item><Typography style={{marginTop: '4vh', marginLeft: '2vw', fontSize: '18px'}} variant='h4' className={classes.title}> GUNKS </Typography></Grid>
					</Grid>					
					<IconButton color='inherit' fontSize="large">
						<Badge badgeContent={1} color='secondary' >
							<AccountBalanceWalletIcon size="large" color="primary" onClick={() => {setWallet(true);}} />
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
						<Typography style={{marginTop: '10vh'}}align='center' variant='h5'>

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
 	
			

		
		</>
	
	);
	
}

Header.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Header);