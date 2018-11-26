import React, {Component} from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }))
  }

  /*
    componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps...');
    }

    componentWillMount() {
      console.log('componentWillMount...');
    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {
      console.log('componentWillUpdate...');
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate...');
    }

    componentWillUnmount() {

    }

    static getDerivedStateFromProps(nextProps, prevState) {
      return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('getSnapshotBeforeUpdate...');

    }*/


  render() {
    const {title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}


export default Test;