import React, {useState} from 'react';
import NoteContext from './noteContext';


const NoteState = (props) => {
  const allNotes = [{ "_id": "6439553c3ec52f953b6afbfc", "user": "6409bbfc7ead50f6a847023a", "title": "First note", "description": "First note", "tag": "note", "date": "2023-04-14T13:29:32.204Z", "__v": 0 }, { "_id": "643955673ec52f953b6afbfe", "user": "6409bbfc7ead50f6a847023a", "title": "Javascript", "description": "I have Completed it", "tag": "Language", "date": "2023-04-14T13:30:15.681Z", "__v": 0 }, { "_id": "6439559f3ec52f953b6afc00", "user": "6409bbfc7ead50f6a847023a", "title": "Exam", "description": "it is starting from 29th may", "tag": "Exam", "date": "2023-04-14T13:31:11.269Z", "__v": 0 }]
  const [notes, setNotes] = useState(allNotes);

  return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;