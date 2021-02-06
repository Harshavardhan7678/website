import React from 'react';

import { Typography, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

// assets
import logo from '../../assets/img/logo.png';

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.row1}>
          <Link to='/' style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              className={classes.logoDark}
              src={logo}
              alt='TEDxNITRourkela'
            />
          </Link>

          <Typography className={classes.primaryText} variant='body2'>
            This independent TEDx event is operated under licence from TED
          </Typography>
          <Typography className={classes.secondaryText} variant='body2'>
            © 2021 TEDxNITRourkela. All rights reserved.
          </Typography>
        </div>

        <div className={classes.row2}>
          <div className={classes.row2column1}>
            <Link to='/about' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                About
              </Typography>
            </Link>
            <Link to='/events' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Events
              </Typography>
            </Link>
            <Link to='/speakers' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Speakers
              </Typography>
            </Link>
          </div>
          <div className={classes.row2column2}>
            <Link to='/partners' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Partners
              </Typography>
            </Link>
            <Link to='/participate' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Participate
              </Typography>
            </Link>
            <Link to='/community' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Our Community
              </Typography>
            </Link>
          </div>
        </div>

        <div className={classes.row3}>
          <Typography className={classes.contact} variant='h3'>
            Contact Us:
          </Typography>
          <a href='mailto:info@tedxnitrourkela.com'>
            <Typography className={classes.email} variant='body1'>
              info@tedxnitrourkela.com
            </Typography>
          </a>

          <div className={classes.iconsContainer}>
            <a href='https://www.facebook.com/tedxnitrourkela/'>
              <i className={`${classes.icon} fab fa-facebook-f`} />
            </a>
            <a href='https://twitter.com/tedxnitr'>
              <i className={`${classes.icon} fab fa-twitter`} />
            </a>
            <a href='https://www.ted.com/tedx/events/41324'>
              <i className={`${classes.icon} fab fa-youtube`} />
            </a>
            <a href='https://in.linkedin.com/company/tedxnitrourkela'>
              <i className={`${classes.icon} fab fa-linkedin-in`} />
            </a>
            <a href='https://www.instagram.com/tedxnitrourkela/'>
              <i className={`${classes.icon} fab fa-instagram`} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '265px',
    backgroundColor: theme.palette.background.default,
    borderTop: '1px solid rgba(255,255,255,0.4)',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  row1: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: 50,
      width: '100%',
    },
  },
  logoDark: {
    width: 390,
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      maxWidth: 390,
    },
  },
  primaryText: {
    width: 390,
    alignText: 'left',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    marginTop: '30px',
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      width: '80%',
      alignText: 'center',
      maxWidth: 390,
    },
  },
  secondaryText: {
    width: 390,
    alignText: 'left',
    fontWeight: 'normal',
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    marginTop: '5px',
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      width: '80%',
      alignText: 'center',
      maxWidth: 390,
    },
  },
  row2: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  row2column1: {
    minWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2column2: {
    minWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    width: '100%',
  },
  link: {
    width: '100%',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    color: theme.palette.common.white,
    alignText: 'left',
  },
  row3: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: 390,
      margin: '50px auto',
    },
  },
  contact: {
    width: '70%',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  email: {
    width: '70%',
    fontWeight: 'normal',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  iconsContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingRight: 30,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  icon: {
    color: theme.palette.common.white,
    margin: '10px 15px',
  },
}));