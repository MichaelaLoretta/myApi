const courseController = require('../controllers/courseController')



const routes = [
  {
    method: "GET",
    url: "/courses",
    handler: courseController.getCourse,
  },
  {
    method: "GET",
    url: "/course/:id",
    handler: courseController.getSingleCourse,
  },
  {
    method: "POST",
    url: "/course/new",
    handler: courseController.addCourse
  },
  {
    method: "DELETE",
    url: "/courses/delete/:id",
    handler: courseController.deleteCourse
  },
];

module.exports = routes