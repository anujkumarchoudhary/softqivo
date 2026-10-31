import React from "react";
// import Heading from "../common/Heading";
import Button from "../common/Button";
import SelectField from "../ui/SelectField";
import MessageField from "../ui/MessageField";
import InputField from "../ui/InputField";

const ContactForm = () => {
  return (
    <div className="bg-dark/10 rounded-[20px] px-[1.5rem] pb-[1.5rem] lg:px-[3.5rem] lg:pb-[3.5rem]">
 
      <div className="grid pt-4 grid-cols-1 my-[1rem] lg:grid-cols-2 gap-[1rem]">
        <InputField label="Name" placeholder="Enter your name" />
        <InputField label="Phone" placeholder="Enter your phone number" />
        <InputField label="Email" placeholder="Enter your email" />
        <SelectField
         label="Subject" placeholder="Enter your subject" />
      </div>
      <MessageField label="Message" placeholder="Enter your message" />
      <Button
        name="Send Message"
        className="mt-[2rem] flex justify-center text-center w-full"
        buttonWidth="full"
      />
    </div>
  );
};

export default ContactForm;
