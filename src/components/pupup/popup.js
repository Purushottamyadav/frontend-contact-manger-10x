import axios from "axios";
import "./popup.css"
import { parse } from "papaparse"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUp =(props)=>{
    const [contact, setcontact] = useState([])
const navigate = useNavigate();
    const config = {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      };

    //   console.log(config)


      const postContacts = async (ContactsData) => {
        // console.log("contactData++", ContactsData);
        ContactsData.map(async (ele) => {
            await axios
                .post("http://localhost:8000/addContact", ele, config)

                .then((res) => console.log(res))
                .catch((err) => {
                    console.log(err.response.data.message)
                    console.log(err)

                })
        })
        props.close();
        alert("data added successfully")
        document.location.reload();
        navigate("/homePage");
    };

    if (!props.show) {
        return null
    }
    console.log(contact)

    return (
        <>
            <div id="drag-drop-box"
                onDragOver={(event) => {
                    event.preventDefault()


                }}
                onDrop={async (event) => {
                    event.preventDefault()
                    // console.log(event.dataTransfer.files)
                    Array.from(event.dataTransfer.files).map(async file => {
                        let text = await file.text("")

                        // console.log("text=",text)
                        let contactArr = parse(text, { header: true }).data

                        // console.log("contactArr",contactArr)

                        const arr = contactArr.filter((ele) => {
                            return (ele.name !== undefined)
                        })
                        console.log(arr)

                        arr.map(ele => {
                           
                            if (!ele === undefined) {
                                const obj = { "email": ele.email, "name": ele.name, "designation": ele.designation, "company": ele.company, "industry": ele.industry, "phone": ele.phone, "country": ele.country }
                                setcontact((contact) => [...contact, obj])
                                // postContacts(obj);
                            }

                        })
                        postContacts(arr);
                    })

                }}
            >
                <div id="pop-div">
                    <i className="fa fa-file fa-2x" aria-hidden="true"></i>
                    <h5>Import file!</h5>
                    <p>Drag and Drop file here...</p>
                    <button id="popup-btn" onClick={props.close}>cancel</button>
                </div>
            </div>

        </>
    )
}

export default PopUp