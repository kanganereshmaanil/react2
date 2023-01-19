import React, { Component } from 'react'
import './newStyles.css'

class FeedbackForm extends Component {


    state = {
        NameOfEmployee: "",
        Designation: "",
        Rating: "",
        arrayOfEmployess : []
    }

    Inputhandler = (e) => {
        
        this.setState({ [e.target.name]  : e.target.value})
        
        
    }


    SubmitHandler = (e) =>{
        e.preventDefault();
        const  MyEmployeeObject ={
            NameOfEmployee : this.state.NameOfEmployee,
            Designation : this.state.Designation,
            Rating : this.state.Rating
        }
        const newArray  =  this.state.arrayOfEmployess
       newArray.push(MyEmployeeObject)
       this.setState({arrayOfEmployess : newArray})
    }


   
    render() {
        // return this.form2

        return (
            <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form >
            <label htmlFor="NameOfEmployee" className='labelForInput'>Name : </label>
            <input type="text" name="NameOfEmployee" id="" value={this.state.NameOfEmployee} className='imputTagStyles' onChange={this.Inputhandler} />
            <br />
            <br />
            <label htmlFor="Designation" className='labelForInput'>Department  : </label>
            <input type="text" name="Designation" id="" value={this.state.Designation} className='imputTagStyles' onChange={this.Inputhandler} />
            <br />
            <br />
            <label htmlFor="Rating" className='labelForInput'> Rating : </label>
            <input type="number" name="Rating" id="" value={this.state.Rating} className='imputTagStyles' onChange={this.Inputhandler} />
            <br />
            <br />
            <input type="submit" value="Submit" className='submitagStyles' onClick={this.SubmitHandler} />


        </form>


        <div className='OuterDiv'>
            {
                this.state.arrayOfEmployess.map( (element , index ) => {
                    return ( <div className='innerElements'><h3> <span>Name : {element.NameOfEmployee } | Department :  {element.Designation} | Rating :  {element.Rating}</span></h3></div>)
                }  )
            }
        </div>
    </div>
        )

    }



}

export default FeedbackForm