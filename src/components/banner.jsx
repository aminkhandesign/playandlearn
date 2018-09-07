import React, {Component} from 'react';
import Butt from './button.jsx';
import Slider from './slider.jsx';
const sound_effect = new Audio('./images/effect1.mp3');
class Banner extends Component{
    constructor(props){
        super(props);
        this.state = {styles:['title-font','drop-ani'],teacher: false};
    
    }
   
    render(){
        if(!this.props.form){
        return(
            <div className="flex">
            <h1 className={this.state.styles.join(" ")}>Play</h1>
            <h1 id="middleword" className={this.state.styles.join(" ")}>and</h1>
            <h1 className={this.state.styles.join(" ")}>Learn</h1>
            </div>
        )
    }
    else {
        return(
            <Slider />
            // <div className="flex">
            // <Butt onClick={(ev)=>console.log("butt 1 clicked")} buttonName="SignUp"/>
            // <br/>
            // <br/>
            // <Butt buttonName="Login"/>
            // <br/>
            // <br/>
            // <Butt buttonName="Explore"/>
            // </div>
        )
    }
}}

export default Banner