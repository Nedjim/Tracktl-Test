import React from 'react';
import eart from '../assets/heart.png';
import nav from '../assets/nav-icon.png';

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
            priority: this.props.details.priority,
            firstSoundId: null
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

    componentWillReceiveProps(nextProps){
        this.setState({
            firstSoundId: nextProps.firstSoundId
        })
    }

    render(){
        var buttonStyle;
        var menuStyle;
        var borderTrack

        this.state.userVoted == true ? buttonStyle = {background: '#ce686b'} : buttonStyle = { background: '#343434' };
        
        if(this.state.firstSoundId == this.state.id){
            borderTrack = {
                border: '0.2rem solid #7bd08b'
            }
            menuStyle = {
                background: '#7bd08b'
            }
        }
        else {
            menuStyle = {
                background: '#343434'
            }
        }
        
        return (
            <div className='track' style={borderTrack}>
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
                    <div className='menu inline-block' style={menuStyle}>
                        <img className='nav-icon' src={nav}/>
                    </div>
                    <div className='eart-button inline-block' style={buttonStyle}>
                        <span className='counter-value'> {this.state.like} </span>
                        <img className='eart-img' src={eart} onClick={this.clickVote.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}