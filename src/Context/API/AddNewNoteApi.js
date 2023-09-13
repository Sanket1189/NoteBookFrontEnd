import { useState } from "react";
import axios from "axios";


export const AddNewNoteApi = () => {

    const [newNoteRes, setNewNoteRes] = useState(null);

    const setAddNewNote = (signupid) => {



        const data = {
            "signupid": signupid,
            "note": ""

        }

        const url = `https://localhost:7206/NoteApp/AddNote`;
        axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            setNewNoteRes(result.data);

        }).catch((error) => {
            console.log(error.message);
        })



    }


    return { setAddNewNote, newNoteRes }
}