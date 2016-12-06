import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
	return _.round(_.sum(data) / data.length);
}

export default (props) => {
	return (
		<div>
			<Sparklines height={10} width={30} data={tprops.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)}</div>
		</div>
	);
}
