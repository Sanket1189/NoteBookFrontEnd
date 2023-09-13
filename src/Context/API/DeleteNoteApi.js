import { useState, useEffect } from "react";
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const DeleteNoteApi = () => {

    const [deletedNoteRes, setDeletedNoteRes] = useState(null);

    const setNoteToDelete = (signupid) => {
        const url = `https://localhost:7206/NoteApp/DeleteNote?id=${signupid}`;
        axios.delete(url).then((result) => {
            setDeletedNoteRes(result.data);
        }).catch((error) => {
            console.log(error.message);
        })

    }

    useEffect(() => {
        if (deletedNoteRes !== null) {
            if (deletedNoteRes.response.success) {
                toast.success(deletedNoteRes.response.message);
            }
        }
    }, [deletedNoteRes])

    return { setNoteToDelete }
}


