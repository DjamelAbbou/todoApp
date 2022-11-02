import Button from "./";

export default function PrimaryButton({
  children,
  busy,
  disabled = false,
  ...rest
}) {
  const disabledClassNames = "cursor-not-allowed";
  const busyClassName = "border-red-500 bg-red-600";
  const defaultClassNames =
    "py-2 px-8 border rounded-lg transition-all ease-in-out delay-150 duration-300";
  return (
    <Button
      className={`${
        busy
          ? busyClassName
          : disabled
          ? disabledClassNames
          : "border-blue-400 bg-blue-500"
      } ${defaultClassNames}`}
      {...rest}
    >
      {children}
    </Button>
  );
}
