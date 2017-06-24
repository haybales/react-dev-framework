import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      name: this.props.name,
    };
  }

  handleClick(){
    this.setState({
      name: "buddy"
    });
  }

  render(){
    return(
      <div className="main">
        <h1>Hello from react, {this.state.name}.</h1>
        <p >Wa la! Your app is running.</p>
        <button onClick={this.handleClick.bind(this)}>test</button>
      </div>
    );
  }

};

App.propTypes = {
  name: React.PropTypes.string,
};

App.defaultProps = {
  name: "friend",
};

export default App;
