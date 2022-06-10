/* this is the cover page, including the date, poster, and a recommendation comment */
import { useState, useEffect } from "react";
export default function CoverPage() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {setDateTime(new Date());}, []);

    return (
        
        <div class = "CoverPage">
            <div>The date is: {dateTime.toString()}</div>
        </div>
    )
}