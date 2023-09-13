import React from 'react'
import NoteContext from './NoteContext'


export default function NoteState(props) {

    const firstPage = 'sanket';
    return (
        <NoteContext.Provider value={{ firstPage }}>
            {props.children}
        </NoteContext.Provider>

    )
}
