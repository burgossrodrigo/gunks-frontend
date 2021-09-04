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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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

	},

	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	  },	
		


	  
  },

  gridBox: {

	[theme.breakpoints.only('xs')]:{marginTop: '10vh', marginLeft: '8vw'},
	[theme.breakpoints.between('sm', 'xl')]:{marginTop: '10vh', marginLeft: '20vw'}

  },

  gridList:{

	[theme.breakpoints.only('xs')]:{marginTop:"15vh", marginBottom: '15vh', marginLeft: '5vw'},
	[theme.breakpoints.between('sm', 'xl')]:{marginTop:"15vh", marginBottom: '15vh', marginLeft: '15vw'}

  },

  accordeon:{

	padding: '25px',
    border: '2px solid #FFC40B',
    borderRadius: '20px 20px 20px 20px',
    backgroundColor: 'black',
	marginBottom: '5vh',
	opacity: '0.8',
	color: 'white',
	letterSpacing: '5px'
  }
  
  
})); 

const FeaturedPost = (props) => {

	useEffect(() => {


	})
	
	
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
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh', marginTop: '15vh'}}>
						<Box className={classes.mintBox} >
					<Typography variant='h3'>4,269</Typography>
					<Typography variant='h6'>SUPPLY</Typography>
				</Box>

						</Grid>
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh', marginTop: '15vh'}}>
						<Box className={classes.mintBox}>
					<Typography variant='h3' >0.033</Typography>
					<Typography variant='h6' >MINT PRICE</Typography>
				</Box>

						</Grid>
					</Grid>
		
		<Divider />

		<Grid container alignItems="center" justifyContent="center" spacing={3} style={{ marginTop: '15vh', marginBottom: '15vh'}}>
			<Grid item justifyContent="center" xs={12} sm={6} md={6} lg={6} xl={6} >
				<img style={{float: 'left'}} src={require('./image/1.jpg')} height={'278'} width={'278'}  />
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{marginBottom: '15vh'}}>
				<Typography variant='h4' style={{marginBottom: '5vh'}}>Welcome to Gunks</Typography>
				<Typography variant='h6' style={{float: 'right'}}>
				Gunks is a collection of 4269 Gunks NFTS unique with different accessories and designs on the Ethereum blockchain. The more gunks being sold equals more giveaways for the community to grow 	
				</Typography>						
			</Grid>
		</Grid>	
			<Divider />
		<Grid container align="center" justifyContent="center" spacing="3" className={classes.gridList}>	
			<Grid item xs={12} style={{float: 'right'}} sm={6} md={6} lg={6} xl={6} justifyContent="center">
			<List>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary" classes={{root: classes.iconRoot}}>
					<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Mass marketing at initial phase including" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary"classes={{root: classes.iconRoot}}>
					<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Twitter promos" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary" classes={{root: classes.iconRoot}}>
					<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Reddit promotions" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Telegram promos" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Cash giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Nft giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="primary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="1000 Discord members" />
			</ListItem>																				
			</List>
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
				<img style={{float: 'left'}} src={require('./image/2.jpg')} height={'278'} width={'278'}  />	
			</Grid>
			</Grid>
			<Grid container justifyContent="center" justifyContent="center" spacing={3} className={classes.gridList} >
			<Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
			<List>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary" classes={{root: classes.iconRoot}}>
					<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Mass marketing at initial phase including" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary" classes={{root: classes.iconRoot}}>
					<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Twitter promos" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary" classes={{root: classes.iconRoot}}>
					<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Reddit promotions" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary"classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Telegram promos" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Cash giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Nft giveaways" />
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<Icon color="secondary" classes={{root: classes.iconRoot}}>
						<CheckCircleOutlineIcon />
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="1000 Discord members" />
			</ListItem>																					
			</List>			
			</Grid>
			<Grid item justifyContent="center"  xs={12} sm={6} md={6} lg={6} xl={6}  >
				<img style={{float: 'left'}} src={require('./image/3.jpg')} height={'278'} width={'278'}  />
			</Grid>			
			</Grid>
			<Divider />
			<Grid container justifyContent="center" id="about" justifyContent="center" spacing={3} style={{marginTop:'15vh'}}>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
				
			<Accordion className={classes.accordeon} color="contrastText"> 
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography color="contrastText" className={classes.heading}>Can i joing gunks community?</Typography>
				</AccordionSummary>
				<Divider />
				<AccordionDetails>	
				<Typography color="contrastText">
					This is the name of the race of Alt-896 inhabitants
				</Typography  >
				</AccordionDetails>
			</Accordion>
			</Grid>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
			<Accordion className={classes.accordeon}>
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography color="contrastText" className={classes.heading}>What is Gunks?</Typography>
				</AccordionSummary>
				<Divider />
				<AccordionDetails>	
				<Typography color="contrastText" >
					Actually it doesn`t. For example: 7,777 Kedu
				</Typography>
				</AccordionDetails>
			</Accordion>
			</Grid>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
			<Accordion className={classes.accordeon}>
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography color="contrastText" className={classes.heading}>How do I buy a Gunks NFT?</Typography>
				</AccordionSummary>
				<Divider />
				<AccordionDetails>	
				<Typography color="contrastText">
				Over 300 traits, hand drawn from bottom of our hearts. Also, if we count the layers for each Kedu, there are 8 different of them. So, basically there was total of over 100,000,000 possible variations of Kedu but we patiently chose only 7,777 dope Kedu.
				</Typography>
				</AccordionDetails>
			</Accordion>
			</Grid>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
			<Accordion className={classes.accordeon}>
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography className={classes.heading}>How do I buy a Gunks NFT?</Typography>
				</AccordionSummary>
				<Divider />
				<AccordionDetails>	
				<Typography color="contrastText">
				Over 300 traits, hand drawn from bottom of our hearts. Also, if we count the layers for each Kedu, there are 8 different of them. So, basically there was total of over 100,000,000 possible variations of Kedu but we patiently chose only 7,777 dope Kedu.
				</Typography>
				</AccordionDetails>
			</Accordion>
			</Grid>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
			<Accordion className={classes.accordeon}>
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography color="contrastText" className={classes.heading}>Can I still mint one?</Typography>
				</AccordionSummary>
				<Divider />
				<AccordionDetails>	
				<Typography color="contrastText">
				During the public mint, you can get a Kedu on this website via Metamask web3 extension. If you were not able to get one first hand, you can always buy one from our owners on secondary markets such as Opensea, Rarible...
				</Typography>
				</AccordionDetails>
			</Accordion>
			</Grid>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
			<Accordion className={classes.accordeon}>
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography className={classes.heading}>Boring gas wars... How do you guys prevent this part?</Typography>
				</AccordionSummary>
				<Divider />
				<AccordionDetails>	
				<Typography color="contrastText" >
				The best way to avoid gas wars is holding Alt Multivisa. This is the official mint pass for early private mint (24h of duration). For each Alt Multivisa you have access to mint max of 3 Kedu.

Btw, actually this is not just a mint pass. The validity period is 5 years (!) and all Multivisa have really huge benefits for their holders. So, if you want to read all the details please welcome to our Discord
				</Typography>
				</AccordionDetails>
			</Accordion>
			</Grid>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
			<Accordion className={classes.accordeon}>
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography className={classes.heading}>I am a newbie on NFT space. What is NFT and Metamask?</Typography>
				</AccordionSummary>
				<Divider />
				<AccordionDetails>	
				<Typography color="contrastText" >
				A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable. NFTs can be used to represent items such as photos, videos, audio, and other types of digital files. Access to any copy of the original file, however, is not restricted to the buyer of the NFT. While copies of these digital items are available for anyone to obtain, NFTs are tracked on blockchains to provide the owner with a proof of ownership that is separate from copyright.

MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.
				</Typography>
				</AccordionDetails>
			</Accordion>
			</Grid>
			<Grid item justifyContent="center" xs={12} sm={12} md={12} lg={12} xl={12}>
				<Box>
					<Grid container>
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6}><Typography></Typography></Grid>
						<Grid item xs={6} sm={6} md={6} lg={6} xl={6}></Grid>
					</Grid>
				</Box>
			</Grid>						
		</Grid>

		<iframe class="discord" src="https://discordapp.com/widget?id=201798443583143936&theme=dark"/>
		
		
		

    </>);

}

FeaturedPost.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(FeaturedPost);