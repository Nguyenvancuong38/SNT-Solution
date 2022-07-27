import React from 'react';
import styles from './index.module.scss';

function ButtonCustom({ nameButton, onClick, type }) {
    return (
        <div>
            <button
                type={type}
                className={styles.btn}
                onClick={onClick}
            >
                {nameButton}
            </button>
        </div>
    );
}

export default ButtonCustom;
