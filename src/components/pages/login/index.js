// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Card, Image, InputField, Button,
} from '../../ui';
import './styles.scss';
import type { LoginRequest } from '../../../types/request';
import { login } from '../../../actions/user';

type State = {
  email: string,
  password: string,
}

type Props = {
  login: Function,
  loading: boolean,
}

class Login extends PureComponent<Props, State> {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(data);
  };

  render() {
    const { email, password } = this.state;
    const { loading } = this.props;
    return (
      <div className="login-container">
        <div className="login-form">
          <Card gutter>
            <Image src="../../../s" alt="woollar logo" classNames="image--logo-auth" />
            <form onSubmit={(e) => {
              e.preventDefault();
              this.submitForm();
            }}
            >
              <InputField
                id="emailAuth"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
              <InputField
                id="passwordAuth"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
              <Button
                type="submit"
                size="lg"
                text="Login"
                disabled={loading}
                loading={false}
                classNames="button--blue"
                onClick={this.submitForm}
              />
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading.value,
});

const mapDispatchToProps = dispatch => ({
  login: (data: LoginRequest) => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
