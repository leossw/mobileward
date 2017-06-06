import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Login from './modules/users/login';
import Register from './modules/users/register';
import AddUserInfo from './modules/users/addUserInfo';
import Dashboard from './modules/users/dashboard';
import message from './modules/users/message';
import home from './modules/users/home';
import PhysiologicalParams from './modules/patients/physiologicalParams';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './style.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#4642B6',
    accent1Color: '#4642B6',
  },
});

const run = () => {
	injectTapEventPlugin();
	ReactDOM.render(
  		<MuiThemeProvider muiTheme={muiTheme}>
			<Router history={hashHistory}>
				<Route path="/login" components={Login}/>
				<Route path="/register" components={Register}/>
				<Route path="/addUserInfo" components={AddUserInfo}/>
				<Route path="/dashboard" components={Dashboard}/>
				<Route path="/message" components={message}/>
				<Route path="/home" components={home}/>
				<Route path="/physiologicalParams" components={PhysiologicalParams}/>
			</Router>
  		</MuiThemeProvider>
		, document.getElementById('app'));
}
run();