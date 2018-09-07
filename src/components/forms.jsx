import React, {Component} from 'react';

const submit_url = "";
const sound_effect = new Audio('./images/effect1.mp3');
function validate(entry){
    entry = entry.trim();
    if(entry.length<3 || entry.length>10){
        return null
    }
    if(/\s/.test(entry)){
        return null
    }
    return entry
}
function validatePass(pword,pcheck){
    let x = pword;
        let y = pcheck;
        if(x.length>0 &&  x===y){
            return true
        }
        else if (x.length===0){
            return false
        }
        else { return false}
}
class Form extends  Component{
    constructor(props){
        super(props)
        this.state={teacher:false,username:"",password:"",passcheck:"",validated:"bubble_closed",message:""}
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.signup_submit=this.signup_submit.bind(this)
        this.handleChangePassCheck=this.handleChangePassCheck.bind(this)

    }
    handleChangeName(ev){
        ev.preventDefault();
        this.setState({username:ev.target.value});
    
    }
    handleChangePassword(ev){
        ev.preventDefault();
        this.setState({password:ev.target.value});
           
    }
    handleChangePassCheck(ev){
        ev.preventDefault();
        if (validatePass(ev.target.value,this.state.password)){
            this.setState({passhcheck:ev.target.value,validated:"bubble_closed",message:""})
            
        }
        
        else{
            this.setState({passhcheck:ev.target.value,validated:"bubble_open",message:"passwords dont match"})
        }
        
    }
    signup_submit(ev){
        ev.preventDefault();
    if (validate(this.state.username && validate(this.state.password)))
        console.log(this.state.username);

    }
    render() {
        console.log(this.props.typeOfForm)
        if(this.props.typeOfForm==="signup"){
        return (
                 
                <form id="signup" className="forms" onSubmit={this.signup_submit}>
                    <div className={this.state.validated}>{this.state.message}</div>
                    <label>Please choose a username:<br/>
                    <input type="text" onChange={this.handleChangeName} name="username" id="signup_name" className="name" placeholder="enter username"/>
                    </label>
                    <br/>
                    <label>Please choose a password:<br/>
                    <input type="password" onChange={this.handleChangePassword} name="password"id="signup_password" className="password" placeholder="enter password"/>
                    </label>
                    <br/>
                    <label>Please re-enter password:<br/>
                    <input type="password" onChange={this.handleChangePassCheck} name="password"id="signup_password_check" className="password" placeholder="enter password"/>
                    </label>
                    <br/>
                    <label> teacher account?<br/>
                    <input type="radio" value="teacher?" checked={this.state.teacher} onChange={()=>{this.setState({teacher:!teacher})}}/>
                    </label>
                    <br/>
                    <button className="submit_button" onClick={this.props.chooseCharacter}>Choose Character</button>
                </form>
        )
        }
    else if (this.props.typeOfForm==="login"){
        return (
            <form id="signup" className="forms" methd="POST" onSubmit={this.signup_submit}>
                <label>Please enter username:<br/>
                <input type="text" onChange={this.handleChange} name="username" id="signup_name" className="name" placeholder="enter username"/>
                </label>
                <br/>
                <label>Please enter password:<br/>
                <input type="password" onChange={this.handleChange} name="password" id="signup_password" className="password" placeholder="enter password"/>
                </label>
                <br/>
                <button className="submit_button">SUBMIT</button>
               
            </form>
    
    )
    }
    else if (this.props.typeOfForm==="explore"){
        return (
            <div id="grid_container">
  <div id="selection">
    <div id="select-text">Please Select a Module:</div>
    <div id="select-grid" display="grid">
      <div className="grid-el" onMouseOver={this.soundEffect}><video className="vid" autoPlay muted loop><source src='./images/Major-Tom.mp4' type="video/mp4"/></video></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><video className="vid" autoPlay muted loop><source src='./images/Major-Tom.mp4' type="video/mp4"/></video></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><video className="vid" autoPlay muted loop><source src='./images/Major-Tom.mp4' type="video/mp4"/></video></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><video className="vid" autoPlay muted loop><source src='./images/Major-Tom.mp4' type="video/mp4"/></video></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><video className="vid" autoPlay muted loop><source src='./images/Major-Tom.mp4' type="video/mp4"/></video></div>
      <div className="grid-el" onMouseOver={this.soundEffect}><video className="vid" autoPlay muted loop><source src='./images/Major-Tom.mp4' type="video/mp4"/></video></div>
      
    </div>``
  </div>
  <div id="name-submit">
    
  </div> 
</div>
        )
    }
    return <h1> No form selected </h1>
}
}
export default Form
