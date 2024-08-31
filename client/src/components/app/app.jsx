import { Route, Routes } from "react-router-dom";
import { AcademicSelection } from "../academicSelection";
import { ClassListScreen } from "../classListScreen";
import { EotScreen } from "../eot";
import { MarkingScheme } from "../markingScheme";
import { PrivateRoute } from "../privateRoute";
import { PublicRoute } from "../publicRoute";
import { CreatePupilsScreen } from "../pupils/create";
import { PupilDetailsScreen } from "../pupils/details";
import { EndOfTerm } from "../pupils/endOfTerm";
import { ListPupilsScreen } from "../pupils/list";
import { UpdatePupilsScreen } from "../pupils/update";
import { QafClassVisit } from "../qualityAssurancePortal/qafClassVisit/QafClassVisit";
import { QafLessonPlan } from "../qualityAssurancePortal/qafLessonPlan";
import { SchoolSelectScreen } from "../schoolSelectScreen";
import { BehaviorScreen } from "../screenings/behaviorScreen";
import { CommunicationScreen } from "../screenings/communicationScreen";
import { FineMotorScreen } from "../screenings/fineMotorScreen";
import GrossMotorScreen from "../screenings/grossMotorScreen/grossMotorScreen";
import { LetterNamingScreen } from "../screenings/letterNamingScreen";
import { LetterSoundScreen } from "../screenings/letterSoundScreen";
import { MathematicsScreen } from "../screenings/mathematicsScreen";
import { NonsenseWordScreen } from "../screenings/nonsenseWordScreen";
import { OralReadingScreen } from "../screenings/oralReadingScreen";
import { PhonemicFluencyScreen } from "../screenings/phonemicFluencyScreen";
import { SilentReadingScreen } from "../screenings/silentReadingScreen";
import { SignInScreen } from "../signInScreen";
import { SignUpScreen } from "../signUpScreen";
import { CorePhonicsSurvey } from "../targetScreenings/corePhonicsSurvey";

import { PsychoMotor } from "../targetScreenings/psychoMotor/PsychoMotor";

import { SpeechAndLanguage } from "../targetScreenings/speechAndLanguage/SpeechAndLanguageN";
import { CreateTeacherScreen } from "../teachers/create";
import { TeacherDetailsScreen } from "../teachers/details";
import { ListTeachersScreen } from "../teachers/list";
import { UpdateTeacherScreen } from "../teachers/update";
import Styles from "./app.module.scss";

import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSchools } from "../../store/school/schoolActions";
import { getUserDetails } from "../../store/user/userActions";
import { ProgressMonitoring } from "../qualityAssurancePortal/progressMonitoring";
import { QafSchemeOfWork } from "../qualityAssurancePortal/qafSchemeOfWork";
import { QafWeeklyPlanGP } from "../qualityAssurancePortal/qafWeeklyPlanGP/QafWeeklyPlanGP";
import { QafWeeklyPlanSpecialists } from "../qualityAssurancePortal/qafWeeklyPlanSpecialists/QafWeeklyPlanSpecialists";
import CreateCorePhonics from "../targetScreenings/corePhonicsSurvey/CreateCorePhonics";
import { Qps } from "../targetScreenings/qps/Qps";
import { ReallyGreatReading } from "../targetScreenings/reallyGreatReading/ReallyGreatReading";

import SelectStudentsPage2 from "../specialEducationService/selectStudent/SelectStudentsPage";
import SelectStudentsPage from "../targetScreenings/selectStudent/SelectStudentsPage";

