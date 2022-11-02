import Button from "./";
export default function LinkButton({ children, disabled = false, ...rest }) {
  const disabledClassNames = "cursor-not-allowed";
  return (
    <Button className="py-2 px-8 border border-transparent " {...rest}>
      {children}
    </Button>
  );
}
