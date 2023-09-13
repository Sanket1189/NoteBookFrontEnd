import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








export const GetUserApi = () => {



    const [getUserInfo, setRes] = useState(null);
    const [getNoteResponse, setGetNoteResponse] = useState(null);
    const [noteData, setNoteData] = useState([]);
    const [flag, setFlag] = useState(false);


    let history = useNavigate();

    const setGetUserInfo = (info, bool) => {
        setFlag(bool);
        try {

            const data = {

                "email": info.email,
                "password": info.password

            }
            const url = `https://localhost:7206/NoteApp/GetUser`;
            axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                setRes(result.data);
            }).catch((error) => {
                console.log(error.message);
            })



        } catch (ex) {

            toast.error("error");

        }

    }





    const getNotes = (id) => {

        try {


            const url = `https://localhost:7206/NoteApp/GetNotes?id=${id}`;
            axios.get(url).then((result) => {
                setGetNoteResponse(result.data);
            }).catch((error) => {
                console.log(error.message);
            })



        } catch (ex) {

            toast.error("error");

        }

    }





    useEffect(() => {


        if (getUserInfo !== null) {


            if (getUserInfo.response.success) {

                history('/notepage');


                if (flag === true) {

                    toast.success(getUserInfo.response.message);
                } else {
                    toast.success("Sign Up Successful");
                }

                getNotes(getUserInfo.response.data[0].signupId);



            } else {
                toast.error(getUserInfo.response.message);
            }
        }



    }, [getUserInfo])




    useEffect(() => {


        if (getNoteResponse !== null) {



            setNoteData(getNoteResponse.response.data)


        }



    }, [getNoteResponse])







    return { getUserInfo, setGetUserInfo, noteData };
}