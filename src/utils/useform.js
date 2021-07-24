import { useState } from "react";

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      setInputs({});
    }
    e.target.reset();
    callback();
  };

  const handleChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  return { handleChange, handleSubmit, inputs };
};

export default useForm;
