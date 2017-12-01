import React from 'react';

export default class Track extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            name: props.details.name,
            artist: props.details.artist,
            img: props.details['pictureUrl'], 
            like: props.details['votes'].count,
            userVoted: props.details['votes'].userVoted,
            priority: this.props.details.priority
        }
    }

    update_like(){
        if(this.state.userVoted == false) {
            this.setState({ 
                like : this.state.like +1,
                userVoted : !this.state.userVoted
            })
        }
    };

    render(){

        if(this.state.userVoted){
            var buttonStyle = {
                background: '#ce686b'
            }
        }

        if(this.state.priority){
            var borderTrack = {
                border: '1rem solid #7bd08b'
            }
        }
        
        return (
            <div className='track' style={borderTrack}>
                <div className='box-image'>
                    <img className='album-img' src={this.state.img}/>
                </div>
                <div className='details'>
                    <p className='artist'><strong>{this.state.artist}</strong></p>
                    <p className='title'><strong>{this.state.name}</strong></p>
                </div>
                <div className='thumb-content'>
                    <button style={buttonStyle} onClick={this.update_like.bind(this)}>Heart</button>
                    <span className='counter-value'> {this.state.like} </span>
                </div>
                <div className='userAdd'>
                    <p>Ajouter par Test</p>
                </div>
            </div>
        )
    }
}