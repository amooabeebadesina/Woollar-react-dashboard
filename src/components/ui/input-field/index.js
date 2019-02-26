// @flow
import React from 'react';
import './styles.scss';

type Props = {
  type: 'text' | 'password',
  placeholder: string,
  label?: string,
  name: string,
  value: string,
  id?: string,
  onChange: () => void
}

const InputField = (props: Props) => (
  <div className="input-container">
    {props.label && (<label htmlFor={props.id}> props.label </label>)}
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

InputField.defaultProps = {
  placeholder: '',
  label: '',
  id: '',
};

export default InputField;
