import "./contact.css";
import { getContacts } from "../services/httpServices";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const mapStateToProps = (state) => {
    return {
        search: state,
    };
};

const Contact = (props) => {
    const [state, setState] = useState([]);
    const [state1, setState1] = useState([]);

    useEffect(() => {
        getContacts().then(res => {
            setState(res.data.records);
        })
            setState1(state.filter((ele) => {
                return ele.email.toLowerCase().includes(props.search)
            }));
        console.log("state1", state1);
    }, [props.search])

    return (
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

                <span id="import">
                    <span id="import-logo"></span>
                    <span>Import</span>
                </span>

                <span id="delete">
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
                    props.search.length === 0 &&
                    <tbody>
                        {
                            state.map((ele => {
                                return (
                                    <tr>
                                        <td>
                    <input id="check-box" type="checkbox"/>

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
                                        <td>
                                            {ele.email}
                                        </td>
                                        <td>
                                            {ele.phone}
                                        </td>
                                        <td>
                                            {ele.country}
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
                                    <tr>
                                        <td>
                    <input id="check-box" type="checkbox"/>
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
                                        <td>
                                            {ele.email}
                                        </td>
                                        <td>
                                            {ele.phone}
                                        </td>
                                        <td>
                                            {ele.country}
                                        </td>
                                    </tr>
                                )
                            }))
                        }
                    </tbody>

                }
            </table>
        </span>


    );
}

export default connect(mapStateToProps, null)(Contact)