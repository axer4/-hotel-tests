import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import authSelectors from "../../redux/authSelectors";
import { changeBalance } from "../../redux/authReducers";
function HotelsRoom () {
    const {id} = useParams();
    const [rooms,setRooms] = useState([]);
    const balance = useSelector(authSelectors.getBalance);
    const getRooms = async () => {
        try {
            const {data} = await axios.get(`hotels/${id}`)
            return setRooms(data.rooms)
        }
        catch (error) {
            console.log(error)
        }
    }
useEffect(() => {
    getRooms()
},[]);
const reserveRoom = (cost) => {
  if(balance < cost) {
      alert("У вас недостаточно средств")
  }
  else { 
     alert("Номер успешно заказан")
  }
}
    return <div>
        <h1>Номера в отеле</h1>
        <ul>
            {rooms.map(el => {
                return <li>
                    <h3>Тип номера: {el.type}</h3>
                     <p>Номер : {el.number}</p>
                     <p>Цена за сутки : {el.price}</p>
                     {el.isBussy ? (<p style={{backgroundColor:'red'}}>Забронирован</p>)
                     :
                     (<p style={{backgroundColor:'green'}}>Доступен</p>)}
                     {el.isBussy ? 
                     <button disabled>Заказать номер</button> 
                    :
                    <button onClick={() => reserveRoom(el.price)}>Заказать номер</button>
                    }
                </li>
            })}
        </ul>
    </div>
}
export default HotelsRoom;