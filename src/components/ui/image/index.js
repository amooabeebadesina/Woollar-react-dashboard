// @flow
import React from 'react';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  src: string,
  alt: string,
  classNames?: string,
}

const Image = (props: Props) => (
  <img src={props.src} alt={props.alt} className={classNames('image', props.classNames)} />
);

Image.defaultProps = {
  classNames: '',
};

export default Image;
