export const validateForm = ({ formData }) => {
  const { name, email, password, confirmPassword, terms, gender } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const error = {};

  // Name validation
  if (!name.trim()) {
    error.name = "Name is required";
  } else if (name.length < 6) {
    error.name = "Name is too short";
  }

  // Email validation
  if (!email.trim()) {
    error.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    error.email = "Invalid email address";
  }

  // Password validation
  if (!password.trim()) {
    error.password = "Password is required";
  } else if (password.length < 8) {
    error.password = "Password must be at least 8 characters";
  }
  
  // Confirm Password validation
  if (!confirmPassword.trim()) {
    error.confirmPassword = "Please confirm your password";
  } else if (password !== confirmPassword) {
    error.confirmPassword = "Passwords do not match";
  }

  // Gender
  if (!gender) {
    error.gender = "Please select your gender";
  }

  // Terms
  if (!terms) {
    error.terms = "You must agree to the terms";
  }
  return error;
};
