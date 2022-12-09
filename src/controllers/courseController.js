const Course = require("../models/Course");

//gets all courses
exports.getCourse = async (req, reply) => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    console.log(error);
  }
};

//get a single course

exports.getSingleCourse = async (req, reply) => {
  try {
    const course = await Course.findById(req.params.id);
    return course;
  } catch (error) {
    console.log(error);
  }
};

// Add a new course

exports.addCourse = async (req, reply) => {
  try {
    const course = new Course(req.body);
    return course.save();
  } catch (error) {
    console.log(error);
  }
};
//delete a course

exports.deleteCourse = async (req, reply) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    return deletedCourse;
  } catch (error) {
    console.log(error);
  }
};
