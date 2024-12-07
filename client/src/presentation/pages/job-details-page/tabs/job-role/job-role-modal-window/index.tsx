import React, { ReactNode } from 'react';
import styles from './JobRoleModalWindow.module.css';

interface JobRoleModalWindowProps {
  children: ReactNode; // Define the type of children prop
title:string;
onModalClose: () => void;
}


const JobRoleModalWindow: React.FC<JobRoleModalWindowProps> = ({ children, title,onModalClose }) => {
  return (
    <>
    <div onClick={onModalClose} className={styles.backdrop}></div>
    <div className={styles.modal_window__wrapper}>
     <div className={styles.head_wrapper}>
      <h3>{title}</h3>  <button onClick={onModalClose}>Go Back</button>
      </div>  
      <div className={styles.content_wrapper}>{children}</div>
    </div>
    </>
  );
};

export default JobRoleModalWindow;