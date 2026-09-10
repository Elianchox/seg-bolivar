import type { ReactNode } from "react";
import { IconInfoCircle } from "@davivienda-pagos/components/ui/icons/info-circle";
import { Tooltip } from "@davivienda-pagos/components/ui/tooltip";

interface FormItemProps {
  id: string;
  label: string;
  required?: boolean;
  help?: string;
  error?: string;
  children: ReactNode;
}

export function FormItem({ id, label, required = false, help, error, children }: FormItemProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[14px] leading-[22px] text-heading">
        {required && <span className="mr-1 text-brand-soft">*</span>}
        <span>{label}</span>
        {help && (
          <Tooltip title={label} content={help}>
            <span className="ml-1 inline-block p-1 align-middle text-[10px] text-info">
              <IconInfoCircle />
            </span>
          </Tooltip>
        )}
        <span className="ml-[2px] mr-2 hidden min-[480px]:inline">:</span>
      </label>
      <div className="leading-10">{children}</div>
      {error && (
        <div
          id={`${id}-error`}
          role="alert"
          className="min-h-[22px] text-[14px] leading-[21px] text-error"
        >
          {error}
        </div>
      )}
    </div>
  );
}