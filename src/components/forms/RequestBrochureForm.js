import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './RequestBrochureForm.css';

const RequestBrochureForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      navigate("/success");
    })
    .catch(error => alert(error));
  };

  return (
    <form
      name="request-brochure"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)} // React Hook Form handles submission
    >
      {/* Hidden input for Netlify form name */}
      <input type="hidden" name="form-name" value="request-brochure" />

      {/* Honeypot field for spam protection */}
      <div style={{ display: "none" }}>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </div>
      
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

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100 req-brochure">Submit</button>
    </form>
  );
};

export default RequestBrochureForm;
