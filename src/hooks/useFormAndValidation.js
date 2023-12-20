import { useState, useCallback } from 'react';

export const useFormAndValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInputValid, setIsInputValid] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = evt => {
    const { name, value, validationMessage, validity } = evt.target;

    setValues(v => ({ ...v, [name]: value }));
    setErrors(e => ({ ...e, [name]: validationMessage }));
    setIsInputValid(v => ({ ...v, [name]: validity.valid }));
    setIsValid(evt.target.form.checkValidity());
  };

  const setValue = useCallback((name, value) => {
    setValues(v => ({ ...v, [name]: value }));
  }, []);

  const reset = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsInputValid({});
      setIsValid(newIsValid);
    },
    [],
  );

  return {
    values,
    handleChange,
    reset,
    errors,
    isInputValid,
    isValid,
    setValue,
  };
};
