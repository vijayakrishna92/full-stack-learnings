import React, { useState } from 'react';
import '../styles/lightEffect.css';

const LightEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      console.log('Mouse position:', e.clientX, e.clientY);
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
    };

    return (
        <div className="light-container" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
            <div
                className="light"
                style={{ left: position.x - 24, top: position.y - 24 }}
            ></div>
        </div>
    );
};

export default LightEffect;
