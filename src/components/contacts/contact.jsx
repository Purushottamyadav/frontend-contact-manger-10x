import "./contact.css";
import { getContacts } from "../services/httpServices";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import PopUp from "../pupup/popup";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        search: state,
    };
};

const Contact = (props) => {
    const [state, setState] = useState([]);
    const [state1, setState1] = useState([]);
    const [popup,setpopup]= useState(false);
    const [selectoption,setSelectOption] = useState([]);
    const navigate = useNavigate();
    const config = {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      };

    useEffect(() => {
        console.log(123);
        // getContacts().then(res => {
        //     console.log(res);
        //     setState(res.data.records);
        // }).catch((err)=>{
        //     console.log(err);
        // });
        async function get(){
        await axios.get("https://contact-manager-backend-api.herokuapp.com/contacts",config).then(res=>{
            setState(res.data.records);
        })
    }
    get();
            setState1(state.filter((ele) => {
                return ele.email.toLowerCase().includes(props.search)
            }));
        console.log("state1", state1);
        console.log(selectoption);
    }, [props.search])

    const todelete=(e,id)=>{
        e.preventDefault();
     axios.delete(`https://contact-manager-backend-api.herokuapp.com/delete/${id}`,config)
        .then((res)=>{
            document.location.reload();
            navigate("/homePage");
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <>
        <PopUp show={popup} close={()=>setpopup(false)}/>
       
        <span id="body-contact">
            <div id="body-contact-header">
                <div id="calender">
                    <div id="date-logo"></div>
                    <div id="date-txt">Select Date</div>
                </div>
                <div id="filter">
                    <div id="filter-logo"></div>
                    <span id="filter-txt">Filter</span>
                </div>

                <span id="export">
                    <span id="export-logo"></span>
                    <span>Export</span>
                </span>

                <span id="import" onClick={()=>setpopup(true)}>
                    <span id="import-logo"></span>
                    <span>Import</span>
                </span>

                <span id="delete-span">
                    <span id="delete-logo"></span>
                    <span>Delete</span>
                </span>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                    <input id="check-box" type="checkbox"/>
                            Name
                        </th>
                        <th>
                            Designation
                        </th>
                        <th>
                            Company
                        </th>
                        <th>
                            Industry
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            country
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                {
                    props.search.length === 0 && state.length>0 &&
                    <tbody>
                        {
                            state.map((ele => {
                                return (
                                    <tr key={ele._id}>
                                        <td>
                    <input name="getitem" value={ele._id} type="checkbox"
                    onChange={(event)=>setSelectOption(...selectoption,(event.target.value))}/>

                                            {ele.name}
                                        </td>
                                        <td>
                                            {ele.designation}
                                        </td>
                                        <td>
                                            {ele.company}
                                        </td>
                                        <td>
                                            {ele.industry}
                                        </td>
                                        <td className="mailid">
                                            {ele.email}
                                            <span className="tooltip">{ele.email}</span>
                                        </td>
                                        <td>
                                            {ele.phone}
                                        </td>
                                        <td>
                                            {ele.country}
                                        </td>
                                        <td>
                                        <div className="content">
                                        <button id="contact-edit-btn"><i id="edit" className="fa fa-pencil" aria-hidden="true"></i></button>
                            <button id="contact-delete-btn" onClick={(e) => todelete(e,ele._id)}><i id="delete" className="fa fa-trash-o" aria-hidden="true"></i></button>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            }))
                        }
                    </tbody>

                }
                {
                    props.search.length > 0 &&
                    <tbody>
                        {
                            // state.filter((ele)=>{
                            //     return ele.email.toLowerCase().includes(props.search)
                            // })
                            state1.map((ele => {
                                return (
                                    <tr key={ele._id}>
                                        <td>
                    <input name="getitem" value={ele._id} type="checkbox"
                    onChange={(event)=>setSelectOption(...state,event.target.value)}/>
                                            {ele.name}
                                        </td>
                                        <td>
                                            {ele.designation}
                                        </td>
                                        <td>
                                            {ele.company}
                                        </td>
                                        <td>
                                            {ele.industry}
                                        </td>
                                        <td className="mailid">
                                            {ele.email}
                                            <span className="tooltip">{ele.email}</span>
                                        </td>
                                        <td>
                                            {ele.phone}
                                        </td>
                                        <td>
                                            {ele.country}
                                        </td>
                                        <td id="contact-box">
                                        <div className="content">
                                        <button id="contact-edit-btn"><i id="edit" className="fa fa-pencil" aria-hidden="true"></i></button>
                            <button id="contact-delete-btn" onClick={(e) => todelete(e,ele._id)}><i id="delete" className="fa fa-trash-o" aria-hidden="true"></i></button>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            }))
                        }
                    </tbody>

                }
            </table>
        </span>

        </>
    );
}

export default connect(mapStateToProps, null)(Contact)