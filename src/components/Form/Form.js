import './Form.css';

export const Form = ({ name, children, onSubmit }) => {
  return (
    <form name={name} className="form" onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
};
