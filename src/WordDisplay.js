import React, { useState } from "react";
import { Howl } from "howler";

export default function WordDisplay(props) {
  let [play, setPlay] = useState(null);
  if (props.wordinfo) {
    let audio = props.wordinfo[0].hwi.prs[0].sound.audio;
    let subdirectory = audio.slice(0, 1);
    let audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${audio}.mp3`;

    function playAudio(event) {
      event.preventDefault();
      var sound = new Howl({
        src: [audioUrl],
        html5: true,
      });

      sound.play();
    }

    return (
      <div classsName="WordDisplay">
        <h1>{props.wordinfo[0].meta.id}</h1>
        <span>{props.wordinfo[0].hwi.prs[0].mw}</span>
        <div>
          <button onClick={playAudio}>🔉</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
