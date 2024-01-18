import React from "react"
import eyeClose from "../assets/eyesAway.svg"
import eyeOpen from "../assets/eyesOn.svg"

export default function Form(props){


    const [formData, setFormData] = React.useState({
        userName:"",
        email:"",
        password:"",
        confirmPassWord:""
    })

    const [alert, showAlert] = React.useState(false)
    const [validPassword, setValidPassword] = React.useState(true)
    const [showPassword, setShowPassword] = React.useState(false)
    const [showImage, setShowImage] = React.useState(false)

  
    //functions handles logic to showpassword tect 
    function handleTogglePassword(){
        setShowPassword(prevState => !prevState)
    }
    function handleChange(event){
        setFormData(prevState =>{
            if(event.target.name === "confirmPassWord"){
                //dynamically rendering an alert as the user enter the confirmation password
                if(formData.password !== event.target.value && formData.confirmPassWord.length){
                    showAlert(true)
                }else{
                    showAlert(false)
                }
            }else if(event.target.name === "password"){
                //dynamically rendering an alert to prompt the user to use a strong password.
                if(event.target.value.length === 0){
                    setShowImage(false)
                }else{
                    setShowImage(true)
                }
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
                if(!passwordRegex.test(event.target.value) && event.target.value.length > 0){
                    setValidPassword(false)
                }else{
                    setValidPassword(true)
                }
            }
            else{
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
                    maxLength={50}
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
                        maxLength={250}
                    />
                 }
                <div className="form-password-container">
                <input
                type={showPassword ? "text" : "password" }
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="form--input"
                placeholder="Password"
                maxLength={100}
                />
                {showImage && <img type="form-password-btn" alt="" onClick={handleTogglePassword} src={showPassword ? eyeOpen : eyeClose}/>}
                </div>

                {!validPassword && <p className="form--alert">Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, a digit, and a special character.</p>}
                 {!props.login &&
                    <input
                        type="password"
                        name="confirmPassWord"
                        id="confirmPassWord"
                        value={formData.confirmPassWord}
                        onChange={handleChange}
                        className="form--input"
                        placeholder="Confirm password"
                        maxLength={100}
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