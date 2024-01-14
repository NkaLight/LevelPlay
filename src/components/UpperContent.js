import React from "react"

export default function UpperContent(props){


    function handleAddFriend(){
        if(!props.hasAccount){
            alert("You need to sign up to sign up to do this")
            return;
        }
        //code to handle adding a friend here
        props.openPopup()
        
    }
    function autoMatch(){
        //code here
    }





    return(
        <div className="upperContent">
            {!props.gameInitiated ? 

                <div>
                    <h1 className="upperContent--title">{ props.login?
                            "Welcome back to LevelPlay, Ready to play?" : "Welcome to LevelPlay, Ready to play "
                    }</h1>
                </div> :

                <div className="upperContent--gameplay">
                    <div className="upperContent-main-btn" onClick={handleAddFriend}>Add a friend</div>
                    <div className="upperContent-btns">
                        <div className="generic-black-btn" onClick={handleAddFriend}>FRIENDS</div>
                        <div className="generic-black-btn" onClick={autoMatch}>AUTOMATCH</div>  
                    </div>

                </div>

                }
            <hr className="upperContent--hr"/>
         </div>
    )
    
}