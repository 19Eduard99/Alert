import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line react/prop-types
const Alert = ({ type, text }) => {
  const classType = type ? `alert-${type}` : '';

  return (
    <div className={`alert ${classType}`} role="alert">
      {text}
    </div>
  );
};

export default Alert;
