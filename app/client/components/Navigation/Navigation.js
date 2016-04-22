import React from 'react';
import Icon from 'react-fa';
import './styles/Navigation.less';

export default class Navigation extends React.Component{
	render(){
		return(
            <nav id="nav">
            <ul>
            </ul>
            </nav>
			);
	}
}

Navigation.defaultProps={
	Navlist:[
          {
          	title:'设备巡检'，
          	icon:'television',
          	url:'#/terminal/list',
          	parttern:'#/terminal'
          },
          {
            title:'节目单管理',
            icon:'list',
            url:'#/program/list'，
            parttern:'#/program'
          },
          {
          	title:'用户'，
          	icon:'user',
          	url:'#/user/index',
          	parttern:'#/user'

          },
	]
}