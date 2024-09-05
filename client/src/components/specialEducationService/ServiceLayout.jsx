import React from 'react'
import StudentDetails from './selectStudent/StudentDetails'
import ServiceSelectBox from './selectStudent/ServiceSelectBox'
import { Container } from 'react-bootstrap'
import IndividualizedSpecialPlan from './individualSpecialPlan/IndividualizedSpecialPlan'

const ServiceLayout = ({ children }) => {
    return (
        <Container className='my-3'>
            <StudentDetails />
            <ServiceSelectBox />
            <br />
            {children}
            <IndividualizedSpecialPlan />
        </Container>
    )
}

export default ServiceLayout