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

const CardTitle = (props: {title: string, titleColor: string}) => (
  <div className="card__title">
    <div className={classNames(`card__title--${props.titleColor}`)}>
      { props.title }
    </div>
  </div>
);

const Card = (props: Props) => (
  <div className="card">
    { props.title && <CardTitle title={props.title} titleColor={props.titleColor} /> }
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
  children: Node,
};

export default Card;
