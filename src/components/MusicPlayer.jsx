import React, { useState } from 'react';

export default function MusicPlayer({ music }) {
    const [playing, setPlaying] = useState(0);

    // Check if music array is empty or playing index is out of bounds
    if (!music || music.length === 0 || playing >= music.length) {
        return <p>No music available</p>;
    }
    const musicclass = 'music-player ' + music[playing].id;
    return (
        <div className={musicclass}>
            <p>{music[playing].name}</p>
        </div>
    );
}
