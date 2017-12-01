import React from 'react';
import Playlist from './Playlist';
import data from '../data/data.json';

export default class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : 'vide',
            list : []
        }
    }

    componentWillMount(){
        if(data.playlist.length != 0)  {
            this.setState({data: data.playlist});
        }
    }
    
    orderById(tmpList){
        return tmpList.sort((a, b) => a.id - b.id );
    }

    orderByVote(tmpList){ 
        return tmpList.sort((a, b) => b['votes'].count - a['votes'].count);
    } 

    orderByPriority(tmpList){
        let priorityTrue;
        let priorityFalse;

        priorityTrue = tmpList.filter( e => e.priority == true);
        priorityFalse = tmpList.filter( e => e.priority == false);

        return priorityTrue.concat(priorityFalse);
    }

    orderPlaylist(){
        let tmpList = this.state.data;

        tmpList = this.orderById(tmpList);
        tmpList = this.orderByVote(tmpList);
        tmpList = this.orderByPriority(tmpList);

        console.log(tmpList)
    }

    render(){

        this.orderPlaylist();

        if(this.state.data == 'vide'){
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
                    <Playlist />
                </div>
            )
        }
    }
}