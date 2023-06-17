import React, { Component } from 'react'
import { connect } from 'react-redux';

class Demo_MiniRedux extends Component {
  render() {
    console.log(this.props);
    return(
      <div className=''>
        <button onClick={() => { 
          this.props.handleGiam(5)
         }} className='btn btn-danger'>-</button>
        <strong>{this.props.amount}</strong>
        <button onClick={this.props.handleTang} className="btn btn-success">+</button>
        </div>
    )
      
  }
}

let mapStateToProps=(state)=>{
  return{
    amount:state.numberReducer.soLuong,
  }
} 
let mapDispatchToProps = (dispatch)=>{
  return{
    handleTang:()=>{
      dispatch({
        type:"TANG",
        payload:1,
      })
    },
    handleGiam:(number)=>{
      let action={
        type:"GIAM",
        payload:number,
      }
      dispatch(action)
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Demo_MiniRedux )