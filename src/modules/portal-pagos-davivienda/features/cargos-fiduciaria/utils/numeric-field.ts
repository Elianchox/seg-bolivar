import type { UseFormRegisterReturn } from "react-hook-form";

type RegisterChangeEvent = Parameters<NonNullable<UseFormRegisterReturn["onChange"]>>[0];

interface NumericFieldOptions {
  allowAlpha?: boolean;
  maxLength?: number;
}

export function numericField(
  field: UseFormRegisterReturn,
  { allowAlpha = false, maxLength }: NumericFieldOptions = {},
): UseFormRegisterReturn {
  return {
    ...field,
    onChange: (event: RegisterChangeEvent) => {
      const input = event.target as HTMLInputElement;
      let next = allowAlpha ? input.value : input.value.replace(/\D/g, "");
      if (maxLength !== undefined) next = next.slice(0, maxLength);
      if (next !== input.value) input.value = next;
      return field.onChange(event);
    },
  };
}
