// @flow
import React from 'react';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  onClick: () => void,
  text: string,
  size: 'lg' | 'md' | 'sm',
  type: 'button' | 'submit',
  disabled?: boolean,
  loading?: boolean,
  classNames?: string
}

const Button = (props: Props) => (
  <button
    onClick={props.onClick}
    type={props.type}
    disabled={props.disabled}
    className={classNames('button', props.classNames, `button--${props.size}`)}
  >
    {props.loading && <i className="fa fa-refresh fa-spin" /> }
    {props.text}
  </button>
);

Button.defaultProps = {
  classNames: '',
  disabled: false,
  loading: false,
};

export default Button;
