import React from 'react';
import data from '../data/data.json';
import Track from './Track';

export default class Playlist extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playlist: data.playlist
        }
    }

    render() {
        return (
            <div id='playlist'>
                {this.state.playlist.map( e => (
                    <Track key={e.id} details={e}/>
                ))}
            </div>
        )
    }
}