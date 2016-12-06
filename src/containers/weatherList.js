import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	this.renderWeather = this.renderWeather.bind(this);
	// }

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart color="blue" data={temps} /></td>
				<td><Chart color="red" data={humidities} /></td>
				<td><Chart color="green" data={pressures} /></td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}

}

function mapStateToProps({ weather }) {
	// const weather = state.weather;
	return {
		weather: weather
	};

	// ES6
	// return { weather };
}

export default connect(mapStateToProps)(WeatherList);
