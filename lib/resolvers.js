'use strict'

const courses = [
    {
        _id: '1',
        title: 'JS BASICO',
        teacher: 'Charles',
        description: 'Soy gei',
        topic: 'Albert'
    },
    {
        _id: '2',
        title: 'JS BASICO 1',
        teacher: 'Charles',
        description: 'Soy gei',
        topic: 'Albert'
    },
    {
        _id: '3',
        title: 'JS BASICO 2',
        teacher: 'Charles',
        description: 'Soy gei',
        topic: 'Albert'
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter((course_item) => {
                return course_item._id === args.id
            });

            return course.pop();
        }
    }
}