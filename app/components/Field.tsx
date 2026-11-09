import type { InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Field(props: FieldProps) {
  const { label, ...inputProps } = props;

  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <input
        {...inputProps}
        className="w-full min-w-0 rounded border border-slate-400 bg-white p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
      />
    </label>
  );
} // span : entoure le texte du label; ...inputProps transmet les valeurs des attributs à input
