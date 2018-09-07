import React,{Component} from 'react';


class Grid extends Component{
    constructor(props){
        super(props)
        this.state={list:['superman','ironman','hulk','captain','batman','spiderman']};
        this.soundEffect=this.soundEffect.bind(this)
    }
  
   soundEffect(ev){
    const sound_effect = new Audio('./images/effect1.mp3');
    sound_effect.play();
   }
    render() {
        return (
            <div id="grid_container">
  <div id="selection">
    <div id="select-text">Please Select a character:</div>
    <div id="select-grid" display="grid">
      <div className="grid-el" onMouseOver={this.soundEffect}><img src='./images/spiderman.png'/></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><img src='./images/batman.png'/></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><img src='./images/ironman.png'/></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><img src='./images/superman.png'/></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><img src='./images/captain.png'/></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><img src='./images/hulk.png'/></div>
      
    </div>
  </div>
  <div id="name-submit">
    
  </div> 
</div>
        )
    }
}

export default Grid