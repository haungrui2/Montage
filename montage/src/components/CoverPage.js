/* this is the cover page, including the date, poster, and a recommendation comment */
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import "./style/coverPage.css"
export default function CoverPage() {
    const [dateTime, setDateTime] = useState(new Date());
    const profileData = useSelector(state => state.others.profile.data);
    useEffect(() => {setDateTime(new Date());}, []);

    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let date = dateTime.getDate();
    let day = weekday[dateTime.getDay()];


    return (
        
        <div className = "CoverPage">
            <div className = "CoverPageDateContainer">
                <div id = "Year">{year}</div>
                <div id = "Month">{month}</div>
                <div id = "Date">{date}</div>
                <div id = "Day">{day}</div>
            </div>
            <img className = "CoverPagePoster" src={ require('../images/poster2.png') } alt="poster2"/>
            <div className = "CoverPageCommentContainer">
                <p id = "CoverPageComment1">Einmal ist Keinmal</p>
                <p id = "CoverPageComment2"></p>
            </div>
        </div>
    )
}