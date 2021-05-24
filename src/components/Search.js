import React from "react";
import {Flex, Heading, Text, Input, FormLabel, Button, Tbody, Td,  Table, Thead, Tr, Th} from "@chakra-ui/react"
import VaccineInfo from "./VaccineInfo"

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			districts: [],
			loading: true,
			districtId: "",
			date: "",
			vaccineInfo: [],
			showVaccineInfo: false
		}
	} 
	
	async componentDidMount() {
		const url = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/17"
		const resp = await fetch(url)
		const data = await resp.json();
		this.setState({districts: data.districts, loading: false})
		console.log(this.state.districts)
	}
	
	handleIdChange = e => {
		this.setState({districtId: e.target.value})
	}

	handleDateChange = e => {
		this.setState({date: e.target.value})
	}
	
	 handleClick = async() => {
		const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${this.state.districtId}&date=${this.state.date}`
		const resp = await fetch(url);
		const data = await resp.json();
		this.setState({vaccineInfo: data.sessions})
		this.setState({showVaccineInfo: true})
	}

	render() {

	return (
		<>
		<Flex height="10vh" alignItems="center" justifyContent="center">
			<Flex height="10vh" alignItems="center" justifyContent="center">
				<FormLabel mr={3}>District Id</FormLabel>
				<Input mr={3} value={this.state.districtId} onChange={this.handleIdChange} placeholder="District Id from the table" />
				<FormLabel>Date</FormLabel>
				<Input mr={3} value={this.state.date} placeholder="Date in DD-MM-YYYY format" onChange={this.handleDateChange} />
		<Button colorScheme="teal" width="130px" onClick={this.handleClick} >Search</Button>
			</Flex>
		</Flex>
		<Flex height="90vh" ml={12} alignItems="center" mt={5} justifyContent="center" direction="column" > 
				<Table size="sm"> 
					<Thead>
					<Tr>
					<Th>District Name</Th>
					<Th>Id</Th>
					</Tr>
					</Thead>
		{this.state.loading === false ? (
			this.state.districts.map(district => (
				<>
						<Tbody>
						<Tr>
						<Td key={district.district_name}>{district.district_name}</Td>
						<Td key={district.district_id}>{district.district_id}</Td>
						</Tr>
						</Tbody>
						</>
			))
		): null }
				</Table>
		</Flex>
		<section>
			{this.state.showVaccineInfo ? <VaccineInfo vaccineInfo={this.state.vaccineInfo} /> : null }
		</section>
	</>	
	)
	}
}

export default Search
