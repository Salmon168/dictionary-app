import React from "react";

export default function WordDisplay(props) {
  if (props.wordinfo) {
    return <div>Hallo from word</div>;
  } else {
    return null;
  }
}
