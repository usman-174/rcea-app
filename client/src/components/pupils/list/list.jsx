/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Toaster } from "react-hot-toast";
import { Spinner } from "../../spinner";
import { successToast } from "../../../utils";
import Styles from "./list.module.scss";
import { InputField } from "../../inputField";
import { DeletePupilModal } from "./deletePupilModal/deletePupilModal";
import {
  getPupils,
  searchPupils,
  deletePupil,
} from "../../../store/pupil/pupilActions";

function ListPupilsScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, pupilInfo } = useSelector((state) => state.pupil);
  const { selectedSchool } = useSelector((state) => state.school);
  const { selectedTerm,selectedYear } = useSelector((state) => state.academics);

 
  const [modal, setModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPupil, setSelectedPupil] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getPupils({ schoolID: selectedSchool._id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalClose = () => {
    setModal("");
    setShowModal(false);
    setSelectedPupil(null);
  };

  function deletePupilModalHandler(pupilName, pupilID) {
    setModal("deletePupilModal");
    setShowModal(true);
    setSelectedPupil({
      id: pupilID,
      name: pupilName,
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm) dispatch(searchPupils({ query: searchTerm }));
    else dispatch(getPupils({ schoolID: selectedSchool._id }));
  };

  const deletePupilHandler = () => {
    dispatch(deletePupil({ id: selectedPupil.id })).then(() => {
      successToast("Successfully Deleted Pupil");

      handleModalClose();

      setTimeout(() => {
        dispatch(getPupils({ schoolID: selectedSchool._id }));
      }, 1500);
    });
  };

  return (
    <main>
      <Toaster />
      {modal === "deletePupilModal" && (
        <DeletePupilModal
          pupil={selectedPupil}
          showModal={showModal}
          closeModal={handleModalClose}
          deletePupil={deletePupilHandler}
        />
      )}
      <div className="container my-4">
        <h2 className="pt-3 mb-4 pb-2">All Pupils</h2>
        <form
          className={`${Styles.pupilSearchForm} mb-3`}
          onSubmit={handleSearch}
        >
          <div className="w-50 d-flex align-items-center">
            <InputField
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
            />
            <Button type="submit" className={Styles.searchButton}>
              Search
            </Button>
          </div>
        </form>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="table-responsive-xl">
                  <table className="table no-wrap user-table mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal pl-4"
                        >
                          NID
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          Gender
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          Class
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          Section
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          Phone Number
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          SEN
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          Social Aid
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-weight-normal text-nowrap"
                        >
                          Admission No.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(pupilInfo) &&
                        pupilInfo.map((pupil) => {
                            console.log(pupil);
                            
                          return(
                          <tr className={Styles.pupil} key={pupil._id}>
                            <td className="pl-4">{pupil.student__nid}</td>
                            <td
                              className={`align-top text-nowrap ${Styles.pupilName}`}
                              onClick={() =>
                                navigate(`/data-portal/pupils/${pupil._id}`)
                              }
                            >
                              <h5 className="font-medium mb-0">
                                {pupil.student_firstname}
                                {pupil.student_lastname}
                              </h5>
                              {/* <span className="text-muted">{pupil.adress}</span> */}
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                {pupil.student_gender}
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">{pupil.term}</span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                {pupil.student_section}
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                {pupil.mobile_no}
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                {pupil.sen}
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                {pupil.social_aid}
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                {pupil.admission_no}
                              </span>
                            </td>
                            <td className="align-top text-nowrap d-flex">
                              <button
                                type="button"
                                onClick={() =>
                                  deletePupilModalHandler(
                                    pupil?.student_firstname,
                                    pupil?._id
                                  )
                                }
                                className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  navigate(
                                    `/data-portal/pupils/${pupil._id}/update`,
                                    { state: pupil }
                                  )
                                }
                                className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                            </td>
                          </tr>
                        )})}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export { ListPupilsScreen };
