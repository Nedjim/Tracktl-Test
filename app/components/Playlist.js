import React from 'react';
import Track from './Track';
import data from '../data/data.json';

export default class Container extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playlist : 'vide',
            firstSound : null
        }
    }

    componentWillMount(){
        if(data.playlist.length != 0)  {
            this.setState({
                playlist: data.playlist
            });
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

        this.setState({ 
            playlist: tmpList,
            firstSound: tmpList[0].id
        });
    }

    updateLike(id){
        let tmpList = this.state.playlist;

        tmpList.map( e => {
            if(e.id == id) {
                e['votes'].count = e['votes'].count + 1;
                e['votes'].userVoted = true;
            }
        })
        
        this.setState({ 
            playlist: tmpList,
        });
        
        this.orderPlaylist();
    }

    render(){
        //console.log(this.state)
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
                <div id='playlist'>
                    {this.state.playlist.map( e => (
                        <Track key={e.id} details={e} firstSoundId={this.state.firstSound} updateLike={this.updateLike.bind(this)}/>
                    ))}
                </div>
            )
        }
    }
}