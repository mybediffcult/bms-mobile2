import React from "react";
import Icon from "react-fa";
import './styles/index.less';
/*
  * loading shezhi yige fuhao laixianshi zhengzai loading
 */
export default class Loading extends React.Component {
	render(){
		//console.log("11111");
		return(
			<div className='loading'>
			    <Icon className='loading-icon' spin name='spinner' /> 
			</div>
			);
	}
}

