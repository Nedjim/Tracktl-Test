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
    
    orderByPriority(tmpList){

    }
    orderByVote(tmpList){ 
        return tmpList.sort((a, b) => b['votes'].count - a['votes'].count);
    }

    orderById(tmpList){
        return tmpList.sort((a, b) => a.id - b.id );
    }

    orderPlaylist(){
        let tmpList = this.state.data;

        tmpList = this.orderByVote(tmpList);

        console.log(tmpList);
        //  tmpList.map(e=>{
        //     console.log(e['votes'].count)
        // })
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