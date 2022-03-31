import React from "react";

export default function WordDisplay(props) {
  if (props.wordinfo) {
    let audio = props.wordinfo[0].hwi.prs[0].sound.audio;
    let subdirectory = audio.slice(0, 1);
    let audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${audio}.mp3`;
    return (
      <div>
        <h1>{props.wordinfo[0].meta.id}</h1>
        <span>{props.wordinfo[0].hwi.prs[0].mw}</span>
      </div>
    );
  } else {
    return null;
  }
}
