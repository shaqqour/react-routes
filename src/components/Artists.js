import React from 'react';
import { artists } from '../data';
const Artists = () => {
    return (
        <div>
            <h1>Artists Page</h1>
            {artists.map((artist, index) => (
                <div key={index}>
                    <h3>Name: {artist.name}</h3>
                    <p>Songs:</p>
                    <ul>
                        {artist.songs.map((song, index) => (
                            <li key={index}>{song}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
export default Artists;