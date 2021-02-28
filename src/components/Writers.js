import React from 'react';
import { writers } from '../data';

const Writers = () => {
    return (
        <div>
            <h1>Writers Page</h1>
            {writers.map((writers, index) => (
                <div key={index}>
                    <h3>Name: {writers.name}</h3>
                    <p>Songs:</p>
                    <ul>
                        {writers.songs.map((song, index) => (
                            <li key={index}>{song}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Writers