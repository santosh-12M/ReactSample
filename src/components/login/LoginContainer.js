import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import {loginPost} from '../../actions/index';
import LoginComponent from './LoginComponent';

const mapStateToProps = state => {
	return {
		loginData: state.loginReducer
	}
}
const mapDispatchToProps = dispatch => {
	return {
		loginPost: (login) => {
			dispatch(loginPost(login))
		}
	}
}

const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent)

export default withRouter(LoginContainer);