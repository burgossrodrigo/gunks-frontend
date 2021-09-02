import React, { useEffect, useState } from 'react';
import { CardContent, 
		 Card, 
		 Typography, 
		 Box, 
		 Divider,
		Grid } from '@material-ui/core';
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
		


	  
  },
  
    balanceBoxContent: {
	  

    [theme.breakpoints.only('sx')]: {

		width: '100%',

		
    },
    [theme.breakpoints.between('sm', 'xl')]: {

		width: '50%',
		marginLeft: '10px'
	
    },
		


	  
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
	
		<Box className={classes.infoWrapper} mt={5}>
	
		<Grid container style={{marginLeft: '32vw', marginTop: '10vh'}}>
						<Grid item>
							<Button style={{
								marginRight: '5vw', 
								background: 'linear-gradient(90deg, #f6d048, #c85423)',
								color: 'white'
								}} size="large" variant="contained">Learn More</Button>
						</Grid>
						<Grid>
							<Button variant="contained" size="large" color="primary">Roadmap</Button>
						</Grid>
		</Grid>

		</Box>
		
		<Divider />
		
		
		<Box className={classes.balanceBox} pt={10}>
			<Box className={classes.balanceBoxContent}>	
			<Card className={classes.cover}>
				<CardMedia
				  className={classes.media}
				  image="https://seth-balance.herokuapp.com/BALANCE.png"
				  title="BALANCE"
				/>
				<CardContent>
					<Typography variant='caption'>Name: {} </Typography><br />
					<Typography variant='caption'>Author: {}</Typography><br />						
				</CardContent>
				<CardContent>
				<Button variant="contained" color="primary" onClick={() => {buyNFT();}}>BUY 5 BNB</Button>
				</CardContent>
			</Card>
			</Box>
			<Box className={classes.balanceBoxContent}>
				<Typography variant='h5' >About BALANCE</Typography>
				<Typography paragraph='true' variant="body2">
					BALANCE is the first NFT of the artist Hanna Kowalska. It was designed for the token launch, to acquire funds to the marketing campaign. In horder to show gratitude for the buyer we will allow the address owner of BALANCE, perpetual license from trading taxes and wallet  upon SETH token. 30% of the value will be added to the token liquidity, 20% will be for the gallery and for the artist and 50% will be invested in the marketing campaing.
				</Typography>
			</Box>
			
			
				
			
		</Box>
		

    </>);

}

FeaturedPost.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(FeaturedPost);