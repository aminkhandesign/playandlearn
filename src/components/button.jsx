import React, {Component} from 'react';

const Butt = (props)=><button onClick=
{props.onClick} className={props.buttClass || "start"} > {props.buttonName}</button>

export default Butt