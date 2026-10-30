import type { InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Field(props: FieldProps) {
  const { label, ...inputProps } = props;

  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <input {...inputProps} className="rounded border p-2" />
    </label>
  );
} // span : entoure le texte du label; ...inputProps transmet les valeurs des attributs à input
