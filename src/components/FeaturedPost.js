import React, { useEffect, useState } from 'react';
import { CardContent, 
		 Card, 
		 Typography, 
		 Box, 
		 Divider,
		Grid,
		List,
		ListItem,
		ListItemIcon,
		Icon,
		ListItemText } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import CastForEducationTwoToneIcon from '@material-ui/icons/CastForEducationTwoTone';
import Web3 from 'web3';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  media: {
    height: 500,
  },
  cover: {
	  
	  
  },
  
  paperIcon: {
	  
	  position: 'relative',
	  align: 'center',
	  width: '50px'
	  
  }, 
  
  infoWrapper: {
	  

	  
	  	[theme.breakpoints.only('xs')]: {
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center',
	  width: '100%',

	},
	
    [theme.breakpoints.between('sm', 'xl')]: {

	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'flex-start',
	  width: '100%',
	
    },
	  
  },
  
  info: {
	  
	  width: '400px',
	  textAlign: 'justify',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  flexDirection: 'columm',
	  marginTop: '5px',
	  padding: '20px'	
	  
	  
	  
	  
  },
  
  infoIcon: {
	  
	color: 'red',
	paddingBottom: '10px'
	  
  },
  
  balanceBox: {
	  
	[theme.breakpoints.only('xs')]: {
	  display: 'grid',
	  gridTemplateColumns: '1fr',
	  gap: '5px',
	  paddingBottom: '40px',
	  justifyContent: 'left',
	  alignItems: 'flex-start',
	  spacing: 8,

	},
	
    [theme.breakpoints.between('sm', 'xl')]: {

	  display: 'flex',
	  flexDirection: 'row',
	  paddingBottom: '40px',
	  justifyContent: 'left',
	  alignItems: 'flex-start',
	  spacing: 8,	
	
    },

	imageIcon: {
		display: 'flex',
		height: 'inherit',
		width: 'inherit'
	  },
	  iconRoot: {
		textAlign: 'center'
	  },
		


	  
  },
  
    balanceBoxContent: {
	  

    [theme.breakpoints.only('sx')]: {

		width: '100%',

		
    },
    [theme.breakpoints.between('sm', 'xl')]: {

		width: '50%',
		marginLeft: '10px'
	
    },

	mintBox: {

		width: '15vw',
		height: '10vh',
		backgroundColor: 'black',
		border: '1px solid lightgrey'


	},

	promoImage:{

		[theme.breakpoints.only('xs')]:{display: 'none'},
		[theme.breakpoints.between('sm', 'xl')]:{width:'223', height:'223px'}

	}
		


	  
  },

  gridBox: {

	[theme.breakpoints.only('xs')]:{marginTop: '10vh', marginLeft: '8vw'},
	[theme.breakpoints.between('sm', 'xl')]:{marginTop: '10vh', marginLeft: '20vw'}

  }
  
})); 

const FeaturedPost = (props) => {
	
	
	const [balanceName, setBalanceName] = useState('');
	const { width } = props;
	const classes = useStyles();
	

		// Declare this call to be cached and synchronized. We'll receive the store key for recall.
		const buyNFT = async () => {

			const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://agitated-leakey:sprung-film-balmy-expose-uneven-atop@ws-nd-896-839-440.p2pify.com'));			
			const networkId = await web3.eth.net.getId();
			const addresses = await web3.eth.getAccounts();
		};

	
		// Use the dataKey to display data from the store.


 
    return(<>
	
	<Grid container alignItems="center" justifyContent="center" spacing={3} className={classes.gridBox}>
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
						<Box className={classes.mintBox} >
					<Typography variant='h3'>4,269</Typography>
					<Typography variant='h6'>SUPPLY</Typography>
				</Box>

						</Grid>
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
						<Box className={classes.mintBox}>
					<Typography variant='h3' >0.033</Typography>
					<Typography variant='h6' >MINT PRICE</Typography>
				</Box>

						</Grid>
					</Grid>
		
		<Divider />

		<Grid container alignItems="center" justifyContent="center" spacing={3} style={{ marginTop: '15vh'}}>
			<Grid item justifyContent="center" xs={12} sm={6} md={6} lg={6} xl={6} >
				<img style={{float: 'left'}} src={require('./image/1.jpg')} height={'278'} width={'278'}  />
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<Typography variant='h4' style={{marginBottom: '5vh'}}>Welcome to Gunks</Typography>
				<Typography variant='h6' style={{float: 'right'}}>
				Gunks is a collection of 4269 Gunks NFTS unique with different accessories and designs on the Ethereum blockchain. The more gunks being sold equals more giveaways for the community to grow 	
				</Typography>						
			</Grid>
			<Divider />
			<Grid container></Grid>
			<List>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Mass marketing at initial phase including" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Twitter promos" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Reddit promotions" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Telegram promos" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Cash giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Nft giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://portoesajatojcm.com.br/wp-content/uploads/sites/9/2020/02/236-2362999_check-icon-yellow-check-icon-png.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="1000 Discord members" />
			</ListItem>																					
			</List>			
		</Grid>
		
		
		

    </>);

}

FeaturedPost.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(FeaturedPost);