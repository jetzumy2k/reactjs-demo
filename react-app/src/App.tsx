import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      {isShow === true && (
        <Alert type="alert-primary" isDimissible={true}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <Button
            type="button"
            styleClass="btn-close"
            dataDismiss="alert"
            ariaLabel="Close"
            onClickButton={() => setIsShow(false)}
          />
        </Alert>
      )}
      <Button
        type="button"
        styleClass="btn btn-success"
        onClickButton={() => setIsShow(true)}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
