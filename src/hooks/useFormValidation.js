import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateDemo = (values) => {
    const newErrors = {};

    // Check if Parent Name is empty
    if (!values.parentName) {
      newErrors.parentName = "Parent Name is required";
    }

    // Check if Student Name is empty
    if (!values.studentName) {
      newErrors.studentName = "Student Name is required";
    }

    // Check if Email is valid
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    // Check if Phone Number is valid (allow only digits)
    if (!values.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d+$/.test(values.phone)) {
      newErrors.phone = "Phone Number is invalid";
    }

    // Check if City is empty
    if (!values.city) {
      newErrors.city = "City is required";
    }

    // Check if Country is selected
    if (!values.country) {
      newErrors.country = "Country is required";
    }

    // Check if Subject is selected
    if (!values.selectedSubject) {
      newErrors.selectedSubject = "Subject is required";
    }

    // Check if Grade is selected
    if (!values.selectedGrade) {
      newErrors.selectedGrade = "Grade is required";
    }

    // Check if Curriculum is selected
    if (!values.selectedCurriculum) {
      newErrors.selectedCurriculum = "Curriculum is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateTutor = (values) => {
    const newErrors = {};

    // Check if Parent Name is empty
    if (!values.fullName) {
      newErrors.fullName = "Full Name is required";
    }

    // Check if Email is valid
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    // Check if Phone Number is valid (allow only digits)
    if (!values.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d+$/.test(values.phone)) {
      newErrors.phone = "Phone Number is invalid";
    }

    // Check if City is empty
    if (!values.city) {
      newErrors.city = "City is required";
    }

    // Check if Country is selected
    if (!values.country) {
      newErrors.country = "Country is required";
    }

    // Check if Subject is selected
    if (!values.selectedSubject) {
      newErrors.selectedSubject = "Subject is required";
    }

    // Check if Grade is selected
    if (!values.selectedGrade) {
      newErrors.selectedGrade = "Grade is required";
    }

    // Check if Curriculum is selected
    if (!values.selectedCurriculum) {
      newErrors.selectedCurriculum = "Curriculum is required";
    }
    // Check if Curriculum is selected
    if (!values.qualification) {
      newErrors.qualification = "Qualification is required";
    }
    // Check if Curriculum is selected
    if (!values.teachingExperience) {
      newErrors.teachingExperience = "Teaching Experience is required";
    }
    // Check if Curriculum is selected
    if (!values.remunerationPerHour) {
      newErrors.remunerationPerHour = "Remuneration Per Hour is required";
    }
    // Check if Curriculum is selected
    if (!values.reasonforTeach) {
      newErrors.reasonforTeach = "Reason is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateDemo, validateTutor };
};

export default useFormValidation;
