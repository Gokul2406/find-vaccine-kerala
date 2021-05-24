import {Text, Heading, Flex} from "@chakra-ui/react";
import React from "react"

export default class VaccineInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return (
			<>
			<Flex height="100vh" width="100vw" p={12}>
			<Flex direction="column" >
			{this.props.vaccineInfo.map(v => (
				<>
				<Heading mt={3}>Address: {v.address}</Heading>
				<Text>Fee: {v.fee}</Text>
				<Text>Vaccine: {v.vaccine}</Text>
				</>
			)
			)
			}
			</Flex>
				</Flex>
			</>
		)
	}
	
}
