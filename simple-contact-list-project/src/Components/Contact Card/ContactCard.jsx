import "../Contact Card/ContactCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const ContactCard = (props) =>{
    const [showAge, setShowAge] = useState(false);
    return(
        <>
            <div className="contactcard-container">
                <img src={props.avatarUrl} alt="large" />
                <div>
                    <p>Name: {props.name}</p>
                    <p>Email: {props.email}</p>
                    <button onClick={()=>setShowAge(!showAge)}>Show Age</button>
                    { showAge && <p>Age: {props.age}</p>}
                </div>
            </div>
        </>
    )
}
export default ContactCard;