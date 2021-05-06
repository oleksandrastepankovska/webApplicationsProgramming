import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class LocalStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        throw new Error('Method not implemented.');
    }
    
    public addNote(note: Note): void {
    
    }

    public getNotes(): Note[] {
        let notesValues = <string>localStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValues);
        return notes;
    }
   
}