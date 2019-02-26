// @flow
import React, { PureComponent } from 'react';
import {
  Card, Image, InputField, Button,
} from '../../ui';
import './styles.scss';
import { login } from '../../../actions/user';

type State = {
  email: string,
  password: string,
  _loading: boolean,
}

class Index extends PureComponent<{}, State> {
  state = {
    email: '',
    password: '',
    _loading: false,
  };

  handleInputChange = (e: Event) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({ _loading: true });
    dispatch(login(data));
  };

  render() {
    const { email, password, _loading } = this.state;
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
                disabled={_loading}
                loading={_loading}
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

export default Index;
