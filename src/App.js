import React, { Component } from 'react';
import Contest from './Contest';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameDone: false,
      message: "",
    }
    this.ifGameDone = this.ifGameDone.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  ifGameDone(currentMessage) {
    this.setState({
      gameDone: !this.state.gameDone,
      message: currentMessage,
    });
  }


  handleClick() {
    this.setState({
      gameDone: !this.state.gameDone,
    })
  };

  render() {
    let contestComp = "";
    if(!this.state.gameDone){
      const questionList = ["What is the capital of France?", "Who is the drummer for Coldplay?", "What is the tallest building in the world?"];
      const answerList = [["Bern", "Berlin", "Paris", "Tokio"],
                          ["Dave Grohl", "Roger Taylor", "Dave Abbruzzese", "Will Champion"],
                          ["Eiffel Tower", "Burj Khalifa", "Shanghai Tower", "Kingdom Clock Tower"]];
      const correctAnswers = ["3", "4", "2"];
      contestComp = (<Contest ifGameDone={this.ifGameDone} questionList={questionList} answerList={answerList} correctAnswers={correctAnswers}/>);
    }
    else{
      contestComp = (<div>
        <p id="message">{this.state.message}</p>
        <button style={{display: this.state.gameDone ? "block" : "none"}}id="startOver" onClick={this.handleClick}>Play Again</button>
      </div>);
    }

    return(
      <div>
        <h1 style={{textAlign: "center"}}>Who Wants To Be A Millionare?</h1>
        {contestComp}
      </div>
    );
  }
}

export default App;
