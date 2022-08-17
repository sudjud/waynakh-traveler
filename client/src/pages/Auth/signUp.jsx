import auth from "./auth.module.sass";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/userSlice";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password_1, setPassword_1] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetMail = (e) => {
    setMail(e.target.value);
  };

  const handleSetPassword1 = (e) => {
    setPassword_1(e.target.value);
  };

  const handleSetPassword2 = (e) => {
    setPassword_2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegisterUser = () => {
    dispatch(addUser({ name, password_1, mail })).then((data) => {
      if (!data.error) {
        navigate("/login", { replace: true });
      }
    });
  };

  return (
    <div className={auth.auth}>
      <form onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <input
          type="text"
          value={name}
          onChange={handleSetName}
          placeholder="Имя пользователя"
        />
        <input
          type="text"
          value={mail}
          onChange={handleSetMail}
          placeholder="Почта"
        />
        <div style={{ display: "flex" }}>
          <input
            type={passwordShown ? "text" : "password"}
            value={password_1}
            onChange={handleSetPassword1}
            placeholder="Пароль"
          />
          {passwordShown ? (
            <AiFillEyeInvisible className={auth.eye} onClick={togglePassword} />
          ) : (
            <AiFillEye className={auth.eye} onClick={togglePassword} />
          )}
        </div>
        <div style={{ display: "flex" }}>
          <input
            type={passwordShown2 ? "text" : "password"}
            value={password_2}
            onChange={handleSetPassword2}
            placeholder="Подтверждение пароля"
          />
          {passwordShown2 ? (
            <AiFillEyeInvisible
              className={auth.eye}
              onClick={togglePassword2}
            />
          ) : (
            <AiFillEye className={auth.eye} onClick={togglePassword2} />
          )}
          {error && <div className={auth.warningSignUp}>* Это имя уже используется</div>}
        </div>
        <p>
          Нажимая на кнопку «Зарегистрироваться» Вы даёте согласие на{" "}
          <Link to="/auth">обработку своих персональных данных</Link>{" "}
        </p>
        <button onClick={handleRegisterUser}>Зарегистрироваться</button>
      </form>
      <p>
        Уже есть аккаунт? <Link to="/login">Войдите</Link>
      </p>
    </div>
  );
};

export default SignUp;
