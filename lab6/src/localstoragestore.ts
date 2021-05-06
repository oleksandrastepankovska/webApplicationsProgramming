import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class LocalStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notesValue= <string>localStorage.getItem('notes');
        let oldNotes = <Note[]>JSON.parse(notesValue);
        let newNotes: Note[]=[];
        oldNotes.forEach((note) => {
            if(note.id!==id)
                newNotes.push(note)
        })
        localStorage.setItem('notes', JSON.stringify(newNotes));
    }
    
    public addNote(note: Note): void {
        let notesValues = <string>localStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValues);
        if(!notes)
            notes = [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    public getNotes(): Note[] {
        let notesValues = <string>localStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValues);
        return notes;
    }
   
}