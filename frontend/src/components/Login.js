import { useState } from "react";
// import { useForm } from 'react-hook-form';

export default function Login({ onLogin }) {
  // const {
  //   register,
  //   formState: {
  //     errors,
  //   },
  //   handleSubmit,
  // } = useForm({
  //   mode: 'onChange',
  // });
  const [userData, setUserData] = useState({});

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  function onSuccessfulSubmit(evt) {
    evt.preventDefault();
    const {email, password} = userData;
    if (!email || !password) {
      return
    }
    onLogin(userData);
  }

  return (
    <>
      <div className="auth__container">
        <h2 className="auth__title">Вход</h2>
        <form className="auth__form" onSubmit={onSuccessfulSubmit} noValidate>
          <input
            name="email"
            className="auth__input"
            type="email"
            placeholder="Email"
            value={userData.email || ''}
            onChange={handleInputChange}
            // {...register('email', {
            //   required: 'Поле обязательно для заполнения!',
            //   minLength: {
            //     value: 3,
            //     message: 'Минимум 3 символа'
            //   },
            //   value: userData.email || '',
            //   // onChange: {handleInputChange}
            // })}
          />
          {/* <div style={{height: 40}}>
            {errors?.email && <p>{errors?.email?.message || 'Ошибка!'}</p>}
          </div> */}
          <input
            name="password"
            className="auth__input"
            type="password"
            placeholder="Пароль"
            value={userData.password || ''}
            onChange={handleInputChange}
          />
          <button className="button auth__submit-button" type="submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}
