import React from 'react';
import { useForm } from 'react-hook-form';
import { IoMdMail } from 'react-icons/io';
import './forgotPassword.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>MAİL GÖNDER</h2>
        <form className="forgot-password-form" onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" className="forgot-password-button">
            Gönder
          </button>
        </form>
        <div className="forgot-password-footer">
          <p className="forgot-password-sub-text">Şifre değiştirme mail adresine gönderilecektir.</p>
          <Link to="/login" className="register-link">
            <u>Geri</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
