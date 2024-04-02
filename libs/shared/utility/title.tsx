import React from 'react';
import ReactDOM from 'react-dom';
interface TitleProps {
  text: string;
}
// This one has an implicit return
export const Title = (props: TitleProps) => (
  <h1 className="title">{props.text}</h1>
);

// Doesn't have to be ES6 if you don't want
function Copy() {
  return (
    <p>
      Jaguar shark! So tell me - does it really exist? Checkmate... Eventually,
      you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your
      scientists were so preoccupied with whether or not they could, they didn't
      stop to think if they should.
    </p>
  );
}

export default Copy;
