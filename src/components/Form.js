import React from "react";

export default function Form(props){


    const [formData, setFormData] = React.useState({
        userName:"",
        email:"",
        password:"",
        confirmPassWord:""
    })

    const [alert, showAlert] = React.useState(false)

  


    function handleChange(event){
        setFormData(prevState =>{
            if(event.target.name === "confirmPassWord"){
                //dynamically rendering an alert as the user enter the confirmation password
                if(formData.password !== event.target.value && formData.confirmPassWord.length){
                    showAlert(true)
                }else{
                    showAlert(false)
                }
            }else{
                showAlert(false)
            }
            return{
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.confirmPassWord && formData.password.length && formData.userName.length && formData.email){
            //pushing the data to the API
            showAlert(false)
            props.updateAccount(true) //updating the parent state through props.
            props.updateGameInitiated()
            //and run more functions here
        }
    }

    function handleContinueAsGuest(){
        props.updateGameInitiated()
    }
   

    return(
        <form className="form">
                <input
                    type="text"
                    name= "userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="form--input"
                    placeholder={props.login ? "Username" : "Create username"}
                />
                 {!props.login && 
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form--input"
                        placeholder="Email"
                    />
                 }
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form--input"
                    placeholder="Password"
                /> 
                 
                 {!props.login &&
                    <input
                        type="password"
                        name="confirmPassWord"
                        id="confirmPassWord"
                        value={formData.confirmPassWord}
                        onChange={handleChange}
                        className="form--input"
                        placeholder="Confirm password"
                    />
                 }
                <br/>
                {alert && <strong className="form--alert">passwords dont match</strong>}
                <br/>
                <br/>
                
                <div className="form--submit" type ="submit" onClick={handleSubmit}>SUBMIT</div>
                {!props.login && <div className="genric-btn" onClick={handleContinueAsGuest} >Continue As guest</div>}
                
           </form>
    )




}