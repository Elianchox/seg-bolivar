const EXTERNAL_PAYMENT_ROUTES: Record<string, string> = {
  "https://portalpagos.davivienda.com/#/cargos/fiduciaria": "/cargos/fiduciaria",
};

export function toInternalPaymentRoute(url: string): string | null {
  const normalized = url.replace(/\/+$/, "");
  return EXTERNAL_PAYMENT_ROUTES[normalized] ?? null;
}