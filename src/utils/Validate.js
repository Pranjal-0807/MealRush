const Validate = (email, password) => {
  const validEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const validPassword = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(password);

  if (!validEmail) {
    return "email is not valid";
  }
  if (!validPassword) {
    return "Password is not valid";
  }

  return null;
};

export default Validate;
