export default function Button({
  children,
  disabled = false,
  className,
  onClick = () => {},
  ...rest
}) {
  const defaultClassNames = "cursor-pointer shadow-md";
  return (
    <button
      onClick={(e) => !disabled && onClick(e)}
      disabled={disabled}
      className={`${defaultClassNames} ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
