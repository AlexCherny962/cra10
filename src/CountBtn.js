import React from "react";

export default function CountBtn(props){

const send = () => { props.updateCounter(props.value+props.count) }
console.log("CountBtn:",props, props.updateCounter, props.value, props.count) /* для посмотреть*/
    return(<button onClick={send}>{props.value}</button>);
}
