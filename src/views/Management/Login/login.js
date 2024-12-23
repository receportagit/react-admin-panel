import React from 'react';
import { useForm } from 'react-hook-form';
import { IoMdMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    localStorage.setItem('token', 'jaksdhakgrfwhbrdjksaclufgrfehwejdjkasdsıfugyreuwehadjsdsfuraeı');

    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>GİRİS</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <div className="input-box">
              <IoMdMail size={25} color="#333" />
              <input
                placeholder="Mail Adresini Giriniz"
                type="email"
                id="email"
                {...register('email', {
                  required: 'Geçerli bir e-posta adresi girin',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Geçerli olmayan karakterler kullanmayın',
                  },
                })}
              />
            </div>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <div className="input-box">
              <RiLockPasswordFill size={25} color="#333" />
              <input
                placeholder="Şifreyi Giriniz"
                type="password"
                id="password"
                {...register('password', {
                  required: 'Geçerli bir parola girin',
                  minLength: {
                    value: 6,
                    message: 'Şifre en az 6 karakter olmalıdır',
                  },
                })}
              />
            </div>
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>
        <div className="login-footer">
          <Link to="/forgot-password" className="forgot-password">
            Şifrenizi mi unuttunuz?
          </Link>
          <Link to="/register" className="register-link">
            Hesabınız yok mu? <u>Kayıt olun</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
