import React from 'react';
import data from '../data/data.json';
import Track from './Track';

export default class Playlist extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playlist: 'vide'
        }
    }

    componentWillMount(){
        if(data.playlist.length != 0)  this.setState({playlist: data.playlist});
    }
    
    render() {
        if(this.state.playlist == 'vide'){
            return (
                <div>
                    <h3>La tracklist est vide</h3>
                    <p>Ajouter des titres depuis la recherche</p>
                </div>
                )
        }
        else {
            return (
                <div id='playlist'>
                    {this.state.playlist.map( e => (
                        <Track key={e.id} details={e}/>
                    ))}
                </div>
            )
        }
    }
}