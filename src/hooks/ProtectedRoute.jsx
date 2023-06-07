import { Navigate } from "react-router-dom";
import useUser from "./useUser"; // Import your custom hook

const withProtection = (Component) => {
  return (props) => {
    const { user } = useUser(); // Use your custom hook

    if (!user.isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
};

export default withProtection;
