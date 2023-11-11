import React from 'react';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div>
      <form>
        <span>Contact</span>

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
        <input id="message" name="messsage" type="text" required placeholder='Enter Your Message'/>
      </form>
    </div>
  );
};

export default ContactPage;
