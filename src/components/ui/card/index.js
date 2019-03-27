// @flow
import React from 'react';
import type { Node } from 'react';
import classNames from 'classnames';
import './styles.scss';

type Props = {
  gutter: boolean,
  title?: string,
  children?: Node,
  titleColor?: 'blue' | 'red' | 'transparent'
}

const CardTitle = (props: any) => (
  <div className="card__title">
    <div className={classNames(`card__title--${props.titleColor}`)}>
      { props.title }
    </div>
  </div>
);

const Card = (props: Props) => (
  <div className="card">
    { props.title && <CardTitle {...props} /> }
    <div className={classNames('card-container',
      { 'card-container--gutter': props.gutter })}
    >
      { props.children }
    </div>
  </div>
);

Card.defaultProps = {
  title: '',
  titleColor: 'transparent',
  children: '',
};

export default Card;
