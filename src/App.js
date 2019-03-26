import React from 'react';
import { BrowserRouter as Router,HashRouter,NavLink,Route,Switch,Redirect,withRouter } from 'react-router-dom';
import LoginContainer from './components/login/LoginContainer';
import ContainerComponent from './components/dashboard/ContainerComponent';


class App extends React.Component {
	constructor(props) {
		super(props);	
	}
	

	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path='/' render={() => <LoginContainer />}/>
					<Route exact path='/dashboard' render={(props) => <ContainerComponent {...props}/>}/>
					</div>
			</HashRouter>
		)
	}
}

export default App;
