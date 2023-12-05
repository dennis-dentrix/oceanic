/* eslint-disable react/prop-types */
import Error from "./Error";

export function InputField({ error, label, children }) {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      {label && (
        <label
          className="font-medium tracking-wider"
          htmlFor={children.props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}
