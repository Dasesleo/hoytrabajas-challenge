"use client";

import { NumericInputProps } from "@/types/inputs";
import { useCallback } from "react";

export default function NumericInput({
  value,
  onChange,
  id,
  placeholder,
  className,
  autoFocus,
  name,
}: NumericInputProps) {
  const sanitize = useCallback((raw: string) => {
    const digits = raw.replace(/\D+/g, "");
    const trimmed = digits.replace(/^0+(?!$)/, "");
    return trimmed;
  }, []);

  const handleBeforeInput = (
    e: React.FormEvent<HTMLInputElement> & { nativeEvent: InputEvent }
  ) => {
    const data = e.nativeEvent.data;
    if (data == null) return;
    if (!/^\d+$/.test(data)) {
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(sanitize(e.target.value));
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text");
    onChange(sanitize(pasted));
  };

  return (
    <input
      id={id}
      name={name}
      inputMode="numeric"
      pattern="[0-9]*"
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBeforeInput={handleBeforeInput as any}
      onPaste={handlePaste}
      className={className}
      autoFocus={autoFocus}
      aria-label={placeholder ?? "Número"}
    />
  );
}
