import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './FormComponent.module.scss';

const FormComponent = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const formAll = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (nameRef != null && phoneRef != null && emailRef != null && messageRef != null) {
      const nameUser = nameRef.current?.value;
      const phoneUser = phoneRef.current?.value;
      const emailUser = emailRef.current?.value;
      const messageUser = messageRef.current?.value;
      const some = { nameUser, phoneUser, emailUser, messageUser };

      const userForm = formAll.current;

      console.log(userForm);

      emailjs.sendForm('service_v85840v', 'template_lku7kb6', userForm, 'w708rAApM2HcJVWv7').then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    }
  };

  return (
    <div className={classes.fromWraper}>
      <form className={classes.formItslef} onSubmit={handleFormSubmit} ref={formAll}> 
        <label htmlFor="nameUser">Name</label>
        <input
          id="nameUser"
          name="name"
          type="text"
          required
          placeholder="Enter Your Name"
          ref={nameRef}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          required
          placeholder="Enter Your Phone Number"
          ref={phoneRef}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter Your Email"
          ref={emailRef}
        />

        <label htmlFor="messageText">Your Message</label>
        <textarea name="message" 
          className={classes.messageInput}
          id="messageText"
          required
          placeholder="Enter Your Message"
          ref={messageRef}
        />
        
        <button className={classes.buttonSend} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
// make an protection and reqire
