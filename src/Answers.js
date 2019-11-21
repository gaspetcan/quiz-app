import React from 'react';

class Answers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            score: 0,
        }
    }

    checkCondition = (e, answer) =>{
               this.setState({
                   color: "yellow"
               });
               setTimeout(
                   function() {
                       if(answer === this.props.correctAnswer)
                       {
                           this.setState({color: "green",
                                          score: this.state.score +1});
                           setTimeout(
                               function(){
                                   this.setState({color:""});
                                   this.props.nextQuestion();
                               }.bind(this),1000
                           )
                       }
                       else{
                           this.setState({color: "red"})
                           setTimeout(
                               function(){
                                   this.setState({color:""});
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
                                    onClick={((e) => this.checkCondition(e, answers.A))}>
                                {answers.A}
                            </button>
                            <button className={"button " + this.state.color}
                                    onClick={((e) => this.checkCondition(e, answers.B))}>
                                {answers.B}
                            </button>
                            <button className={"button " + this.state.color}
                                    onClick={((e) => this.checkCondition(e, answers.C))}>
                                {answers.C}
                            </button>
                            <button className={"button " + this.state.color}
                                    onClick={((e) => this.checkCondition(e, answers.D))}>
                                {answers.D}
                            </button>
                        </div>:
                            <h1 className={"questionId"}>
                                <h1>Score {this.state.score}</h1>
                            </h1>
                    }
            </div>
        );
    }
}

export default Answers;
