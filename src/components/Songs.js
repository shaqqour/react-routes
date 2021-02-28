import React from 'react';
import { songs } from '../data';

const Songs = () => {
    return (
        <div>
            <h1>Songs Page</h1>
            {songs.map((song, index) => (
                <div key={index}>
                    <h3>Name: {song.title}</h3>
                    <p>Genres:</p>
                    <ul>
                        {song.genres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Songs;