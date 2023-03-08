import React, { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";

// import TypeWriterEffect from 'react-typewriter-effect';

export const Para = (props) => {
  const [magicName, setMagicName] = useState(props.subject);

  const name = useTypewriter(magicName, {
    typeSpeed: 50,
    delayMs: 1000,
    eraseOnComplete: false,
  });

  return (
    <div className="">
      <p className={props.index}>{name}</p>
    </div>
  );
};
