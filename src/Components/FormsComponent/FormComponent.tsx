import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './FormComponent.module.scss';

const FormComponent = () => {
  const formAll = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (formAll !== null) {
      const userForm = formAll.current;

      console.log(userForm);

      emailjs.sendForm('service_v85840v', 'template_lku7kb6', userForm, 'w708rAApM2HcJVWv7').then(
        (result) => {
          console.log(result.text);
          if (result.status === 200) {
            formAll.current?.reset();
            alert('Send');
          }
        },
        (error) => {
          alert('Message does not send. Something go wrong try again later.');
          console.log(error.text);
        },
      );
    }
  };

  return (
    <>
    <h2 className={classes.title}>Lets get in touch</h2>
    <div className={classes.fromWraper}>
      
      <form className={classes.formItslef} onSubmit={handleFormSubmit} ref={formAll}>
        <label htmlFor="nameUser">Name</label>
        <input id="nameUser" name="name" type="text" required placeholder="Enter Your Name" />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          required
          placeholder="Enter Your Phone Number"
        />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="Enter Your Email" />

        <label htmlFor="messageText">Your Message</label>
        <textarea
          name="message"
          className={classes.messageInput}
          id="messageText"
          required
          placeholder="Enter Your Message"
        />

        <button className={classes.buttonSend} type="submit">
          Send
        </button>
      </form>
    </div>
    </>
  );
};

export default FormComponent;

