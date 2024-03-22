import { Link } from "react-router-dom";

const LinkButton: React.FC<{ buttonText: string; linkAddress: string }> = ({
  buttonText,
  linkAddress,
}) => {
  return (
    <Link className="link-button" to={linkAddress}>
      {buttonText}
    </Link>
  );
};

export default LinkButton;
