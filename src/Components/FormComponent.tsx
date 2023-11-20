import React from 'react';
import classes from './FormComponent.module.scss';

type Props = {};

const FormComponent = (props: Props) => {
  return (
    <div className={classes.fromWraper}>

      <form className={classes.formItslef}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required placeholder="Enter Your Name" />

        <label htmlFor="tel">Phone</label>
        <input id="tel" name="tel" type="tel" required placeholder="Enter Your Phone Number" />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter Your Phone Number"
        />

        <label htmlFor="message">Your Message</label>
        <input  className={classes.messageInput}id="message" name="messsage" type="textarea"  required placeholder="Enter Your Message" />
        <button className={classes.buttonSend} type="submit">Send</button>
      </form>
    </div>
  );
};


export default FormComponent;
// make an protection and reqire