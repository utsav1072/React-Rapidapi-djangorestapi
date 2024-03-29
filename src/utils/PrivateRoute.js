import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ element: Element }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        // Return a function that renders the Navigate component
        return  <Navigate to="/login" />;
    }

    return Element ;
};

export default PrivateRoute;
