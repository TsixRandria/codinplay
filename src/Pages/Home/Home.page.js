import React from 'react';
import './Home.styles.scss';

const positions = {
    x: 20,
    y: 20
}

export default function Home() {
    const el = React.useRef(null);

    const deleteBlock = (event) => {
        // console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
        const newPosition = {
            x: positions.x - Math.log(event.clientX) * 2,
            y: positions.y + Math.log(event.clientY) * 2
        };
        console.log(`Mouse X: ${newPosition}`);
        if (el.current) {
            el.current.style.left = `${newPosition.x}px`;
            el.current.style.bottom = `${newPosition.y}px`;
        }
    }

    return (
        <div>
            <div
                onMouseMove={deleteBlock} 
                className="bg-black text-white relative" style={{width: '400px', height: '400px'}}>
                <div className="supertext" ref={el}>Block1</div>
            </div>


            <button
                onClick={deleteBlock}
                className="px-2 py-2 bg-blue-500 text-white">
                Click
            </button>
        </div>
    )
}
