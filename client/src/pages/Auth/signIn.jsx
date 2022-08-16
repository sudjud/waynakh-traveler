import auth from './auth.module.sass'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);

    const handleSetLogin = (e) => {
        setLogin(e.target.value)
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value)
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    return (
        <div className={auth.auth}>
            <form>
                <h1>Вход</h1>
                <input type='text' value={login} onChange={handleSetLogin} placeholder="Имя пользователя" />
                <div style={{display : 'flex'}}><input type={passwordShown ? 'text' : 'password'} value={password} onChange={handleSetPass} placeholder="Пароль"></input>
                {passwordShown ? <AiFillEyeInvisible  className={auth.eye} onClick={togglePassword}/> : 
                    <AiFillEye className={auth.eye} onClick={togglePassword}/>}</div>
                <button>Войти</button>
            </form>
            <p>Ещё нет аккаунта? <Link to='/auth'>Зарегистрируйтесь</Link></p>
        </div>
    );
};

export default SignIn;