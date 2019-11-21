import React from 'react';
import Questions from './Questions';
import Question from './Question';

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questionId : 0,
            question : "",
            answers : null,
            correctAnswer : "",
            started: false
        };
        this.nextQuestion = this.nextQuestion.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
    }

    nextQuestion(){
        const thisQuestion = Questions.filter( question => (
            question.questionId === this.state.questionId
        ));
        thisQuestion.map((question) => {
            this.setState({
                questionId : this.state.questionId+1,
                question : question.question,
                answers : question.answers,
                correctAnswer : question.questionAnswer,
                started: true
            })
        });
    }

    tryAgain(){
        this.setState({
            questionId : 0,
            question : "",
            answers : null,
            correctAnswer : "",
            started: false
        })
    }

    render(){
        return (
            <div>
                {this.state.started ?
                    <div>
                        {this.state.questionId != Questions.length ?
                            <Question
                            questionId = {this.state.questionId}
                            question = {this.state.question}
                            answers = {this.state.answers}
                            correctAnswer ={this.state.correctAnswer}
                            nextQuestion = {this.nextQuestion}
                            />:
                            <Question
                            tryAgain = {this.tryAgain}/>
                        }
                    </div>:
                    <div>
                        <img className={"QuestionMark"} src="./QuestionMark.gif"/>
                        <h1 className={"Game"}>10 Quick Question</h1>
                        <button className={"button"} onClick={this.nextQuestion}>Start</button>
                    </div>
                }
            </div>
        );
    }
}

export default Quiz;
