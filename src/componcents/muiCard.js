import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';

import profile from "../images/profile.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    padding: "0 20px",
    zIndex: 2
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MuiCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "2em"}}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Marquis J Gaston"
        subheader="Full Stack Developer"
      />

      
        <div className="card-center">
        <img style={{height: "10em"}} src={profile} alt="profle"/>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{display: "grid", alignItems: "space-around", height: "100%", padding: "10px"}}>
          <div className="card-text">
          Creative by night, Problem-Solver by Day. I enjoy finding innovative ways to help others. Whether that's simply connecting people and services, building new features, or imagining how something could be done better, functionality is my bread and butter.
          </div>
          <div className="card-text non-p">
            Graduate of Bottega Tech FullStack Program
          </div>    
          <div className="card-text non-p">
          MarquisGaston23@gmail.com
          </div>  
          <div className="card-text non-p">
          567-343-3654
          </div>  
          </Typography>
        </CardContent>
        </div>
      
      <CardActions disableSpacing>
      <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
        <a href="https://www.linkedin.com/in/marquisgaston"><i class="fab fa-linkedin"></i></a>
        <a href="http://github.com/marquisgaston"><i class="fab fa-github"></i></a>
        <a href="https://www.twitter.com/marquis_gaston"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/marquisgaston_"><i class="fab fa-instagram"></i></a>
      </div> 
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Button style={{backgroundColor: "$bg-color", color: "white", textDecoration: "none", linkColor: "white"}}><a href="https://docs.google.com/document/d/1mWRqgDd30Er4ZvEvIrX7WlwzHiVGRfxAjRn5PNY99FY/edit">DownLoad Resume</a></Button>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
