const ErrorMessage: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return (
    <div className="error-block">
      <p className="error-block__text">{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
