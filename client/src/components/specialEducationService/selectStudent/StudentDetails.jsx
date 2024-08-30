import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosConfig from '../../../utils/axiosConfig';
import { useSearchParams } from 'react-router-dom';

const StudentDetails = () => {

    const [searchParams] = useSearchParams();
    const selected = searchParams.get("selected");



    const { data: student, isLoading: studentLoading } = useQuery({
        queryKey: ['student', selected],
        queryFn: async () => {
            const response = await AxiosConfig.get('/pupil/' + selected);
            return response.data;
        },
        refetchOnWindowFocus: false,
        retry: false,
        enabled: !!selected,
    });
    if (!selected) {
        return null
    }

    console.log("student", student);


    if (studentLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card">

            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <p className='d-flex gap-5'>
                            <strong>Full Name:  </strong>  {student.student_firstname} {student.student_lastname}

                        </p>
                        <p>
                            <strong>Roll Number:</strong> {student.student__nid}
                        </p>
                        <p>
                            <strong>Grade:</strong> {student.grade}
                        </p>
                        <p>
                            <strong>Age:</strong> {student.date_ofbirth ? new Date().getFullYear() - new Date(student.date_ofbirth).getFullYear() + " years" : "N/A"}
                        </p>

                    </div>
                    <div className="col-md-6">
                        <p>
                            <strong>Date of Birth:</strong> {student.date_ofbirth ? new Date(student.date_ofbirth).toLocaleDateString() : "N/A"}
                        </p>
                        <p>
                            <strong>Gender:</strong> {student.student_gender}
                        </p>
                        <p>
                            <strong>Responsible Party:</strong> {student.responsible_party_first_name ? student.responsible_party_first_name : ""}
                            {student.responsible_party_last_name ? student.responsible_party_last_name : "N/A"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
