
import React, {Component} from 'react';
import Banner from './banner.jsx';
import Butt from './button.jsx';

var music = new Audio('./images/music2.mp3');
music.loop = true;
const sound_effect = new Audio('./images/effect1.mp3');
window.document.body.onmousemove= music.play();
class Splash extends Component{
 constructor(props){
     super(props);
     this.state = {styles: ['green-grad','full-screen'],form:false,buttText:"START",buttClass:"start"};
     this.handleClick = this.handleClick.bind(this)
 }
 handleClick(ev){
     ev.preventDefault;
     sound_effect.play();
     console.log("click workin!!");
  if (this.state.form===false){
      this.setState({form:true,buttClass:"butt_closed",buttText:""})}
 else {this.setState({form:false,buttClass:"start",buttText:"START"})};
 

 }
//newClick:(e)=>console.log("arrow function works!")
 render(){
     return(
     <div className={this.state.styles.join(" ")}>
        <Banner  form={this.state.form}/>
        <Butt onClick={this.handleClick} buttClass={this.state.buttClass} buttonName={this.state.buttText}></Butt>
     </div>
     )
 }
}

export default Splash