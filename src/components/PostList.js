import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUser } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts()
  }

  renderList(){
    return this.props.posts.map( (post) => {
      return <div className="item" key={post.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      </div>
    })
  }

  render(){
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.users
  }
}

export default connect(mapStateToProps, { fetchPosts, fetchUser })(PostList);
