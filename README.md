This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can check the component by using the link here: http://knowledge-contest.surge.sh/


## Usage
```
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


  ifGameDone(currentMessage) {  // this is the callback function for the message when the final question answered
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
      const questionList = ["What is the capital of France?", "Who is the drummer for Coldplay?", "What is the tallest building in the world?"]; // can give the question list here
      const answerList = [["Bern", "Berlin", "Paris", "Tokio"],
                          ["Dave Grohl", "Roger Taylor", "Dave Abbruzzese", "Will Champion"],
                          ["Eiffel Tower", "Burj Khalifa", "Shanghai Tower", "Kingdom Clock Tower"]]; // can give the answer list here.
      const correctAnswers = ["3", "4", "2"]; // can give the correct answers' indexes here.
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
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
