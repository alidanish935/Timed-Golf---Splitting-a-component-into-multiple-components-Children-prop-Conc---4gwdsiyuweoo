import React, { Component, useState } from "react";
import "../styles/App.css";
let timer;
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
  }
  componentDidMount() {
    // console.log(this.state.x)
  }
  componentDidUpdate(){
    console.log('x and y - ', this.state.x, this.state.y)
    if(this.state.x===250 && this.state.y===250){
      console.log('game over....')
      clearInterval(timer)
      document.removeEventListener('keydown',this.moveBall)
    } 
  }

  componentWillUnmount() {
    
  }
//  topFn=()=>{
//   console.log('topfn....')
//   this.setState({
//     ...this.state,
//     y:this.state.y+5
//   })
//  }
//  leftFn=()=>{
//   // this.setState(y=this.state.y +5)
//   console.log('leftfn....')
//   this.setState({
  
//     x:this.state.x +5})
//  }
 
  starter=()=>{
    document.addEventListener('keydown',this.moveBall)
   timer= setInterval(()=>{
      this.setState({
        ...this.state,
        time:this.state.time+1
      })
    },1000)
    // console.log(this.state.time)
  }
  moveBall =(e)=>{
    let code = e.keyCode
    console.log(code)
    if(code===37){
      this.setState({
        ...this.state,
        x:this.state.x - 5
      })
    }
    if(code===38){
      this.setState({
        ...this.state,
        y:this.state.y - 5
      })
    }
    if(code===39){
      this.setState({
        ...this.state,
        x:this.state.x + 5
      })
    }
    if(code===40){
      this.setState({
        ...this.state,
        y:this.state.y + 5
      })
    }
  }
  render() {
    return (
 <>
 <div className="ball" style={{'top':this.state.y,'left':this.state.x}}></div>
 <button className="start" onClick={this.starter}>Start</button>
 <div className="heading-timer">{this.state.time}</div>
 <div className="hole"></div>
 {/* <button onClick={this.topFn}>top</button>
 <button onClick={this.leftFn}>left</button> */}


</>
    );
  }
}

export default Timer;
