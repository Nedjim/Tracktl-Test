import React from 'react';
import Track from './Track';

const Playlist = (props) => (
    <div id='playlist'>
        {props.playlist.map( e => (
            <Track key={e.id} details={e}/>
        ))}
    </div>
);

export default Playlist;
