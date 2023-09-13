import { useState } from "react";

export const Testing = () => {
    const [seem, setData] = useState('');

    const updateData = (newData) => {
        setData(newData);
    };

    return { seem, updateData };
};





