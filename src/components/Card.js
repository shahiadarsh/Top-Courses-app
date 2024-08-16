import React from "react";
import { FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";


const Card = (props) => {
    const course = props.course;

    let likedCourses =props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {

        if(likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid!==course.id))
            toast.warning("liked removed");
        }
        else{
            
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked successfully");
        }

    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url} />

                <div className="h-[40px] w-[40px] bg-white rounded-full absolute right-2 -bottom-4  grid place-items-center">
        
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? 
                            (<FcLike fontSize="1.75rem"/>) : 
                            (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>


            </div>

            <div className="p-4">
                <p className="text-white text-lg font-semibold leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100)) : (course.description)
                    }
                </p>
            </div>

        </div>
    )
}

export default Card;