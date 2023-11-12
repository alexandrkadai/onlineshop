import React from 'react';
import Header from '../Components/Header';
import FormComponent from '../Components/FormComponent';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="paddingValue">
      <Header />
      <FormComponent />
    </div>
  );
};

export default ContactPage;
