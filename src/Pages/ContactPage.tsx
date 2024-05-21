import React from 'react';
import Header from '../Components/Header';
import FormComponent from '../Components/FormsComponent/FormComponent';

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="paddingValueChildren">
      <FormComponent />
    </div>
  );
};

export default ContactPage;
