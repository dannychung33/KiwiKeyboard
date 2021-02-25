import React from 'react';
import "../App.css";
function VolumeSlider(){
    return(
        <div class="volume_slider">
          <span className="volume_label">Volume: </span>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.01"
            value="0.5"
            list="volumes"
            name="volume"
          />
          <datalist id="volumes">
            <option value="0.0" label="Mute"></option>
            <option value="1.0" label="100%"></option>
          </datalist>
        </div>
    )
}

export default VolumeSlider;