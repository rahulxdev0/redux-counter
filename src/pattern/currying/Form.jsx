import React, { useState } from "react";
import { validateForm } from "./data/form";
import InputField from "../../ui/input-fields/InputField";
import RadioGroup from "../../ui/input-fields/RadioGroup";
import CheckboxField from "../../ui/input-fields/CheckboxField";
import Button from "../../ui/buttons/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    gender: "",
  });
  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (field) => (e) => {
    const { value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [field]: type === "checkbox" ? checked : value,
    }));
  };

  function handleSubmit() {
    const validationErrors = validateForm({ formData });
    setErrorMessages(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    console.log("Form submitted", formData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow px-6 py-8 md:px-8 md:py-10">
        {/* Logo / Brand */}
        <div className="mb-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-semibold">
            RR
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Join us and start your journey today.
          </p>
        </div>

        <div className="space-y-4">
          <InputField
            label="Full Name"
            name="name"
            placeholder="Rahul Kumar"
            value={formData.name}
            onChange={handleChange("name")}
            error={errorMessages.name}
          />

          <InputField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange("email")}
            error={errorMessages.email}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange("password")}
            error={errorMessages.password}
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange("confirmPassword")}
            error={errorMessages.confirmPassword}
          />

          <RadioGroup
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange("gender")}
            error={errorMessages.gender}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />

          <CheckboxField
            name="terms"
            label="I agree to the Terms of Service and Privacy Policy."
            checked={formData.terms}
            onChange={handleChange("terms")}
            error={errorMessages.terms}
          />

          <Button onClick={handleSubmit} variant="primary">
            Sign up
          </Button>
        </div>

        <p className="mt-6 text-center text-xs md:text-sm text-slate-500">
          Already have an account?{" "}
          <button className="font-medium text-slate-900 hover:underline">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Form;
