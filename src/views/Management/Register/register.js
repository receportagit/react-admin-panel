import React from 'react';
import { useForm } from 'react-hook-form';
import { IoMdMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>KAYIT</h2>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Şifre Oluşturun"
                type="password"
                id="password"
                {...register('newPassword', {
                  required: 'Geçerli bir parola girin',
                  minLength: {
                    value: 6,
                    message: 'Şifre en az 6 karakter olmalıdır',
                  },
                })}
              />
            </div>
            {errors.newPassword && <p className="error-message">{errors.newPassword.message}</p>}
          </div>
          <div className="input-group">
            <div className="input-box">
              <RiLockPasswordFill size={25} color="#333" />
              <input
                placeholder="Şifreyi Onaylayınız"
                type="password"
                id="password"
                {...register('confirmPassword', {
                  required: 'Geçerli bir parola girin',
                  minLength: {
                    value: 6,
                    message: 'Şifre en az 6 karakter olmalıdır',
                  },
                  validate: (value) => {
                    if (watch('newPassword') !== value) {
                      return 'Parolanız Eşleşmiyor';
                    }
                  },
                })}
              />
            </div>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" className="register-button">
            Giriş Yap
          </button>
        </form>
        <div className="register-footer">
          <Link to="/login" className="register-link">
            <u>Geri</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
