import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { List, Box } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListSubheader from '@material-ui/core/ListSubheader';
import BarChartIcon from '@material-ui/icons/BarChart';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	
	root:{
		
		paddingTop: '50px',
		fontSize: '10px',
		alignText: 'left'
		
	},
	

	
	  imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit'
  },
  iconRoot: {
    textAlign: 'center'
  },
	
	footGrid: {
		
		[theme.breakpoints.only('xs')]: {
			
  display: 'flex',
  flexDirection: 'column',
   textAlign: 'left',
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
  display: 'flex',
  flexDirection: 'row',
			
		}
		
	}
	
}))

const Footer = () => {
	
	const classes = useStyles();
	return (<>
	<Box className={classes.root}>
		<Box className={classes.footGrid}>
		<List
		
		aria-labelledby="nested-list-subheader"
		subheader={
        <ListSubheader color="pimary" component="div" id="Social">
          Social
        </ListSubheader>
		}
		
		>
			<ListItem button>
				<ListItemIcon>
					<Icon classes={{root: classes.iconRoot}}>
					  <img className={classes.imageIcon} src="https://icones.pro/wp-content/uploads/2021/03/logo-discord-icone-png-jaune.png"/>
					</Icon> 
				</ListItemIcon>	
				<ListItemText primary="Discord" />
			</ListItem>
	
			<ListItem button>
				<ListItemIcon onClick={() => {window.open('https://twitter.com/SethNft');}} >
					<TwitterIcon color="primary"  classes={{root: classes.iconRoot}} />
				</ListItemIcon>	
				<ListItemText primary="Twitter" />
			</ListItem>
			

		</List>

		<List style={{fontSize: '15px'}} aria-labelledby="nested-list-subheader" subheader={<ListSubheader color="pimary" component="div" id="Social">Navigation</ListSubheader>}>
			<ListItem className={classes.iconRoot}>
				About
			</ListItem>
			<ListItem>
				Team	
			</ListItem>
			<ListItem>
				Roadmap	
			</ListItem>
			<ListItem>
				Faq
			</ListItem>
			<ListItem>
				Chart	
			</ListItem>	
		</List>
		</Box>
	</Box>
	</>
)};

Footer.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(Footer);