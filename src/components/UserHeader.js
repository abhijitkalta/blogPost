import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }

  render() {

    if(!this.props.user){
      return null;
    } else {
      return (
        <div className="User-Header header">
          {this.props.user.name}
        </div>
      )
    }

  }

};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId )
  }
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);
