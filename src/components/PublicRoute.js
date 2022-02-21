import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import authSelectors from "../redux/authSelectors";
export default function PublicRoute({ component: C, }) {
    const isAuth = useSelector(authSelectors.getIsLoggedIn)
    return <>
        {isAuth ? <Navigate to={'/hotels'} /> : <C />}
    </>
}