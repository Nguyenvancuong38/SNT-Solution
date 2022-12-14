import React, { useState } from 'react';
import { loginApi } from '../../api';
import ButtonCustom from '../../component/Button';
import styles from './index.module.scss';

function Login({ functionChangeToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState('Vui lòng nhập UserName và Password.');

    const handleSubmit = async () => {
        if (username === 'admin' && password === '123456') {
            setMessage('');
            setUsername('');
            setPassword('');
            const result = await loginApi();
            await localStorage.setItem('jwt_token', result.data.access_token);
        } else {
            setMessage('UserName hoặc Password Bạn nhập không đúng.');
        }
        if (localStorage.getItem('jwt_token')) {
            functionChangeToken(false);
        }

    };

    return (
        <div className={`row ${styles.container}`}>
            <div className={`l-6 ${styles.container_content}`}>
                <div className={styles.container_content_heading}>
                    <h1 className={styles.container_content_heading_text}>WELCOME</h1>
                </div>
                <div className={styles.container_content_description}>
                    <p className={styles.container_content_description_text}>This is my test (Nguyen Van Cuong). I did the test for 3 days. but the real time I finished it was about 16 hours. Due to limited time, my test was not really good. but I also tried a lot.
                        Thank you for allowing me to take this test. Hope you will check it out and let me know the results.
                    </p>
                    <p>UserName and Password to login:</p>
                    <p className={styles.container_login_content_message}>UserName: admin</p>
                    <p className={styles.container_login_content_message}>Password: 123456</p>
                </div>
            </div>
            <div className={`l-6 ${styles.container_login}`}>
                <div className={styles.container_login_heading}>
                    <h1 className={styles.container_login_heading_text}>LOGIN</h1>
                </div>
                <div className={styles.container_login_content}>
                    <div className={styles.container_login_content_label}>
                        <label htmlFor="id">ID: </label>
                    </div>
                    <input className={styles.container_login_content_input} type="text" id="id" name="id" onChange={(e) => setUsername(e.target.value)} value={username} />
                    <div className={styles.container_login_content_label}>
                        <label htmlFor="secret">SECRET: </label>
                    </div>
                    <input className={styles.container_login_content_input} type="text" id="secret" name="secret" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <p className={styles.container_login_content_message}>{message}</p>
                    <ButtonCustom type="button" nameButton="Login" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
};
export default Login;