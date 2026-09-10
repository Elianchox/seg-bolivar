"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, Ref } from "react";
import { IconArrowDown } from "@davivienda-pagos/components/ui/icons/arrow-down";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  hasError?: boolean;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  ref?: Ref<HTMLButtonElement>;
}

export function Select({
  id,
  options,
  value,
  onChange,
  onBlur,
  placeholder,
  hasError = false,
  disabled = false,
  className = "",
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
  ref,
}: SelectProps) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selectedLabel = selectedIndex >= 0 ? options[selectedIndex].label : "";

  function openMenu() {
    if (disabled) return;
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
    onBlur?.();
  }

  function selectOption(index: number) {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    closeMenu();
  }

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    itemRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        if (!open) {
          openMenu();
        } else if (event.key === "ArrowDown") {
          setActiveIndex((prev) => Math.min(prev + 1, options.length - 1));
        } else if (event.key === "ArrowUp") {
          setActiveIndex((prev) => Math.max(prev - 1, 0));
        } else {
          selectOption(activeIndex);
        }
        break;
      case "Home":
        if (open) {
          event.preventDefault();
          setActiveIndex(0);
        }
        break;
      case "End":
        if (open) {
          event.preventDefault();
          setActiveIndex(options.length - 1);
        }
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          closeMenu();
        }
        break;
      case "Tab":
        if (open) closeMenu();
        break;
      default:
        break;
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id={id}
        ref={ref}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={
          open && activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined
        }
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-invalid={hasError || undefined}
        disabled={disabled}
        onClick={() => {
          if (open) setOpen(false);
          else openMenu();
        }}
        onKeyDown={onTriggerKeyDown}
        className={`relative h-8 w-full cursor-pointer rounded-[4px] border bg-surface pl-[11px] pr-[24px] text-left text-[14px] leading-8 outline-none transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-text-disabled ${
          hasError
            ? "border-error hover:border-error focus:border-error-focus focus:shadow-[0_0_0_2px_rgba(251,67,74,0.2)]"
            : "border-border hover:border-[#8f9ba6] focus:border-[#a8aeb3] focus:shadow-[0_0_0_2px_rgba(143,155,166,0.2)]"
        } ${className}`}
      >
        <span className={selectedLabel ? "text-text" : "text-text-disabled"}>
          {selectedLabel || placeholder}
        </span>
        <IconArrowDown
          className={`pointer-events-none absolute right-[11px] top-1/2 -translate-y-1/2 text-[12px] text-text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 top-full z-[1050] mt-1 max-h-[250px] w-full overflow-auto rounded-[4px] bg-surface py-1 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.15)] outline-none"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${listId}-option-${index}`}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              role="option"
              aria-selected={option.value === value}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => selectOption(index)}
              className={`block cursor-pointer truncate px-3 py-[5px] text-[14px] font-normal leading-[22px] text-text transition-[background-color] duration-300 ${
                index === activeIndex ? "bg-[#ffedeb]" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
