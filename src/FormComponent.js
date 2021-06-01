
function FormComponent(props){

    return (<form onSubmit={props.handleSubmit}>
                <label>
                    First Name: 
                    <input type="text" name="firstName" placeholder="Enter First Name" onChange={props.data.handleFormData}/>
                </label>
                <br />
                <br />
                <label>
                    Last Name: 
                    <input type="text" name="lastName" placeholder="Enter Last Name" onChange={props.data.handleFormData}/>
                </label>  
                <br />
                <br />
                <label>
                    Age: 
                    <input type="number" name="age" placeholder="Enter Age" onChange={props.data.handleFormData}/>
                </label>
                <br />
                <br />
                <label>
                    Gender,
                    <br/>
                    <label>
                        Male:
                        <input type="radio" name="gender" checked={props.data.gender === "male" ? true: false} value="male" onChange={props.handleFormData}/>
                    </label>
                    <br />
                    <label>
                        Female:
                        <input type="radio" name="gender" checked={props.data.gender === "female" ? true: false} value="female" onChange={props.handleFormData}/>
                    </label>
                </label>
                <br />
                <br />
                <label>
                    Destination:
                    <select name="destination" onChange={props.handleFormData}>
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
                        <input type="checkbox" name="vegetarian" checked={props.data.vegetarian} onChange={props.handleFormData}/>
                    </label>
                    <br />
                    <label>
                        Kosher:
                        <input type="checkbox" name="kosher" checked={props.data.kosher} onChange={props.handleFormData}/>
                    </label>
                    <br />
                    <label>
                        Lactose Free:
                        <input type="checkbox" name="lactoseFree" checked={props.data.lactoseFree} onChange={props.handleFormData}/>
                    </label>
                </label>
                <br />
                <br />
                <input type="submit" name="submit" value = "submit"/>
            </form>
            )
    }

export default FormComponent