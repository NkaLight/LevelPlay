import React from "react"

export default function Friends(props){
        const styles = {
            listStyle: `none`,
            fontSize: "x-large",
            marginRight:"25px",
            paddingBottom: "50px",
            textAlign:"left"
        }

    return(
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={props.closePopup}>
          &times;
        </span>
        <h2 className="popup-title">FRIENDS</h2>
        <ul style={styles} className="list">
            <li>Friend 1</li>
            <li>Friend 2</li>
            <li>Friend 3</li>
            <li>Friend 4</li>
        </ul>
        <hr className="upperContent--hr"/>
        <h2 className="popup-title">TOURNAMENT</h2>
        <p className="Friends--automatch">AutoMatch</p>
        <ul style={styles} className="list">
            <li>Friend 1</li>
            <li>Friend 2</li>
            <li>Friend 3</li>
            <li>Friend 4</li>
        </ul>
      </div>
    </div>
  );
}