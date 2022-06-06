import React, { useState } from 'react';
import styles from "../styles/Form.module.css";

const initialValues ={
    userName : "",
    email : "",
    number : "",
    inquiry : ""
}
const activeLabels ={
    userName : false,
    email : false,
    number : false,
    inquiry : false
}
export default function Form(props){
  const [actives, setActives] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [displayMessage, setDisplayMessage] = useState();

  function handleTextChange(e) {
    const {name, value} = e.target;

    setValues({
        ...values,
        [name]:value 
    });
  
    if (e.target.value !== '') {
        setActives({...actives,
            [name]:true});
    } else {
        setActives({...actives,
            [name]:false});
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    const formData={
        'email': values.email,
        'name': values.userName,
        'number': values.number,
        'inquiry': values.inquiry
    };
    var a = JSON.stringify(formData)
    var b = JSON.parse(a);
    console.log('a', a)
    console.log('b', b);
    await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => {
        if(response.status == 200){
            setSubmitted(true);
            setDisplayMessage('Form submitted, we will contact you ASAP.');
        }
        else {
            setSubmitted(false);
            setDisplayMessage('An Error occured. Please try again.');
        }
    });
  }
  
  return (
    <div>
        <div className={styles.formHeading}>
            {props.heading}
        </div>


      <form style={{display: `${!submitted}`}}method="post" onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.floatLabel}>
            <input type="text" value={values.userName} name="userName"
                onChange={(e) => handleTextChange(e)} required></input>
            <label className={ actives.userName ? `${styles.active}` : ""} htmlFor='text'>Name*</label>
        </div>
        <div className={styles.floatLabel}>
            <input type="email" value={values.email} name="email"
                onChange={(e) => handleTextChange(e)} required></input>
            <label className={ actives.email ? `${styles.active}` : ""} htmlFor='email'>Email*</label>
        </div>
        <div className={styles.floatLabel}>
            <input type="tel" minLength="10" value={values.number} name="number"
                onChange={(e) => handleTextChange(e)} required></input>
            <label className={ actives.number ? `${styles.active}` : ""} htmlFor='number'>Phone Number*</label>
        </div>
        <div className={styles.floatLabel}>
            <textarea className={styles.textbox} type="textarea" value={values.inquiry} name="inquiry"
                onChange={(e) => handleTextChange(e)} required></textarea>
            <label className={ actives.inquiry ? `${styles.active}` : ""} htmlFor='inquiry'>What is the Inquiry?*</label>
        </div>
        <button className={styles.submitButton} type="submit">Send Message</button>
        <div className={styles.statusMessage}>{displayMessage}</div>
      </form>
    </div>
  );
}