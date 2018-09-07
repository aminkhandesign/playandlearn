import react,{Component} from 'react';

import React from 'react';
import Butt from './button.jsx';
import Form from './forms.jsx'
import Grid from './grid.jsx'
const sound_effect = new Audio('./images/effect1.mp3');

class Slider extends Component {
    constructor(props){
        super(props);
        this.state={slider_position:"left_pos",typeOfForm:"signup"}
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
        this.chooseCharacter = this.chooseCharacter.bind(this)
        this.explore = this.explore.bind(this)
        this.back = this.back.bind(this)

    }

back(){
    if(this.state.slider_position=="center_pos"){
        this.setState({slider_position:"left_pos"})
    }
    else if(this.state.slider_position=="right_pos"){
        this.setState({slider_position:"center_pos"})
    }
    else { console.log("no position set")}
}
signUp() {
this.setState({slider_position:"center_pos",typeOfForm:"signup"});
sound_effect.play();
console.log(this.state.slider_position)
}

login() {
    this.setState({slider_position:"center_pos",typeOfForm:"login"});
  sound_effect.play()
    console.log(this.state.slider_position)
    }
explore(){
    this.setState({slider_position:"center_pos",typeOfForm:"explore"});
    sound_effect.play()
}
chooseCharacter(){
    this.setState({slider_position:"right_pos",typeOfForm:"signup"});
    sound_effect.play();
}
    render(){
        return (
            
            <div id="slider-container" className={this.state.slider_position}>
            <div className="return" onClick={this.back}>BACK</div>
            <div className="left_box">
            <Butt onClick={this.signUp} onMouseover={this.sound_effect} buttonName="SignUp"/>
             <br/>
             <br/>
             <Butt onClick={this.login} buttonName="Login" />
             <br/>
             <br/>
             <Butt  onClick={this.explore} buttonName="Explore"/>
            </div>
            <div className="center_box">
            <Form typeOfForm={this.state.typeOfForm} chooseCharacter={this.chooseCharacter} />
            </div>
            <div className="right_box">
            <Grid />
            </div>
               
            </div>
        )
    }
}

export default Slider