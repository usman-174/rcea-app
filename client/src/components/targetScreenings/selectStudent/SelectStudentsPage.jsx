import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useQuery } from '@tanstack/react-query';
import { Container, Spinner } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';
import Select from "react-select";
import { getPupils } from '../../../store/pupil/pupilActions';
import AxiosConfig from "../../../utils/axiosConfig";
import { grades, screens, sections } from '../../../utils/globals';
import Styles from "./list.module.scss";

const SelectStudentsPage = () => {

    const dispatch = useDispatch();
    const { pupilInfo } = useSelector((state) => state.pupil);

    const { selectedSchool } = useSelector((state) => state.school);
    const [searchParams, setSearchParams] = useSearchParams();
    const schools = useSelector((state) => state.school);
    const currentSelectedSchoolId = searchParams.get("school") || (selectedSchool && selectedSchool._id);
    const currentSelectedSchool = currentSelectedSchoolId ? {
        value: currentSelectedSchoolId,
        label: schools?.schoolInfo?.find((school) => school._id === currentSelectedSchoolId)?.name || "Unknown School"
    } : null;
    const selectedGrade = searchParams.get("grade") ? { value: searchParams.get("grade"), label: searchParams.get("grade") } : {
        value: "",
        label: "All"

    };
    const selectedSection = searchParams.get("section") ? { value: searchParams.get("section"), label: searchParams.get("section") } : {
        value: "",
        label: "All"

    };


    const query = {
        grade: selectedGrade?.value,
        student_section: selectedSection?.value,
        school_id: currentSelectedSchoolId,
    };
    const shouldFetch = currentSelectedSchoolId;
    const {
        data: students,
        isLoading: studentsIsLoading,
    } = useQuery({
        queryKey: ["students", query],
        queryFn: async ({ queryKey }) => {
            // eslint-disable-next-line
            const [_, parameters] = queryKey;
            const response = await AxiosConfig.get("/pupil/getbysectiongrade", {
                params: parameters
            });

            return response.data;
        },
        refetchOnWindowFocus: false,
        retry: false,
        enabled: !!shouldFetch,
    });
    useEffect(() => {
        if (!searchParams.get("school") && selectedSchool) {
            setSearchParams((prev) => {
                // const searchParams = getAllParamsFromEntries(prev)
                return {
                    ...Object.fromEntries(prev),
                    school: selectedSchool._id,
                }
            })
        }
        // eslint-disable-next-line
    }, [searchParams])
    useEffect(() => {
        dispatch(getPupils({ schoolID: selectedSchool._id }));

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Toaster />
            <Container>
                <h2 className="pt-5 mb-4 pb-2">Search Students</h2>
                {/* {studentsIsError && (
                    <Alert key="danger" variant="danger">
                        {error}
                    </Alert>
                )} */}
                <div className="d-flex align-items-center mb-3">
                    <div className="w-25">
                        <h3> Grade</h3>
                        <Select
                            value={selectedGrade}
                            className="basic-single mr-4"
                            onChange={(e) => {

                                setSearchParams((prev) => {

                                    return {

                                        ...Object.fromEntries(prev),
                                        grade: e.value,

                                    }
                                })



                            }}
                            name="grade"
                            isSearchable={false}
                            options={[{
                                value: "",
                                label: "All"

                            }, ...grades]}
                        />
                    </div>
                    <div className="w-25">
                        <h3> Section</h3>
                        <Select
                            value={selectedSection}
                            className="basic-single mr-4"
                            onChange={(e) => {
                                setSearchParams((prev) => {

                                    return {

                                        ...Object.fromEntries(prev),
                                        section: e.value,

                                    }
                                })

                            }}
                            isSearchable={false}
                            name="section"
                            options={[{
                                value: "",
                                label: "All"

                            }, ...sections]}
                        />
                    </div>

                    <div className="w-100">
                        <h3>School</h3>
                        <Select
                            value={currentSelectedSchool}
                            className="basic-single mr-4"
                            onChange={(e) => {
                                setSearchParams((prev) => {

                                    return {

                                        ...Object.fromEntries(prev),
                                        school: e.value,
                                    }
                                })


                                // setCurrentSelectedSchool(e)
                            }}
                            isSearchable={false}
                            name="school"
                            options={
                                schools?.schoolInfo
                                    ? schools?.schoolInfo.map((school) => ({
                                        value: school?._id,
                                        label: school?.name,
                                    }))
                                    : []
                            }
                        />
                    </div>
                </div>
                {(!shouldFetch && pupilInfo?.length)

                    ? <div style={{ marginTop: "24px" }}>
                        {pupilInfo?.length ? (
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="table-responsive-xl">
                                            <table className="table ">
                                                <thead>
                                                    <tr>
                                                        <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                                                            Roll #
                                                        </th>
                                                        <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                                                            Name
                                                        </th>
                                                        <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                                                            Screen
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {pupilInfo.map((pupil, i) =>
                                                    (
                                                        <tr className={Styles.pupil} key={pupil._id + i}>
                                                            <td className={`align-top text-nowrap ${Styles.pupilRoll}`}>
                                                                {pupil.student__nid}
                                                            </td>
                                                            <td
                                                                className={`align-top text-nowrap ${Styles.pupilName}`}
                                                            // onClick={() =>
                                                            //     navigate(`/data-portal/pupils/${pupil._id}`)
                                                            // }
                                                            >
                                                                <h5 className="font-medium mb-0">
                                                                    {pupil.student_firstname}{" "}
                                                                    {pupil.student_lastname}
                                                                </h5>
                                                            </td>
                                                            <td className="align-top text-nowrap d-flex flex-row align-items-center">
                                                                {screens.map((screen) =>
                                                                        <Link to={screen.path + "?pupil_id=" + pupil._id} >

                                                                            <span className='mx-2'>
                                                                                {screen.title}
                                                                            </span>
                                                                        </Link>
                                                                    )
                                                                }
                                                            </td>

                                                        </tr>
                                                    )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) :
                            shouldFetch && <div className="alert alert-info">
                                No students found
                            </div>
                        }
                    </div> :


                    shouldFetch && studentsIsLoading ? (
                        <Spinner />
                    ) : (
                        <div style={{ marginTop: "24px" }}>
                            {students?.length ? (
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="table-responsive-xl">
                                                <table className="table ">
                                                    <thead>
                                                        <tr>
                                                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                                                                Roll #
                                                            </th>
                                                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                                                                Name
                                                            </th>
                                                            <th className="border-0 text-uppercase font-weight-normal text-nowrap">
                                                                Screen
                                                            </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {students.map((pupil) =>
                                                        (
                                                            <tr className={Styles.pupil} key={pupil._id}>
                                                                <td className={`align-top text-nowrap ${Styles.pupilRoll}`}>
                                                                    {pupil.student__nid}
                                                                </td>
                                                                <td
                                                                    className={`align-top text-nowrap ${Styles.pupilName}`}
                                                                // onClick={() =>
                                                                //     navigate(`/data-portal/pupils/${pupil._id}`)
                                                                // }
                                                                >
                                                                    <h5 className="font-medium mb-0">
                                                                        {pupil.student_firstname}{" "}
                                                                        {pupil.student_lastname}
                                                                    </h5>
                                                                </td>
                                                                <td className="align-top text-nowrap d-flex flex-row align-items-center">
                                                                    {screens.map((screen) =>
                                                                            <Link to={screen.path + "?pupil_id=" + pupil._id} >

                                                                                <span className='mx-2'>
                                                                                    {screen.title}
                                                                                </span>
                                                                            </Link>
                                                                        )
                                                                    }
                                                                </td>

                                                            </tr>
                                                        )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                shouldFetch && <div className="alert alert-info">
                                    No students found
                                </div>
                            }
                        </div>
                    )}
            </Container>
        </div>
    )
}

export default SelectStudentsPage