import { Navigate } from 'react-router-dom';

const getUser = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        return localStorage.getItem("user");
    }
    else {
        return (
            <Navigate to="/login" />
        );
    }
}

export default getUser;
