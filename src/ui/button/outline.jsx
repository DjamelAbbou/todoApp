import Button from "./";

export default function OutlineButton({ children, disabled = false, ...rest }) {
  const disabledClassNames = "cursor-not-allowed";
  return (
    <Button
      className={`${
        disabled ? disabledClassNames : ""
      } "py-2 px-8 border border-white bg-transparent"
      }`}
      {...rest}
    >
      {children}
    </Button>
  );
}
