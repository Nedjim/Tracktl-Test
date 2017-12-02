import React from 'react';
import Track from './Track';

export default class Playlist extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playlist: props.playlist,  
        }
    }

    getId(id){
        this.props.updateLike(id);
    }

    render() {
        console.log('Playlist component')
        console.log(this.state)
        return (
            <div id='playlist'>
                {this.state.playlist.map( e => (
                    <Track key={e.id} details={e} getId={this.getId.bind(this)}/>
                ))}
            </div>
        )
    }
}
