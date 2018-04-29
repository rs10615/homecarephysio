import React from 'react';
import database from '../database';
import firebase from 'firebase';

class Appointment extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			appointmentList: []
		}
	}
	componentDidMount() {

		var ref = database.ref("appointment");

		ref.on("value", function (snapshot) {
			let appointments = snapshot.val();
			let dataList = [];
			for (let a in appointments) {
				dataList.push(appointments[a])
			}
			this.setState({ appointmentList: dataList });
			console.log(snapshot.val());
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		}, this);
	}
	render() {
		let { appointmentList } = this.state;

		return <div>
			<table className="table table-bordered table-custom">
				<tbody>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
						<th>Service Type</th>
						<th>Posted On</th>
					</tr>

					{
						appointmentList.map(function (data, index) {
							return <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
								<td>{data.UserName}</td>
								<td>{data.Email}</td>
								<td>{data.Phone}</td>
								<td>{data.Address}</td>
								<td>{data.ServiceType}</td>
								<td>{data.DateTime}</td>
							</tr>

						})
					}
				</tbody>
			</table>

		</div>
	}
}

export default Appointment;