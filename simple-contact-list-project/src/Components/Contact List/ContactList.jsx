import { useEffect } from "react";
import { useState } from "react";
import ContactCard from "../Contact Card/ContactCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Contact Card/ContactCard.css";

const ContactList = () =>{
    const [results, setResults] = useState([]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setResults(data.results)
        })
    },[])
    return(
        <>
            <div className="container card-container">
                {
                    results.map((result, index)=>{
                        return(
                            <ContactCard key = {index}
                            avatarUrl = {result.picture.large}
                            name = {result.name.first}
                            email = {result.email}
                            age = {result.dob.age}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
export default ContactList;