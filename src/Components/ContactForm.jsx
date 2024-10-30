import React, { useState } from "react";
// import emailjs from '@emailjs/browser';

const ContactForm = () => {

    // const [emailError, setEmailError] = useState('');
    // const validateEmail = (e) => {
    //   const email = e.target.value;
  
    //   if (validator.isEmail(email)) {
    //     setEmailError("valid Email :)");
    //   }else {
    //     setEmailError("Please Enter valid Email.");
    //   }
    // };  

    const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };

    return (
        <>
        <div className='flex flex-wrap'>
            <div className='flex flex-col'>
                <div className='bg-[#f3f0ed] p-3 rounded-xl h-auto min-w-[250px]'>
                {/* <p className='pb-3'>Like what you see? Let's chat!</p>
                  <input className='h-8 mx-1 pl-2 py-1 bg-[#eae6e2] flex' placeholder="Email Address" type='text' id='userEmail' 
                    onChange={(e) => validateEmail(e)}
                  />{" "}
                  <span className='text-red-500 font-bold'>{emailError}</span> */}
                  <div className="flex flex-wrap">
                    <form onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" disabled={isSubmitting} />
                        {stateMessage && <p>{stateMessage}</p>}
                    </form>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactForm;