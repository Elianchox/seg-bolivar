"use client";

import { IconRemove } from "@pagos/components/ui/icons/icon-remove";

export interface ActiveFilterTag {
  key: string;
  label: string;
  onRemove: () => void;
}

interface ActiveFilterTagsProps {
  tags: ActiveFilterTag[];
  onClearAll: () => void;
}

const chipClass =
  "flex h-6 items-center justify-center gap-2 rounded-md px-2 text-xs font-normal";

export function ActiveFilterTags({ tags, onClearAll }: ActiveFilterTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="mt-2.5 flex flex-wrap items-center justify-start gap-4">
      {tags.map((tag) => (
        <button
          key={tag.key}
          type="button"
          onClick={tag.onRemove}
          className={`${chipClass} bg-chip-active text-brand-dark`}
        >
          {tag.label}
          <IconRemove size={18} className="shrink-0" />
        </button>
      ))}
      <button
        type="button"
        onClick={onClearAll}
        className={`${chipClass} bg-surface-muted text-ink`}
      >
        Borrar todo
      </button>
    </div>
  );
}