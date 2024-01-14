import React from "react";

export default function Footer(){


    function ContactUs(){
        const email = "exampleEmail@exampleDomain.com"
        const mailToLink = `mailto:${email}`

        //Open the users email client to mail to link
        window.location.href = mailToLink
    }
    function handleInstaLink(){
        const instagramUsername = `levelplay.friends`;
        const instagramProfileURL = `https://www.instagram.com/${instagramUsername}` ;

        //Open the user's Instagram 
        window.location.href = instagramProfileURL
    }
    function viewPrivacyPolicyPDF(){
        const pdfURL = "https://google.com.pdf"
        window.location.hfref = pdfURL
    }
    return(
        <div className="footer">
            <h2 className="footer--title">LevelPlay</h2>
            <p className="footer--copy">Copyright &copy; 2023 LevelPlay.</p>
            <p className="footer--contents" onClick={ContactUs}>Contact us</p>
            <p className="footer--contents" onClick={viewPrivacyPolicyPDF}>Privacy Policy</p>
            <p className="footer--contents" onClick={handleInstaLink}>Instagram</p>
        </div>
    )
}