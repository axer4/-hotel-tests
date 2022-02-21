import styles from './SignUp.module.css'
import { useEffect, useState } from 'react';
import { registerThunk,loginThunk,getCurrentUser} from '../../redux/authOperations';
import { useDispatch,connect } from 'react-redux';
import Modal from '../modal/Modal';
function SignUp ({allUsers,initialUser}) {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalMode,setMode] = useState(false)
  const [data,setData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser())
  },[dispatch])
  const inputHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handlerSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginThunk(user))
    setEmail('');
    setPassword('');
  };
  const handlerRegisterSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk(data));
    toogleModal();
  };
  const toogleModal = () => {
      setMode(!modalMode)
  }
  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email': setData({...data,email:value});
        break;
      case 'password': setData({...data,password:value});
        break;
        case 'name' : setData({...data,name:value});
        break;
        case 'surname': setData({...data,surname:value});
        break;
        case 'fatherName': setData({...data,fatherName:value})
        break;
        case 'balance':setData({...data,balance:value})
        break;
      default:return
    }
  }
    return <div>
        <form action="" onSubmit={handlerSubmit}>
        <label htmlFor="email" className={styles.label}>
          <p className={styles.sign}>Электронная почта:</p>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            onChange={inputHandler}
            value={email}
            placeholder="example@mail.com"
            required
          />
        </label>
        <label htmlFor="password" className={styles.label}>
          <p className={styles.sign}>Пароль:</p>
          <input
          required
            className={styles.input}
            id="password"
            name="password"
            type="password"
            onChange={inputHandler}
            value={password}
            placeholder="************"
          />
        </label>
        <div className={styles.wrap}>
          <button type="submit" className={styles.button}>
            войти
          </button>
          <button
            type="button"
            onClick={toogleModal}
            className={styles.button}
          >
            регистрация
          </button>
        </div>
      </form>
      { modalMode &&
      <Modal 
      onChange={onChangeInputHandler}
      register = {handlerRegisterSubmit}
      onCloseModal = {toogleModal}
      />
       }
    </div>
}
const mapStateToProps = state => {
    return {
        allUsers: state.auth.users,
        initialUser:state.auth.currentUser,}
}
export default connect(mapStateToProps)(SignUp);