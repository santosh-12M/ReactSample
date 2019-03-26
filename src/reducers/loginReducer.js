let loginObject = {};
const loginReducer = (state = {"loggedInUserInfo":loginObject}, action) => {
	switch (action.type) {
		
		case 'GET_LOGIN_USER_SUCCESS':
			let actionResult = action.payload;
			let fuzzLocalObject = {loginInfo:actionResult};
			localStorage.setItem('fuzz',JSON.stringify(fuzzLocalObject));
			return Object.assign({},state, {
				loggedInUserInfo: action.payload,
            });
            default:
			return (state !== undefined) ? state : {"loggedInUserInfo":loginObject};
	}
};

export default loginReducer;