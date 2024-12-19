import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";

import './RequestBrochureForm.css';

const RequestBrochureForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
//   const [captchaVerified, setCaptchaVerified] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // if (!captchaVerified) {
    //   alert("Please complete the CAPTCHA!");
    //   return;
    // }

    // Simulate form submission
    console.log("Form Submitted", data);
    // Redirect to success route
    navigate("/success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div className="form-group custom-fg">
        <input
          type="text"
          placeholder="Name *"
          {...register("name", { required: "Name is required", pattern: /^[a-zA-Z\s]+$/ })}
          className="form-control"
        />
        {errors.name && <small className="text-danger">{errors.name.message}</small>}
      </div>

      {/* Phone Field */}
      <div className="form-group custom-fg">
        <input
          type="text"
          placeholder="Contact No *"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Enter a valid 10-digit phone number",
            },
          })}
          className="form-control"
        />
        {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
      </div>

      {/* Email Field */}
      <div className="form-group custom-fg">
        <input
          type="email"
          placeholder="Email *"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
          className="form-control"
        />
        {errors.email && <small className="text-danger">{errors.email.message}</small>}
      </div>

      {/* Configuration Field */}
      <div className="form-group custom-fg">
        <select
          {...register("configuration", { required: "Please select a configuration" })}
          className="form-control"
        >
          <option value="" disabled hidden>Select Configuration</option>
          <option value="2 BHK - 1,144 Sq.ft - 1.28 Cr*">2 BHK - 1,144 Sq.ft - 1.28 Cr*</option>
          <option value="3 BHK - 1,336 Sq.ft - 1.5 Cr*">3 BHK - 1,336 Sq.ft - 1.5 Cr*</option>
          <option value="3.5 BHK - 1,872 Sq.ft - 2.14 Cr*">3.5 BHK - 1,872 Sq.ft - 2.14 Cr*</option>
          <option value="4 BHK - 2,553 Sq.ft - 2.88 Cr*">4 BHK - 2,553 Sq.ft - 2.88 Cr*</option>
        </select>
        {errors.configuration && <small className="text-danger">{errors.configuration.message}</small>}
      </div>

      {/* reCAPTCHA */}
      {/* <div className="form-group custom-fg">
        <ReCAPTCHA
          sitekey="your-site-key"
          onChange={() => setCaptchaVerified(true)}
        />
      </div> */}

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100 req-brochure">Submit</button>
    </form>
  );
};

export default RequestBrochureForm;
