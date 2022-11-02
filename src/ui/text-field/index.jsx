import { useEffect, useRef } from "react";

export default function TextField({
  //where does it say label?, right NOWHERE
  value,
  focused = false,
  onChange = () => {},
}) {
  const ref = useRef();

  useEffect(() => {
    if (!focused) return;
    ref.current?.focus();
  }, [focused]);

  return (
    <div className="">
      <div className="h-[10px]" />
      <input
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-gray-800 rounded-md px-3 py-1"
      />
    </div>
  );
}
