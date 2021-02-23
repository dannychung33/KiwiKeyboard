import './App.css';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from './SoundFontProvider';
import VolumeSlider from './components/VolumeSlider';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('a0'),
  last: MidiNumbers.fromNote('c8'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});


//https://github.com/kevinsqi/react-piano we used this one as the base
// we didn't use this one, but there is a tutorial for integrating with tone.js https://github.com/lillydinhle/react-piano-component  

function App() {
    const firstNote = MidiNumbers.fromNote('a0');
    const lastNote = MidiNumbers.fromNote('c8');
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });
   
    return (
      <div className="keyboard_case">
        <h2 className="piano_title">Kiwi Keys</h2>
        <VolumeSlider/>
      <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width={1800}
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
          keyboardShortcuts={keyboardShortcuts}
        />
      )}
    />
    
      </div>
  );
}

export default App;