import { Toaster } from "react-hot-toast";
import AutismSpectrumDisorder from "../specialEducationService/autismSpectrumDisorder/AutismSpectrumDisorder";
import DevelopmentalCognitiveDisability from "../specialEducationService/developmentalCognitiveDisability/developmentalCognitiveDisability";
import DevelopmentalDelay from "../specialEducationService/developmentalDelay/DevelopmentalDelay";
import EmotionalOrBehaviouralDisorders from "../specialEducationService/emotionalOrBehaviouralDisorders/EmotionalOrBehaviouralDisorders";
import HearingImpairment from "../specialEducationService/hearingImpairment/HearingImpairment";
import IndividualizedSpecialPlan from "../specialEducationService/individualSpecialPlan/IndividualizedSpecialPlan";
import OtherHealthImpairments from "../specialEducationService/otherHealthImpairments/OtherHealthImpairments";
import PhysicallyImpairment from "../specialEducationService/physicallyImpairment/PhyscallyImpairment";
import SpecificLearningDisability from "../specialEducationService/specificLearningDisability/SpecificLearningDisability";
import SpeechAndLanguageSpecial from "../specialEducationService/speechAndLanguage/SpeechAndLanguage";
import TaumaticBrainInjury from "../specialEducationService/taumaticBrainInjury/TaumaticBrainInjury";
import VisualImpairment from "../specialEducationService/visualImpairment/VisualImpairment";
import { Past } from "../targetScreenings/past/Past";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Wrap the dispatch in a promise
        await new Promise((resolve, reject) => {
          dispatch(getUserDetails()).then(resolve).catch(reject);
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
    dispatch(getSchools());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading)
    return (
      <center>
        <Spinner />;
      </center>
    );
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                title="Select School"
                Component={SchoolSelectScreen}
              />
            }
          />
          <Route
            path="/academic-select"
            element={
              <PrivateRoute
                title="Select Academic"
                Component={AcademicSelection}
              />
            }
          />
          <Route
            path="/data-portal"
            element={
              <PrivateRoute title="Data Portal" Component={ListPupilsScreen} />
            }
          />
          <Route
            path="/sign-in"
            element={
              <PublicRoute
                restricted={true}
                title="Sign In"
                Component={SignInScreen}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <PublicRoute
                restricted={true}
                title="Sign Up"
                Component={SignUpScreen}
              />
            }
          />
          <Route
            path="/data-portal/marking-scheme"
            element={
              <PrivateRoute title="Marking Scheme" Component={MarkingScheme} />
            }
          />
          <Route
            path="/data-portal/pupils/create"
            element={
              <PrivateRoute
                title="Create Pupil"
                Component={CreatePupilsScreen}
              />
            }
          />
          <Route
            path="/data-portal/pupils"
            element={
              <PrivateRoute title="All Pupils" Component={ListPupilsScreen} />
            }
          />
          <Route
            path="/data-portal/pupils/:id"
            element={
              <PrivateRoute
                title="Pupil Details"
                Component={PupilDetailsScreen}
              />
            }
          />
          <Route
            path="/data-portal/pupils/:id/update"
            element={
              <PrivateRoute
                title="Pupil Update"
                Component={UpdatePupilsScreen}
              />
            }
          />
          <Route
            path="/data-portal/pupils/:id/eot"
            element={
              <PrivateRoute title="Pupil Update" Component={EndOfTerm} />
            }
          />
          <Route
            path="/data-portal/teachers"
            element={
              <PrivateRoute
                title="All Teachers"
                Component={ListTeachersScreen}
              />
            }
          />
          <Route
            path="/data-portal/teachers/create"
            element={
              <PrivateRoute
                title="Create Teacher"
                Component={CreateTeacherScreen}
              />
            }
          />
          <Route
            path="/data-portal/teachers/:id"
            element={
              <PrivateRoute
                title="Teacher Details"
                Component={TeacherDetailsScreen}
              />
            }
          />
          <Route
            path="/data-portal/teachers/:id/update"
            element={
              <PrivateRoute
                title="Update Teacher"
                Component={UpdateTeacherScreen}
              />
            }
          />
          <Route
            path="/data-portal/class-list"
            element={
              <PrivateRoute title="Class List" Component={ClassListScreen} />
            }
          />
          <Route
            path="/data-portal/screening/fine-motor-screening"
            element={
              <PrivateRoute
                title="Fine Motor Screening"
                Component={FineMotorScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/behavior-screening"
            element={
              <PrivateRoute
                title="Behavior Screening"
                Component={BehaviorScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/communication-screening"
            element={
              <PrivateRoute
                title="Communication Screening"
                Component={CommunicationScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/gross-motor-screening"
            element={
              <PrivateRoute
                title="Gross Motor Screening"
                Component={GrossMotorScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/letter-naming-screening"
            element={
              <PrivateRoute
                title="Letter Naming Screening"
                Component={LetterNamingScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/letter-sound-screening"
            element={
              <PrivateRoute
                title="Letter Sound Screening"
                Component={LetterSoundScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/mathematics-screening"
            element={
              <PrivateRoute
                title="Mathematics Screening"
                Component={MathematicsScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/nonsense-word-screening"
            element={
              <PrivateRoute
                title="Nonsense word Screening"
                Component={NonsenseWordScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/oral-reading-screening"
            element={
              <PrivateRoute
                title="Oral reading Screening"
                Component={OralReadingScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/phonemic-screening"
            element={
              <PrivateRoute
                title="Phonemic Fluency Screening"
                Component={PhonemicFluencyScreen}
              />
            }
          />
          <Route
            path="/data-portal/screening/silent-reading-screening"
            element={
              <PrivateRoute
                title="Silent Reading Screening"
                Component={SilentReadingScreen}
              />
            }
          />
          <Route
            path="/data-portal/target-screening/"
            element={
              <PrivateRoute
                title="Select Student"
                Component={SelectStudentsPage}
              />
            }
          />
          <Route
            path="/data-portal/target-screening/core-phonics-survey"
            element={
              <PrivateRoute
                title="Core Phonics Survey"
                Component={CorePhonicsSurvey}
              />
            }
          />

          <Route
            path="/data-portal/target-screening/core-phonics-survey/create/:id"
            element={
              <PrivateRoute
                title="Core Phonics Survey"
                Component={CreateCorePhonics}
              />
            }
          />
          <Route
            path="/data-portal/target-screening/past"
            element={<PrivateRoute title="Past" Component={Past} />}
          />
          <Route
            path="/data-portal/target-screening/qps"
            element={<PrivateRoute title="QPS" Component={Qps} />}
          />
          <Route
            path="/data-portal/target-screening/really-great-reading"
            element={
              <PrivateRoute
                title="Really Great Reading"
                Component={ReallyGreatReading}
              />
            }
          />
          <Route
            path="/data-portal/target-screening/speech-and-language"
            element={
              <PrivateRoute
                title="Speech And Language"
                Component={SpeechAndLanguage}
              />
            }
          />
          <Route
            path="/data-portal/target-screening/psycho-motor"
            element={
              <PrivateRoute title="Psycho Motor" Component={PsychoMotor} />
            }
          />
          <Route
            path="/data-portal/qa/qaf-lesson-plan"
            element={
              <PrivateRoute title="QAF Lesson Plan" Component={QafLessonPlan} />
            }
          />
          <Route
            path="/data-portal/qa/qaf-weekly-plan-gp"
            element={
              <PrivateRoute
                title="QAF Weekly Plan GP"
                Component={QafWeeklyPlanGP}
              />
            }
          />
          <Route
            path="/data-portal/qa/qaf-weekly-plan-specialists"
            element={
              <PrivateRoute
                title="QAF Weekly Plan Specialists"
                Component={QafWeeklyPlanSpecialists}
              />
            }
          />
          <Route
            path="/data-portal/qa/qaf-class-visit"
            element={
              <PrivateRoute title="QAF Class Visit" Component={QafClassVisit} />
            }
          />
          <Route
            path="/data-portal/qa/qaf-scheme-work"
            element={
              <PrivateRoute
                title="QAF Scheme of Work "
                Component={QafSchemeOfWork}
              />
            }
          />
          <Route
            path="/data-portal/qa/progress-monitoring"
            element={
              <PrivateRoute
                title="Progress Monitoring "
                Component={ProgressMonitoring}
              />
            }
          />
          <Route
            path="/data-portal/eot"
            element={<PrivateRoute title="End Of Term" Component={EotScreen} />}
          />
          <Route
            path="/data-portal/special-education-service/"
            element={
              <PrivateRoute
                title="Select Student"
                Component={SelectStudentsPage2}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/speech-and-language"
            element={
              <PrivateRoute
                title="Select Student"
                Component={SpeechAndLanguageSpecial}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/physically-impairment"
            element={
              <PrivateRoute
                title="Select Student"
                Component={PhysicallyImpairment}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/emotional-or-behavioural-disorders"
            element={
              <PrivateRoute
                title="Select Student"
                Component={EmotionalOrBehaviouralDisorders}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/autism-spectrum-disorder"
            element={
              <PrivateRoute
                title="Select Student"
                Component={AutismSpectrumDisorder}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/developmental-cognitive-disability"
            element={
              <PrivateRoute
                title="Select Student"
                Component={DevelopmentalCognitiveDisability}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/developmental-delay"
            element={
              <PrivateRoute
                title="Select Student"
                Component={DevelopmentalDelay}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/hearing-impairment"
            element={
              <PrivateRoute
                title="Select Student"
                Component={HearingImpairment}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/taumatic-brain-injury"
            element={
              <PrivateRoute
                title="Select Student"
                Component={TaumaticBrainInjury}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/visual-impairment"
            element={
              <PrivateRoute
                title="Select Student"
                Component={VisualImpairment}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/other-health-impairment"
            element={
              <PrivateRoute
                title="Select Student"
                Component={OtherHealthImpairments}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/specific-learning-disability"
            element={
              <PrivateRoute
                title="Select Student"
                Component={SpecificLearningDisability}
              />
            }
          />
          <Route
            path="/data-portal/special-education-service/individial-education-plan"
            element={
              <PrivateRoute
                title="Select Student"
                Component={IndividualizedSpecialPlan}
              />
            }
          />
          {/* <Route
            path="/data-portal/special-education-service/special-scheme-of-work"
            element={
              <PrivateRoute
                title="Select Student"
                Component={SpecialSchemeOfWork}
              />
            }
          /> */}
          {/* special-scheme-of-work */}
        </Routes>
      </Layout>
    </div>
  );
}

const Layout = ({ children }) => (
  <div className={Styles.mainContainer}>
    <Toaster />
    <div className={Styles.contentContainer}>{children}

    </div>

  </div>
);

export { App };

