import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import './NotePage.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiContext from '../Context/ApiContext';


export default function NotePage() {

    const apiState = useContext(ApiContext)

    const [notes, setNotes] = useState([]);
    const [curNote, setCurNote] = useState(null);
    const [curNoteData, setCurNoteData] = useState(null);
    const [userInformation, setUserInformation] = useState(null);
    const [orgUserName, setOrgUserName] = useState([]);
    const [userName, setUserName] = useState([]);



    useEffect(() => {
        if (apiState.newNoteRes !== null) {

            const data = {
                signupId: apiState.newNoteRes.response.data.signupId,
                noteId: apiState.newNoteRes.response.data.noteId,
                notes: apiState.newNoteRes.response.data.notes
            }
            setNotes([...notes, data])

        }

    }, [apiState.newNoteRes])


    const deleteNote = (noteId) => {

        const updatedNotes = notes.filter((note) => note.noteId !== noteId);

        setNotes(updatedNotes);
    };

    const onHandleChange = (index, newValue) => {
        const updatedNotes = [...notes];
        updatedNotes[index].notes = newValue;
        setNotes(updatedNotes);

    }
    const onHandleChangeUserName = (e) => {

        setUserName(e.target.value)
    }

    const upload = (noteId) => {
        first.current.click();
        setCurNote(noteId);
        const data = notes.filter((note) => note.noteId === noteId);

        setCurNoteData(data[0].notes)
    }

    const changeUserName = () => {
        second.current.click();
    }

    const first = useRef(null);
    const second = useRef(null);

    useEffect(() => {
        setNotes(apiState.noteData)
    }, [apiState.noteData])

    useEffect(() => {
        if (apiState.getUserInfo !== null) {

            setUserInformation(apiState.getUserInfo.response.data[0]);
            setOrgUserName(apiState.getUserInfo.response.data[0].userName)
            setUserName(apiState.getUserInfo.response.data[0].userName);

        }
    }, [apiState.getUserInfo])
    const updateUserName = (name) => {
        setOrgUserName(name);
    }




    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="np-outer">

                {(orgUserName) && <div className="np-username"> {orgUserName}  <i onClick={changeUserName} className="fa-solid fa-pen-to-square np-update-username"></i></div>}

                <Link to="/" className="btn btn-primary np-logout">Log out</Link>

                <h1 className="np-heading">NOTE APP</h1>
                <p className="np-info">Double click on a note to update or remove it . You must update Note ones .</p>
                <div className="np-app" id="app">
                    {notes && notes.map((note, index) => (
                        <div key={note.noteId} className="np-note-container">
                            <textarea
                                className="np-note"
                                placeholder="Empty note"
                                value={note.notes}
                                onChange={(e) => onHandleChange(index, e.target.value)}
                                onDoubleClick={() => { upload(note.noteId) }}
                            />

                        </div>
                    ))}



                    <button className="np-btn" id="btn" onClick={(e) => {

                        apiState.addNote(e, userInformation.signupId)
                    }}>+</button>
                </div>
            </div>

            <button ref={first} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden>

            </button>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content np-modal">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Hope You Are Enjoying  &#128515;</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Click save Changes to Update and Delete To Remove Note .
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={(e) => { apiState.updateNote(e, curNote, curNoteData) }}>Save changes</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={(e) => { deleteNote(curNote); apiState.deleteNote(e, curNote) }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* second */}
            <button ref={second} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" hidden>

            </button>

            <div className="modal fade " id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content np-modal">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel2">Hope You Are Enjoying  &#128515;</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input name="username" cols="30" className="form-control" maxLength={20} value={userName} placeholder="Enter User Name To Update" autoComplete="off" onChange={onHandleChangeUserName}></input>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => { apiState.updateUserName(e, userInformation.signupId, userName); updateUserName(userName) }}>Update User Name</button>


                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
