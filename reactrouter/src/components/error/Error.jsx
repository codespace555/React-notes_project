import { useRouteError } from "react-router-dom";

function Error() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang!</div>;
  }

  export default Error