// @flow
import React from 'react';
import { Card } from '../../../ui';

type Props = {
  title: string,
  value: string,
}

const DashboardStat = (props: Props) => (
  <Card>
    <div className="stat__title">
      <p>{props.title}</p>
    </div>
    <div className="stat__value">
      <h4>{props.value}</h4>
    </div>
  </Card>
);

export default DashboardStat;
