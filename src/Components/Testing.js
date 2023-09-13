import React, { useRef, useState } from 'react';


const Testing = () => {
    const countries = [
        { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
        { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
        { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
    ];
    const [text, setText] = useState("");
    const display = () => {
        console.log(text);
    }
    const first = useRef(0);


    const onHandleChange = (e) => {
        setText(e.target.value)
        first.current = first.current + 1;

    }

    return (
        <>


            <input type="text" onBlur={display} value={text} onChange={onHandleChange} />
            <button>Submit</button>
            <div>{first.current}</div>
        </>
    )
}

export default Testing;
