import React, { useState } from "react";
import { DxcPassword } from "@dxc-technology/halstack-react";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <p>
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          margin="medium"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Password"
          clearable
          onChange={onChange}
          margin="medium"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Non clearable password"
          onChange={onChange}
          margin="medium"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Help password"
          clearable
          onChange={onChange}
          margin="medium"
          helperText="Help message"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Error password"
          error="Error message"
          clearable
          onChange={onChange}
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) - Strict{" "}
        </h4>
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With min length 5 and max length 10 - Strict
        </h4>
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          margin={{ left: "medium", right: "medium" }}
          length={{ min: "5", max: "10" }}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) and minimum length 5 and maximum length 10 - Strict
        </h4>
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          margin={{ left: "medium", right: "medium" }}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          length={{ min: "5", max: "10" }}
        />
      </p>
    </>
  );
}

export default App;
