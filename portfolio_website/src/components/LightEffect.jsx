import React, { useState, useEffect } from 'react';
import '../styles/lightEffect.css';

const LightEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [drops, setDrops] = useState([]);

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        setPosition({ x: touch.clientX, y: touch.clientY });
    };

    const handleClick = (e) => {
        const randomBit = Math.random() < 0.5 ? '0' : '1'; // Randomly pick 0 or 1
        const newDrop = { id: Date.now(), x: e.clientX, y: e.clientY, bit: randomBit };
        setDrops((prev) => [...prev, newDrop]);

        // Remove the number after animation finishes
        setTimeout(() => {
            setDrops((prev) => prev.filter((drop) => drop.id !== newDrop.id));
        }, 1500); // Match your CSS animation time
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="light-container">
            {/* Glowing star that follows mouse */}
            <div
                className="glow-star"
                style={{ left: position.x - 15, top: position.y - 15 }}
            ></div>

            {/* Falling 0s and 1s */}
            {drops.map((drop) => (
                <div
                    key={drop.id}
                    className="falling-number"
                    style={{ left: drop.x - 10, top: drop.y - 10 }}
                >
                    {drop.bit}
                </div>
            ))}
        </div>
    );
};

export default LightEffect;
