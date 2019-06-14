import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Background from './Background.png';
import '../App.css';

const useStyles = makeStyles(theme => ({
  formContainer: {
    height: '70vh',
    backgroundColor: 'white',
  },
  header: {
    height: '30vh',
    paddingLeft: 70,
    paddingRight: 70,
  },
  title: {
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
  yellow: {
    backgroundColor: 'yellow',
    height: '35vh',
  },
  card: {
    position: 'absolute',
    top: '27vh',
    width: '34vw',
    height: '37vh',
    marginLeft: '30px',
  },
  backgroundImage: {
    height: '23vh',
    width: '100%',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 80,
    paddingRight: 80,
  },
}));

function FormContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.formContainer}>
        <div className={classes.header}>
          <h3 className={classes.title}>adyax</h3>
          <p className={classes.subTitle}>a better experience</p>
          <h2 className={classes.title}>Front-End Developer</h2>
          <p className={classes.subTitle}>
            Adyax's core values take top priority: we care for our client, and we care for our people.
            Staff and clients work in partnership with consistent, transparent communication.
          </p>
        </div>
        <div className={classes.yellow}/>
        <Card className={classes.card}/>
      </div>
      <div className={classes.backgroundImage}>
        <h5 className={classes.footerText}>
          Adyax specializes in working with multi-national, multi-brand companies on a wide range of customer,
          client and employee-facing solutions.
        </h5>
      </div>
    </React.Fragment>
  );
}
export default FormContainer;