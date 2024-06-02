import React, { useEffect, useState } from "react";

const Rows = ({ setLessonPlanData,lessonPlanData, teacher, date }) => {
  const [checked, setchecked] = useState(teacher.submitted || false);
  const handleCheckboxChange = (teacher_id, isChecked) => {
    setchecked(isChecked);
    setLessonPlanData((prevData) => {
      const updatedData = prevData.map((data) => {
        if (data._id === teacher_id) {
          return {
            ...data,
            submitted: isChecked,
            date,
            changed:true
          };
        }
        return { ...data, date, submitted: data.submitted, };
      });
      return updatedData;
    });
  };
//   useEffect(() => { 
// console.log("lessonPlanData",lessonPlanData );

//   }, [lessonPlanData]);
  return (
    <tr key={teacher._id}>
      <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => handleCheckboxChange(teacher._id, e.target.checked)}
        />
      </td>
    </tr>
  );
};

export default Rows;
