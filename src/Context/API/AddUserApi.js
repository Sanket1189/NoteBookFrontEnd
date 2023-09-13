import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiContext from "../ApiContext";







export const AddUserApi = () => {



    const [addNewUser, setRes] = useState(null);






    let history = useNavigate();

    const setAddNewUser = (info) => {





        if (info.password === info.conPassword) {

            const data = {
                "email": info.email,
                "password": info.password,
                "userName": info.userName
            }

            const url = `https://localhost:7206/NoteApp/AddUser`;
            axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                setRes(result.data);



            }).catch((error) => {
                console.log(error.message);
            })
        } else {


            toast.error("Password Do Not Match !!!");


        }


    }













    return { addNewUser, setAddNewUser };



}















