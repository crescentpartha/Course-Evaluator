import { useEffect, useState } from "react"

const useQuestions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('./../../api/questions.json')
        .then(res => res.json())
        .then(data => setQuestions(data));
    }, []);

    return [questions, setQuestions];
}

export default useQuestions;