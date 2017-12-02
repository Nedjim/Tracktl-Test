import React from 'react';
import Playlist from './Playlist';
import data from '../data/data.json';

export default class Container extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playlist : 'vide'
        }
    }

    componentWillMount(){
        if(data.playlist.length != 0)  {
            this.setState({playlist: data.playlist});
        }
    }

    componentDidMount(){
        this.orderPlaylist();
    }

    orderByPriority(tmpList){
        let priorityTrue;
        let priorityFalse;

        priorityTrue = tmpList.filter( e => e.priority == true);
        priorityFalse = tmpList.filter( e => e.priority == false);

        return [...priorityTrue, ...priorityFalse];
    }

    orderPlaylist(){
        let tmpList = this.state.playlist;

        tmpList = tmpList.sort((a, b) => a.id - b.id );
        tmpList = tmpList.sort((a, b) => b['votes'].count - a['votes'].count);
        tmpList = this.orderByPriority(tmpList);

        this.setState({ playlist: tmpList});
    }

    updateLike(id){
        console.log(id);
    }

    render(){

        if(this.state.playlit == 'vide'){
            return (
                <div>
                    <h3>La tracklist est vide</h3>
                    <p>Ajouter des titres depuis la recherche</p>
                </div>
                )
        }
        else {
            return (
                <div>
                    <Playlist playlist={this.state.playlist} updateLike={this.updateLike}/>
                </div>
            )
        }
    }
}