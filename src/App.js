import './App.css';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import Drumpad from './components/Drumpad'

//https://github.com/kevinsqi/react-piano we used this one as the base
// we didn't use this one, but there is a tutorial for integrating with tone.js https://github.com/lillydinhle/react-piano-component  

function App() {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });
   
    return (
      <div>
        <Drumpad/>
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          playNote={(midiNumber) => {
            // Play a given note - see notes below
          }}
          stopNote={(midiNumber) => {
            // Stop playing a given note - see notes below
          }}
          width={1000}
          keyboardShortcuts={keyboardShortcuts}
        />
      </div>
  );
}

export default App;
