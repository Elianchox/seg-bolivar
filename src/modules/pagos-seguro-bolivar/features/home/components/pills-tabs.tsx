export type HomeTab = "projects" | "contacto";

interface PillsTabsProps {
  activeTab: HomeTab;
  onTabChange: (tab: HomeTab) => void;
}

const tabs = [
  { id: "projects", label: "Nuestros proyectos", panelId: "pills-projects" },
  { id: "contacto", label: "Contacto", panelId: "pills-contacto" },
] as const;

export function PillsTabs({ activeTab, onTabChange }: PillsTabsProps) {
  return (
    <ul role="tablist" className="flex items-center justify-center gap-[0.3rem] overflow-x-auto">
      {tabs.map((tab) => (
        <li key={tab.id} role="presentation">
          <button
            type="button"
            role="tab"
            id={`${tab.panelId}-tab`}
            aria-controls={tab.panelId}
            aria-selected={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`h-[54px] w-[212px] rounded-t-[6px] border-b-[3px] px-6 py-2 text-base font-normal leading-[1.2rem] tracking-[0.08px] outline-none ${
              activeTab === tab.id
                ? "border-cream bg-brand-dark text-white"
                : "border-transparent bg-warm text-brand-dark"
            }`}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}