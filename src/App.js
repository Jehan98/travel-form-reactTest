import React from "react";

class App extends React.Component{
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name: 
                    <input type="text" name="firstName" placeholder="Enter First Name" onChange={this.handleFormData}/>
                </label>
                <br />
                <br />
                <label>
                    Last Name: 
                    <input type="text" name="lastName" placeholder="Enter Last Name" onChange={this.handleFormData}/>
                </label>  
                <br />
                <br />
                <label>
                    Age: 
                    <input type="number" name="age" placeholder="Enter Age" onChange={this.handleFormData}/>
                </label>
                <br />
                <br />
                <label>
                    Gender,
                    <br/>
                    <label>
                        Male:
                        <input type="radio" name="gender" checked={this.state.gender === "male" ? true: false} value="male" onChange={this.handleFormData}/>
                    </label>
                    <br />
                    <label>
                        Female:
                        <input type="radio" name="gender" checked={this.state.gender === "female" ? true: false} value="female" onChange={this.handleFormData}/>
                    </label>
                </label>
                <br />
                <br />
                <label>
                    Destination:
                    <select name="destination" onChange={this.handleFormData}>
                        <option>Sri Lanka</option>
                        <option>India</option>
                        <option>China</option>
                    </select>
                </label>
                <br />
                <br />
                <label>
                    Dietary Restrictions,
                    <br />
                    <label>
                        Vegetarion:
                        <input type="checkbox" name="vegetarian" checked={this.state.vegetarian} onChange={this.handleFormData}/>
                    </label>
                    <br />
                    <label>
                        Kosher:
                        <input type="checkbox" name="kosher" checked={this.state.kosher} onChange={this.handleFormData}/>
                    </label>
                    <br />
                    <label>
                        Lactose Free:
                        <input type="checkbox" name="lactoseFree" checked={this.state.lactoseFree} onChange={this.handleFormData}/>
                    </label>
                </label>
                <br />
                <br />
                <input type="submit" name="submit" value = "submit"/>
            </form>
        )
       
    }

}

export default App