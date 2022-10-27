import axios from "axios";

const apiURL = "http://localhost:8000";
const token = window.localStorage.getItem("token")

export const getContacts =async()=>{
    return await axios.get(apiURL+"/contacts",{headers:{
        Authorization: token
    }});
}

export const getUser = async(id)=>{
    return await axios.get(apiURL+"/getUser",{headers:{id:id}});
}