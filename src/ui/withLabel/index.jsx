import { useState } from "react";

//where does it say text-field ? RIGHT! NOWHERE, SINGLE RESPONSIBILITY
export default function withLabel(Component) {
  return function WrappedComponent({ children, focused = false, ...rest }) {
    const [clicked, setClicked] = useState(false);
    return (
      <label className="" onClick={() => setClicked(!clicked)}>
        {children}
        <Component focused={clicked} />
      </label>
    );
  };
}
