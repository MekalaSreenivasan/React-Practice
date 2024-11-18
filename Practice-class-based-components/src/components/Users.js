import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    //IMPORTANT: with class based component the state is always an object
    this.state = {
      showUsers: true
    };
  }

  componentDidUpdate() {
    if (this.state.users.length === 0) {
      throw new Error('User list is Empty!!');
    }
  }

  toggleUsersHandler() {
    //Directly updating the state object is not the correct method to do.
    //Instead use the setState method provided by the component from React
    this.setState((currentState) => {
      return {
        showUsers: !currentState.showUsers
      }
    });
  }
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );    
  }
}

/* const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };



  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
}; */

export default Users;
