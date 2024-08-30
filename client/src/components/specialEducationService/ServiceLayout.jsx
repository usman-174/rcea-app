import React from 'react'
import StudentDetails from './selectStudent/StudentDetails'
import ServiceSelectBox from './selectStudent/ServiceSelectBox'
import { Container } from 'react-bootstrap'

const ServiceLayout = ({ children }) => {
    return (
        <Container className='my-3'>
            <StudentDetails />
            <ServiceSelectBox />
            <br />
            {children}

        </Container>
    )
}

export default ServiceLayout