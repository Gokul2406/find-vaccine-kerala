import {Text, Box, Flex, Heading} from "@chakra-ui/react";
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
			<Flex direction="column" alignItems="center" width="100vw" height="100vh" >
			{this.props.vaccineInfo.map(v => (
				<>
				<Box background="gray.600" mb={6} p={12}>
				<Heading>Vaccine Info</Heading>
				<Text mt={3}>Address: {v.address}</Text>
				<Text>Fee: {v.fee}</Text>
				<Text>Vaccine: {v.vaccine}</Text>
				<Text>Available Capacity: {v.available_capacity}</Text>
				<Text>Available Dose 1 Capacity: {v.available_capacity_dose1}</Text>
				<Text>Available Dose 2 Capacity: {v.available_capacity_dose2}</Text>
				</Box>
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
