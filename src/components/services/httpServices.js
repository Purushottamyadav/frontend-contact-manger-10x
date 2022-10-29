import axios from "axios";

const apiURL = "https://contact-manager-backend-api.herokuapp.com";
const token = window.localStorage.getItem("token")

export async function getContacts (){
    return await axios.get(apiURL+"/contacts",{headers:{
        Authorization: token
    }});
}

export const getUser = async(id)=>{
    return await axios.get(apiURL+"/getUser",{headers:{id:id}});
}