import {Text, Heading} from "@chakra-ui/react";
import React from "react"

export default class VaccineInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return (
			<>
			{this.props.vaccineInfo.map(v => (
				<>
				<Heading mt={3}>Address: {v.address}</Heading>
				<Text>Fee: {v.fee}</Text>
				<Text>Vaccine: {v.vaccine}</Text>
				</>
			)
			)
			}
			</>
		)
	}
	
}
