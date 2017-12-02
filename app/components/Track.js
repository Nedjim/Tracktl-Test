import React from 'react';
import eart from '../assets/heart.png';

export default class Track extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            id: props.details.id,
            adder: props.details.adder['pictureUrl'],
            name: props.details.name,
            artist: props.details.artist,
            img: props.details['pictureUrl'], 
            like: props.details['votes'].count,
            userVoted: props.details['votes'].userVoted,
            priority: this.props.details.priority
        }
    }

    clickVote(){
        if(this.state.userVoted == false) {
            this.props.updateLike(this.state.id);
            this.setState({
                like: this.state.like + 1,
                userVoted: true
            })
        }
    }

    render(){
        var buttonStyle;

        if(this.state.userVoted){
            buttonStyle = {
                background: '#ce686b'
            }
        }
        else {
            buttonStyle = {
                background: '#343434'
            }
        }

        if(this.state.priority){
            var borderTrack = {
                border: '1rem solid #7bd08b'
            }
        }
        
        return (
            <div className='track'>
                <div className='adder'>
                    <img className='adder-img' src={this.state.adder}/>
                </div>

                <div className='sound'>
                    <div>
                        <div className='inline-block'>
                            <img className='album-img' src={this.state.img}/>
                        </div>
                        <div className='details inline-block'>
                            <p className='artist'><strong>{this.state.artist}</strong></p>
                            <p className='title'><strong>{this.state.name}</strong></p>
                        </div>
                    </div>
                    <p className='userAdd'>Ajouter par Test</p>
                </div>
                <div className='votes'>
                    <div className='eart-button' style={buttonStyle}>
                        <span className='counter-value'> {this.state.like} </span>
                        <img className='eart-img' src={eart} onClick={this.clickVote.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}