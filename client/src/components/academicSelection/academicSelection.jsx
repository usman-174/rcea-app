import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Styles from "./academicSelection.module.scss";
import { selectAcademics } from "../../store/academic/academicActions";
import { useNavigate } from "react-router";
const academicYear = [
  {
    value: "2020",
    label: "2020",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2026",
    label: "2026",
  },
  {
    value: "2027",
    label: "2027",
  },
];
const academicTerm = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
];
function AcademicSelection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedTerm, selectedYear } = useSelector(
    (state) => state.academics
  );

  const [selectedAcademicYear, setSelectedAcademicYear] = useState(
    selectedTerm || null
  );
  const [selectedAcademicTerm, setSelectedAcademicTerm] = useState(
    selectedYear || null
  );

  const handleAcademicSelection = () => {
    if (!selectedAcademicTerm || !selectedAcademicYear) {
      return;
    }

    dispatch(
      selectAcademics({
        year: selectedAcademicYear.value,
        term: selectedAcademicTerm.value,
      })
    ).then(() => {
      navigate("/data-portal");
    });
  };

  return (
    <main className={Styles.mainContainer}>
      <Container>
        <h1 className={Styles.title}>Academic Selection</h1>
        <h3>Select Academic Year</h3>
        <Select
          className="basic-single mb-4"
          onChange={(e) => setSelectedAcademicYear(e)}
          name="academicYear"
          
              isSearchable={false}
          options={academicYear}
        />
        <h3>Select Academic Term</h3>
        <Select
          className="basic-single"
          onChange={(e) => setSelectedAcademicTerm(e)}
          
              isSearchable={false}
          name="academicTerm"
          options={academicTerm}
        />
        <div className="text-center mt-5">
          <Button size="lg" onClick={handleAcademicSelection}>
            Submit
          </Button>
        </div>
      </Container>
    </main>
  );
}

export { AcademicSelection };
