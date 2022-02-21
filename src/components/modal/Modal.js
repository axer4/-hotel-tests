function Modal ({onChange,register,toogleModal}) {
    return <div>
        <form type="submit" onSubmit={register}>
            <label htmlFor="email">Email :</label>
            <input id="email" placeholder="email" name="email" onChange={onChange} required/>
            <label htmlFor="password">Password :</label>
            <input id="password" placeholder="password" name="password" onChange={onChange} required/>
            <label htmlFor="name">Name :</label>
            <input id="name" placeholder="name" name="name" onChange={onChange} required/>
            <label htmlFor="surname">Surname :</label>
            <input id="surname" placeholder="surname" name="surname" onChange={onChange} required/>
            <label htmlFor="fatherName">Fathers Name :</label>
            <input id="fatherName" placeholder="fatherName" name="fatherName" onChange={onChange} required/>
            <label htmlFor="balance">Balance : </label> 
            <input id="balance" placeholder="balance" name="balance" onChange={onChange} required/>
            <button onClick={toogleModal}>Зарегистрироваться</button>
        </form>
    </div>
}
export default Modal;