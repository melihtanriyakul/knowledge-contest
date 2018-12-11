import React from 'react';
import './Contest.css'

export default class Contest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.questionList[0],
            firstAnswer: props.answerList[0][0],
            secondAnswer: props.answerList[0][1],
            thirdAnswer: props.answerList[0][2],
            fourthAnswer: props.answerList[0][3],
            correctAnswerIndex: props.correctAnswers[0],
            clickedAnswerIndex: 0,
            hideOrShow: false,
            ifClicked: false,
            isCorrect: false,
            showResult: false,
            numOfQuestion: 0,
            gameDone: false,
        }
        this.onAnswerClicked = this.onAnswerClicked.bind(this);
        this.onSureClicked = this.onSureClicked.bind(this);
        this.onNextQuestionClicked = this.onNextQuestionClicked.bind(this);
        this.onNotSureClicked = this.onNotSureClicked.bind(this);
    }

    componentDidMount() {
        // this.timedID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }
    componentDidUpdate(nextProps, nextState){
        if(nextState.numOfQuestion === this.props.questionList.length){

        }
        if(this.state.numOfQuestion !== nextState.numOfQuestion){
            document.getElementById(this.state.clickedAnswerIndex).style.backgroundColor = "white";
            this.setState({
                question: this.props.questionList[this.state.numOfQuestion],
                firstAnswer: this.props.answerList[this.state.numOfQuestion][0],
                secondAnswer: this.props.answerList[this.state.numOfQuestion][1],
                thirdAnswer: this.props.answerList[this.state.numOfQuestion][2],
                fourthAnswer: this.props.answerList[this.state.numOfQuestion][3],
                correctAnswerIndex: this.props.correctAnswers[this.state.numOfQuestion],
                clickedAnswerIndex: "",
                hideOrShow: false,
                ifClicked: false,
                isCorrect: false,
                showResult: false,
                gameDone: false,
            })
        }

        return true;
    }

    onAnswerClicked(e) {
            if(this.state.clickedAnswerIndex){
                document.getElementById(this.state.clickedAnswerIndex).style.backgroundColor = "white";
            }
            e.target.style.backgroundColor = "yellow";
            this.setState({
                clickedAnswerIndex: e.target.id,
                ifClicked: true,
                hideOrShow: true,
            });
    }

    onSureClicked(e) {
        if(this.state.clickedAnswerIndex === this.state.correctAnswerIndex){
            if(this.state.numOfQuestion === this.props.questionList.length - 1){
                const message = "Congratulations! You won.";
                this.setState({ gameDone: true });
                this.props.ifGameDone(message);
            }
            document.getElementById(this.state.clickedAnswerIndex).style.backgroundColor ="green";
            this.setState({
                isCorrect: true,
                showResult: true,
            });
        }
        else {
            const message = "Unfortunately, you lost!";
            this.setState({ gameDone: true});
            this.props.ifGameDone(message);
        }
    }

    onNotSureClicked(e) {
        this.setState({ hideOrShow: false });
    }

    onNextQuestionClicked() {
        if(this.state.numOfQuestion !== this.props.questionList.length - 1) {
            this.setState({numOfQuestion: this.state.numOfQuestion + 1});
        }
    }
    componentWillUnmount(){
        console.log("The component unmounted.");
    }

    render() {
        return(
            <div id="mainDiv">
                <div className="question">{this.state.numOfQuestion + 1}. {this.state.question}</div>
                <div id="answers">
                    <button onClick={this.onAnswerClicked} id={1}>{this.state.firstAnswer}</button>
                    <button onClick={this.onAnswerClicked} id={2}>{this.state.secondAnswer}</button><br/>
                    <button onClick={this.onAnswerClicked} id={3}>{this.state.thirdAnswer}</button>
                    <button onClick={this.onAnswerClicked} id={4}>{this.state.fourthAnswer}</button><br/>
                </div>
                <div className={`${this.state.hideOrShow}`} >
                    <p><b>Are you sure?</b></p>
                    <button className="ifSure" onClick={this.onSureClicked} id="sure">Yes</button>
                    <button className="ifSure" onClick={this.onNotSureClicked} id="not">No</button>
                    <p className={`${this.state.showResult}`}id="sureOrNot" >{this.state.isCorrect ? 'Congratulations! Your answer is correct' : 'Unfortunately, your answer is not correct.'}</p>
                    <button className={`${this.state.isCorrect}`} id="nextQuestion"  onClick={this.onNextQuestionClicked}>Next Question</button>
                </div>
            </div>
        )
    }
}