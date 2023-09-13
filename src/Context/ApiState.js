import React, { useEffect, useState } from 'react'
import ApiContext from './ApiContext'
import 'react-toastify/dist/ReactToastify.css';
import { AddUserApi } from '../Context/API/AddUserApi';
import { GetUserApi } from '../Context/API/GetUserApi';
import { AddNewNoteApi } from '../Context/API/AddNewNoteApi';
import { DeleteNoteApi } from '../Context/API/DeleteNoteApi';
import { UpdateNoteApi } from '../Context/API/UpdateNoteApi';
import { UpdateUserNameApi } from '../Context/API/UpdateUserNameApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


export default function ApiState(props) {





    const { addNewUser, setAddNewUser } = AddUserApi();

    const addUserApi = (e, info) => {
        e.preventDefault();

        try {
            setAddNewUser(info);

        } catch (error) {
            console.log(error.message);
        }

    }




    const { getUserInfo, setGetUserInfo, noteData } = GetUserApi();

    const getUser = (e, info) => {

        e.preventDefault();
        try {
            setGetUserInfo(info, true);

        } catch (error) {
            console.log(error.message);
        }

    }

    const { newNoteRes, setAddNewNote } = AddNewNoteApi();
    const addNote = (e, signupid) => {

        e.preventDefault();
        try {
            setAddNewNote(signupid);

        } catch (error) {
            console.log(error.message);
        }

    }

    const { setNoteToDelete } = DeleteNoteApi();
    const deleteNote = (e, signupid) => {

        e.preventDefault();
        try {
            setNoteToDelete(signupid);

        } catch (error) {
            console.log(error.message);
        }

    }


    const { setNoteToUpdate } = UpdateNoteApi();
    const updateNote = (e, noteId, note) => {

        e.preventDefault();
        try {
            setNoteToUpdate(noteId, note);

        } catch (error) {
            console.log(error.message);
        }

    }


    const { setUserNameToUpdate } = UpdateUserNameApi();
    const updateUserName = (e, signupid, username) => {

        e.preventDefault();
        try {
            setUserNameToUpdate(signupid, username);

        } catch (error) {
            console.log(error.message);
        }

    }












    useEffect(() => {

        if (addNewUser !== null) {
            if (addNewUser.response.success === true) {

                try {
                    setGetUserInfo(addNewUser.response.data, false);

                } catch (error) {
                    console.log(error.message);
                }

            } else {
                toast.error(addNewUser.response.message);
            }
        }

    }, [addNewUser])







    return (
        <ApiContext.Provider value={{ addUserApi, addNewUser, getUser, noteData, getUserInfo, addNote, newNoteRes, deleteNote, updateNote, updateUserName, }}>

            {props.children}
        </ApiContext.Provider>
    )
}
