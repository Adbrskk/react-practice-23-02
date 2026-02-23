import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

export default function RegistrationForm() {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <div className="wrapper">
      <h1 className="title">Welcome to website</h1>

      <div className="card">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <label>Логин:</label>
            <div>
              <input {...register("login", { required: true })} />
              {errors.login && <p className="error">Введите логин</p>}
            </div>
          </div>

          <div className="row">
            <label>Email:</label>
            <div>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              {errors.email && (
                <p className="error">Введите корректный email</p>
              )}
            </div>
          </div>

          <div className="row">
            <label>Пароль:</label>
            <div>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && (
                <p className="error">Минимум 6 символов</p>
              )}
            </div>
          </div>

          <button type="submit" className="btn">
            Регистрация
          </button>
        </form>
      </div>
    </div>
  );
}