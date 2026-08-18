import { WarningCircle } from "@phosphor-icons/react/ssr";

type FieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea" | "select";
  options?: readonly string[];
  required?: boolean;
  error?: string;
  autoComplete?: string;
};

const baseInputClass =
  "w-full rounded-[14px] border bg-white px-4 py-3 font-[family-name:var(--font-body)] text-base text-navy placeholder:text-steel/60 focus-visible:outline-2 focus-visible:outline-pulse";

function inputClass(error?: string) {
  return `${baseInputClass} ${error ? "border-critical" : "border-mist"}`;
}

export function Field({ label, name, type = "text", options, required, error, autoComplete }: FieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block font-[family-name:var(--font-body)] text-sm font-semibold text-navy">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-critical">
            {" "}
            *
          </span>
        ) : null}
      </label>

      <div className="mt-2">
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            required={required}
            rows={5}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={inputClass(error)}
          />
        ) : type === "select" ? (
          <select
            id={id}
            name={name}
            required={required}
            defaultValue=""
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={inputClass(error)}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            required={required}
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={inputClass(error)}
          />
        )}
      </div>

      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-critical">
          <WarningCircle size={15} weight="fill" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
