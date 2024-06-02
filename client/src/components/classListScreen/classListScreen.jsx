/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../spinner";
import Styles from "./classListScreen.module.scss";
import { getPupils } from "../../store/pupil/pupilActions";

function ClassListScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, pupilInfo } = useSelector((state) => state.pupil);
  const [modal, setModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPupil, setSelectedPupil] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getPupils());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="container my-4">
        <h1 className="text-center mb-5">Class List</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium text-nowrap"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium text-nowrap"
                        >
                          EOT
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium text-nowrap"
                        >
                          Screening
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium text-nowrap"
                        >
                          PM
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium text-nowrap"
                        >
                          TS
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium text-nowrap"
                        >
                          Report
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(pupilInfo) &&
                        pupilInfo.map((pupil, index) => (
                          <tr className={Styles.pupil} key={index}>
                            <td
                              className={`align-top text-nowrap ${Styles.pupilName}`}
                              onClick={() =>
                                navigate(`/pupils/${pupil.STUDENT_NID}`)
                              }
                            >
                              <h5 className="font-medium mb-0">Pupil 1</h5>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                <Link to={`/pupils/${pupil.STUDENT_NID}/eot`}>
                                  EOT
                                </Link>
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                <Link
                                  to={`/pupils/${pupil.STUDENT_NID}/screening`}
                                >
                                  Screening
                                </Link>
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                <Link to={`/pupils/${pupil.STUDENT_NID}/pm`}>
                                  PM
                                </Link>
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                <Link to={`/pupils/${pupil.STUDENT_NID}/ts`}>
                                  TS
                                </Link>
                              </span>
                            </td>
                            <td className="align-top text-nowrap">
                              <span className="text-muted">
                                <Link
                                  to={`/pupils/${pupil.STUDENT_NID}/report`}
                                >
                                  Report
                                </Link>
                              </span>
                            </td>
                          </tr>
                        ))}
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

export { ClassListScreen };
