import React, { useEffect, useRef } from 'react';
import './RotatingSphere.css';

const RotatingSphere = () => {
    const sphereRef = useRef(null);

    useEffect(() => {
        const sphere = sphereRef.current;
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const onMouseMove = (event) => {
            if (!isDragging) return;

            const deltaMove = {
                x: event.clientX - previousMousePosition.x,
                y: event.clientY - previousMousePosition.y
            };

            const rotation = `rotateX(${deltaMove.y}deg) rotateY(${deltaMove.x}deg)`;
            sphere.style.transform = rotation;

            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        };

        const onMouseDown = (event) => {
            isDragging = true;
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        };

        const onMouseUp = () => {
            isDragging = false;
        };

        sphere.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            sphere.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return <div className="rotating-sphere" ref={sphereRef}></div>;
};

export default RotatingSphere;