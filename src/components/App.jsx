import React, { Component } from 'react';
import Card from './Card';

export class App extends Component {
  state = {
    followers: 100500,
    isFollowing: false,
    condition: 'Follow',
  };

  componentDidMount() {
    const followers = JSON.parse(localStorage.getItem('follower'));
    if (followers) {
      this.setState({
        followers: followers.followers,
        isFollowing: followers.isFollowing,
      });
    }
  }
  componentDidUpdate(p, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('follower', JSON.stringify(this.state));
    }
  }
  followBtnHandler = e => {
    const { isFollowing } = this.state;
    if (isFollowing === false) {
      this.setState(prevState => {
        return {
          followers: prevState.followers + 1,
          isFollowing: true,
          condition: 'following',
        };
      });
    } else {
      this.setState(prevState => {
        return {
          followers: prevState.followers - 1,
          isFollowing: false,
          condition: 'Follow',
        };
      });
    }
  };

  render() {
    return (
      <Card
        followers={this.state.followers}
        condition={this.state.condition}
        followBtnHandler={this.followBtnHandler}
        isFollowing={this.state.isFollowing}
      />
    );
  }
}
