import { Component } from 'react';
import classes from './User.module.css';

//class is default JS feature not specific to React
//render method gives the output to be rendered but that don't take any argument as input
class User  extends Component {

  componentWillUnmount() {
    console.log('Component will Unmount');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

/* const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
}; */

export default User;
