import React, { ReactNode } from 'react';
import styles from './BaseModalWindow.module.css';

interface BaseModalWindowProps {
  children: ReactNode; 
title:string;
onModalClose: () => void;
}


const BaseModalWindow: React.FC<BaseModalWindowProps> = ({ children, title,onModalClose }) => {
  return (
    <>
    <div onClick={onModalClose} className={styles.backdrop}></div>
    <div className={styles.modal_window__wrapper}>
     <div className={styles.head_wrapper}>
      <h3>{title}</h3>  <button type="button" onClick={onModalClose}>Go Back</button>
      </div>  
      <div className={styles.content_wrapper}>{children}</div>
    </div>
    </>
  );
};

export default BaseModalWindow;