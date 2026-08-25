import React from "react";
// import Heading from "../common/Heading";
import InputField from "../ui/InputField";
import Button from "../common/Button";
import SelectField from "../ui/SelectField";
import MessageField from "../ui/MessageField";

const ContactForm = () => {
  return (
    <div className="bg-[#001845] px-[1.5rem] pb-[1.5rem] lg:px-[3.5rem] lg:pb-[3.5rem]">
      {/* <Heading
        textColor="#FFFFFF"
        heading="Leave a Message"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      /> */}
      <div className="grid pt-4 grid-cols-1 my-[1rem] lg:grid-cols-2 gap-[1rem]">
        <InputField label="First Name" placeholder="Enter your first name" />
        <InputField label="Last Name" placeholder="Enter your last name" />
        <InputField label="Email" placeholder="Enter your email" />
        <SelectField
         label="Subject" placeholder="Enter your subject" />
      </div>
      <MessageField label="Message" placeholder="Enter your message" />
      <Button
        name="Send Message"
        className="mt-[2rem] w-full"
        buttonWidth="full"
      />
    </div>
  );
};

export default ContactForm;
