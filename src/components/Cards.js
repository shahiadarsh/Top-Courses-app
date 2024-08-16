import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        let allCourses = [];
        if (category==="All") {
            Object.values(courses).forEach((course) => {
                course.forEach((data) => {
                    allCourses.push(data);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center mb-4 gap-4">

            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course}
                        likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                ))
            }

        </div>
    )
}

export default Cards;