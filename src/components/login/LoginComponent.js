import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        const login = {"username":username,"password":password}
        if (username && password) {
            this.props.loginPost(login);
        }
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>                       
                        
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginComponent;