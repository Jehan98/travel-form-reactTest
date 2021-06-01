import React from "react";
import FormComponent from "./FormComponent";

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            destination: "Sri Lanka",
            vegetarian: false,
            kosher: false,
            lactoseFree:false
        }
        this.handleFormData = this.handleFormData.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFormData(event){
        const name = event.target.name
        const type = event.target.type
        // check box has no "value "
        type === "checkbox" ? this.setState({[name]: event.target.checked}) : this.setState({[name]: event.target.value})
        
    }

    handleSubmit(){
        const message = "Entered INFO:".concat(" Name: ",this.state.firstName," ",this.state.lastName," | Age: ",this.state.age," | Gender: ",this.state.gender," | Destination: ",this.state.destination," | Dietary Restrictions: ",this.state.vegetarian ? "Vegetarian " : "",this.state.kosher ? "Kosher " : "",this.state.lactoseFree ? "Lactose Free" : "")
        alert(message)
    }

    render(){
        return (
            <FormComponent handleFormData={this.handleFormData} handleSubmit={this.handleSubmit} data={this.state} />
            )
    }
}

export default Form