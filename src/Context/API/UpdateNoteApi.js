
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UpdateNoteApi = () => {

    const [updateNoteRes, setUpdatedNoteRes] = useState(null);
    const setNoteToUpdate = (noteId, UpdatedNote) => {

        const url = `https://localhost:7206/NoteApp/UpdateNote?id=${noteId}`;
        const data = {
            "note": UpdatedNote
        }
        axios.put(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            setUpdatedNoteRes(result.data);
        }).catch((error) => {
            console.log(error.message);
        })

    }
    useEffect(() => {

        if (updateNoteRes !== null) {
            if (updateNoteRes.response.success) {
                toast.success(updateNoteRes.response.message);
            }
        }

    }, [updateNoteRes])


    return { setNoteToUpdate }
}