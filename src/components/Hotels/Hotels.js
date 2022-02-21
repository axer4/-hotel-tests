import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import authOperations from "../../redux/authOperations";
function Hotels () {
    const [hotels,setHotels] = useState([]);
    const getHotels = async () => {
        try {
           const {data} =  await axios.get('/hotels')
           return setHotels(data)
        }
        catch(error) {
            return console.log(error)
        }
    }
    useEffect(() => {
        getHotels()
    },[])
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(authOperations.logOut())
    }

    return <div>
        <button onClick={logOut}>Выйти из приложения</button>
        <h1>Привет, вот список доступных отелей!</h1>
        <ul>
            {hotels.map(el => {
                return <li key={el.id}>
                    <Link to={{
                        pathname: `/hotels/${el.id}`}}><h3>{el.name}</h3></Link>
                    <p>{el.description}</p>
                    </li>
            })}
        </ul>
    </div>
}
export default Hotels