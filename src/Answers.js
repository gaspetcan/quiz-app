import React from 'react';

class Answers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            score: 0,
            disabled: false
        }
    }

    checkCondition = (e, answer) =>{
               this.setState({
                   color: "yellow",
                   disabled: true
               });
               setTimeout(
                   function() {
                       if(answer === this.props.correctAnswer)
                       {
                           this.setState({color: "green",
                                          score: this.state.score +1
                           });
                           setTimeout(
                               function(){
                                   this.setState({color:"",
                                                  disabled: false});
                                   this.props.nextQuestion();
                               }.bind(this),1000
                           )
                       }
                       else{
                           this.setState({color: "red"})
                           setTimeout(
                               function(){
                                   this.setState({color:"",
                                                  disabled: false});
                                   this.props.nextQuestion();
                               }.bind(this),1000
                           )
                       }
                   }.bind(this),
                   1000
               );
    };

    render(){
        let answers =this.props.answers;
        return (
            <div>
                    {answers != null ?
                        <div>
                            <button className={"button " + this.state.color}
                                    onClick={((e) => this.checkCondition(e, answers.A))} disabled={this.state.disabled}>
                                {answers.A}
                            </button>
                            <button className={"button " + this.state.color}
                                    onClick={((e) => this.checkCondition(e, answers.B))} disabled={this.state.disabled}>
                                {answers.B}
                            </button>
                            <button className={"button " + this.state.color}
                                    onClick={((e) => this.checkCondition(e, answers.C))} disabled={this.state.disabled}>
                                {answers.C}
                            </button>
                            <button className={"button " + this.state.color}
                                    onClick={((e) => this.checkCondition(e, answers.D))} disabled={this.state.disabled}>
                                {answers.D}
                            </button>
                        </div>:
                        <div>
                            <h1 className={"questionId"}>
                                <h1>Score {this.state.score}</h1>
                            </h1>
                            <button class="returnButton" onClick={this.props.tryAgain}><img height="100px" src="./tryAgain.png"/></button>
                        </div>
                    }
            </div>
        );
    }
}

export default Answers;
