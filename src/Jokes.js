import React, {Component} from "react";

class Jokes extends React.Component{

    constructor(){
        super()
        this.state =  {
            loading: null,
            count:1,
            data: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount(){
    //     setTimeout(()=>this.setState({
    //         count: "Time Out"
    //     }), 1500)
    // }

    handleClick(){
        this.setState((prevState) =>
            {return {
                loading: true,
                count: prevState.count,
                data: prevState.data
            }}
        )
        fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json()).then(data =>  
            this.setState(prevState => {
                return {
                    loading: false,
                    count: prevState.count + 1,
                    data: data}
            }
        ))
    }

    render(){
        return (<div>
            <p>Question: {this.props.question}</p>
            <p>Answer: {this.props.answer}</p>
            <p>State: {this.state.count}</p>
            <p>Status: {(!this.state.loading) ? (this.state.data != null) ? this.state.data.name : "Nothing to show" : "Loading"}</p>
            <button onClick={this.handleClick}>Show Data</button>
        </div>)
    }
}

export default Jokes