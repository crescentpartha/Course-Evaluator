import { useEffect, useState } from "react";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useFindUser from "./useFindUser";

const useCoursesForEvaluation = () => {
    const [courses, setCourses] = useState([]);
    const [user] = useAuthState(auth);
    const [regUser] = useFindUser(user);
    // console.log(regUser);

    useEffect(() => {
        fetch(`http://localhost:5000/courseForEvaluation?degree=${regUser?.degree}&semester=${regUser?.semester}`)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [regUser, user]);

    return [courses, setCourses];
}

export default useCoursesForEvaluation;