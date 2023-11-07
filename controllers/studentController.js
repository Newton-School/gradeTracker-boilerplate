const Student = require('../models/studentModel');

// Function to get all students
exports.getStudents = async (req, res) => {
  try {
    // TODO: Define the logic to retrieve all student records from the database
    // TODO: Respond with the list of students
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to create a new student
exports.createStudent = async (req, res) => {
  const { name } = req.body;

  try {
    // TODO: Define the logic to create a new student record based on the provided data
    // TODO: Save the new student record to the database
    // TODO: Respond with a success message and the newly created student record
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to update a student's grades
exports.updateGrades = async (req, res) => {
  const { studentId } = req.params;
  const { subject, score } = req.body;

  try {
    // TODO: Retrieve the student record with the given 'studentId' from the database
    // TODO: Check if the student record exists and handle the case when it doesn't
    // TODO: Add the new grade to the student's grades array
    // TODO: Calculate the new average score
    // TODO: Save the updated student record to the database
    // TODO: Respond with a success message and the updated student record
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to generate a grade report for a student
exports.generateGradeReport = async (req, res) => {
  const { studentId } = req.params;

  try {
    // TODO: Retrieve the student record with the given 'studentId' from the database
    // TODO: Check if the student record exists and handle the case when it doesn't
    // TODO: Generate a report with the student's name, grades, and average score
    // TODO: Respond with the generated grade report
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};
