import React from 'react';
import Icon from 'react-fa';
import './styles/NavBar.less';
/*
 *zui shangbian de na yi hang 
 */ 
export default class NavBar extends React.Component{  
	render(){
		return(
             <header className="NavBar">
             <div className="left">
             <div className="wrapper">
              {this.props.leftText}
             </div>
             </div>
             <div className="main">
             {this.props.mainText}
             </div>
             <div className="right">
             <div className="wrapper">
              {this.props.rightText}
             </div>
             </div>
			);
	}
}

NavBar.defaultProps={
	leftText:"",
	mainText:"",
	rightText:""

}