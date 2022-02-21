import { useSelector } from "react-redux";
import {Navigate } from "react-router";
import authSelectors from "../redux/authSelectors";
export default function PrivateRoute({ component: C, }) {
    const isAuth = useSelector(authSelectors.getIsLoggedIn)
    return (<>
        {isAuth ? <C /> : <Navigate to="/" />}
    </>)
}