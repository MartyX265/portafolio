import Container from "../container/Container";
import Label from "../label/Label";
import { SelectProps } from "./types";

export default function Select({
  id,
  name,
  label,
  labelStyle,
  options,
  className,
  onChange,
  value,
}: SelectProps) {
  return (
    <Container type="div" className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={id} className={labelStyle} text={label} />
      )}
      <select id={id} name={name} className={`${className}`} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}
