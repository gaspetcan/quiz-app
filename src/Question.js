import React from 'react';
import Answers from './Answers';

class Question extends React.Component{
    render(){
        return (
            <div>
                {this.props !== undefined ?
                    <div>
                        <h1 className={"questionId"}>{"Question " + this.props.questionId}
                            <h1>{this.props.question}</h1>
                        </h1>

                        <Answers answers = {this.props.answers}
                        correctAnswer={this.props.correctAnswer}
                        nextQuestion = {this.props.nextQuestion}/>
                    </div>:
                    <div>
                        <Answers/>
                    </div>
                }

            </div>
        );
    }
}

export default Question;
