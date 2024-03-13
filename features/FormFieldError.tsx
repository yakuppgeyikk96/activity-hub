"use client";

interface Props {
  errors?: {
    [key: string]: string[];
  };
  field: string;
}

export default function FormFieldError({ errors, field }: Props) {
  if (!(errors && errors[field])) {
    return null;
  }
  const errorFields = errors[field];

  return (
    <div>
      {errorFields.map((error: string) => (
        <p key={error} className="text-red-500 text-sm font-semibold mt-1 pl-2">
          - {error}
        </p>
      ))}
    </div>
  );
}
