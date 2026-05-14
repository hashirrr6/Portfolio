import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <TypeAnimation
        sequence={[
          'Software Developer',
          2000,
          'MERN Stack Developer',
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        speed={50}
        deletionSpeed={60}
      />
    </div>
  )
}

export default Typed
