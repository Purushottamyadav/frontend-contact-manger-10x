import axios from "axios";

const apiURL = "http://localhost:8000";
const token = window.localStorage.getItem("token")

export const getContacts =async()=>{
    console.log(token);
    return await axios.get(apiURL+"/contacts",{headers:{
        Authorization: token
    }});
}