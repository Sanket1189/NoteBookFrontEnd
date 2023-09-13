import axios from "axios"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UpdateUserNameApi = () => {

    const [UpdatedUserNameRes, setUpdatedUserNameRes] = useState(null);
    const setUserNameToUpdate = (signupid, username) => {
        const url = `https://localhost:7206/NoteApp/UpdateUserName?id=${signupid}&userName=${username}`;
        axios.put(url).then((result) => {
            setUpdatedUserNameRes(result.data);
        }).catch((error) => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        if (UpdatedUserNameRes !== null) {
            if (UpdatedUserNameRes.response.success) {
                toast.success(UpdatedUserNameRes.response.message);
            } else {
                toast.error(UpdatedUserNameRes.response.message);
            }
        }

    }, [UpdatedUserNameRes])


    return { setUserNameToUpdate }

}