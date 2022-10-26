import axios from "axios";

const apiURL = "http://localhost:8000";

export const getContacts =async()=>{
    return await axios.get(apiURL+"/contacts",{headers:{
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTJhMGJkYjcyNzYzMjAwMmI5OTU0YiIsImlhdCI6MTY2NjY4NzEyMn0.dHzFmt_lzJKBSylrTEeRSBdGkJM4bs90_t-OyG0lj3g"
    }});
}