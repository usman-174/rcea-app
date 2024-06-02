/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Accordion, Button, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Styles from "./sidebar.module.scss";
import Logo from "../../assets/logo.png";

function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { authToken } = useSelector((state) => state.user);

  useEffect(() => {
    setSidebarVisible(
      pathname === "/" ||
      pathname === "/sign-in" ||
      pathname === "/sign-up" ||
      pathname === "/academic-select"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken, navigate]);

  return (
    <aside
      className={`${Styles.sidebarContainer} ${sidebarVisible ? "d-none" : "d-block"
        }`}
    >
      <aside>
        <div className="d-flex justify-content-between align-items-center">
          <img src={Logo} alt="rcea" width={70} height={70} />
          <button
            className="primaryButton py-1 px-3"
            onClick={() => navigate(-1)}
          >
            {"<-"} Back
          </button>
        </div>
        <ul className={Styles.sidebarItems}>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="1" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>
                <div>
                  <i
                    className="mr-2 fa-solid fa-user-group"
                    style={{ width: "16px" }}
                  ></i>
                  Teachers
                </div>
              </Accordion.Header>
              <Accordion.Body className={Styles.accordionBody}>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/teachers"
                >
                  List
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/teachers/create"
                >
                  Create
                </Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>
                <div>
                  <i
                    className="mr-2 fa-solid fa-user-group"
                    style={{ width: "16px" }}
                  ></i>
                  Pupils
                </div>
              </Accordion.Header>
              <Accordion.Body className={Styles.accordionBody}>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/pupils"
                >
                  List
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/pupils/create"
                >
                  Create
                </Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>
                <div>
                  <i
                    className="mr-2 fa-solid fa-user-group"
                    style={{ width: "16px" }}
                  ></i>
                  Screening Portal
                </div>
              </Accordion.Header>
              <Accordion.Body className={Styles.accordionBody}>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/fine-motor-screening"
                >
                  Fine Motor Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/behavior-screening"
                >
                  Socio-Emotional Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/communication-screening"
                >
                  Communication Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/gross-motor-screening"
                >
                  Gross Motor Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/letter-naming-screening"
                >
                  Letter Naming Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/letter-sound-screening"
                >
                  Letter Sound Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/mathematics-screening"
                >
                  Mathematics Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/nonsense-word-screening"
                >
                  Nonsense word Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/oral-reading-screening"
                >
                  Oral reading Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/phonemic-screening"
                >
                  Phonemic Segmentation Screening
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/screening/silent-reading-screening"
                >
                  Silent Reading Screening
                </Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>

                <div>

                  <i
                    className="mr-2 fa-solid fa-user-group"
                    style={{ width: "16px" }}
                  ></i>
                  Specail Education Service

                </div>

              </Accordion.Header>
              <Accordion.Body className={Styles.accordionBody}>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/special-education-service"
                >
                  Select Students
                </Nav.Link>
               
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>

                <div>

                  <i
                    className="mr-2 fa-solid fa-user-group"
                    style={{ width: "16px" }}
                  ></i>
                  Targeted Screening Portal

                </div>

              </Accordion.Header>
              <Accordion.Body className={Styles.accordionBody}>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/target-screening"
                >
                  Select Students
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/target-screening/core-phonics-survey"
                >
                  CORE Phonics Survey
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/target-screening/past"
                >
                  PAST
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/target-screening/qps"
                >
                  QPS
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/target-screening/really-great-reading"
                >
                  Really Great Reading
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/target-screening/speech-and-language"
                >
                  Speech and Language
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/target-screening/psycho-motor"
                >
                  Psychomotor
                </Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>
                <div>
                  <i
                    className="mr-2 fa-solid fa-user-group"
                    style={{ width: "16px" }}
                  ></i>
                  Quality Assurance Portal
                </div>
              </Accordion.Header>
              <Accordion.Body className={Styles.accordionBody}>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/qa/qaf-lesson-plan"
                >
                  QAF LESSON PLAN
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/qa/qaf-weekly-plan-gp"
                >
                  QAF Weekly PLAN GP
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/qa/qaf-weekly-plan-specialists"
                >
                  QAF Weekly PLAN Specialists
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/qa/qaf-class-visit"
                >
                  QAF Class Visits
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/qa/qaf-scheme-work"
                >
                  QAF Scheme of Work
                </Nav.Link>
                <Nav.Link
                  className={Styles.navLink}
                  as={Link}
                  to="/data-portal/qa/progress-monitoring"
                >
                  Progress Monitoring
                </Nav.Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>
                <div
                  onClick={() => navigate("/data-portal/marking-scheme")}
                  className="w-100 text-left"
                >
                  <i
                    className="mr-2 fa-solid fa-school"
                    style={{ width: "16px" }}
                  ></i>
                  Marking Scheme
                </div>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className={Styles.accordionItem}>
              <Accordion.Header className={Styles.accordionHeader}>
                <div
                  onClick={() => navigate("/data-portal/eot")}
                  className="w-100 text-left"
                >
                  <i
                    className="mr-2 fa-solid fa-school"
                    style={{ width: "16px" }}
                  ></i>
                  End Of Term
                </div>
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </ul>
      </aside>
    </aside>
  );
}

export { Sidebar };
