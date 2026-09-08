"use client";

import { useState } from "react";
import { DEFAULT_PAGE_LIMIT } from "@pagos/constants/pagination";
import { FilterBar } from "@pagos/features/listado-pagos-en-linea/components/filter-bar";
import { OnlinePaymentsGrid } from "@pagos/features/listado-pagos-en-linea/components/online-payments-grid";
import { PageBanner } from "@pagos/features/listado-pagos-en-linea/components/page-banner";
import { Paginator } from "@pagos/features/listado-pagos-en-linea/components/paginator";
import { useOnlinePayments } from "@pagos/features/listado-pagos-en-linea/hooks/use-online-payments";

export function ListadoPagosEnLineaView() {
  const [cityId, setCityId] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(0);

  const { payments, loading, error, totalPages } = useOnlinePayments({
    page,
    limit: DEFAULT_PAGE_LIMIT,
    cityId: cityId || undefined,
    search,
  });

  const handleCityChange = (value: string) => {
    setCityId(value);
    setPage(0);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  return (
    <section className="bg-[#fcfaf9]">
      <PageBanner />
      <div className="p-5" aria-hidden="true" />
      <div className="mx-auto w-full md:max-w-[1320px] px-10 sm:px-20 md:px-20 lg:px-10">
        <FilterBar
          city={cityId}
          search={search}
          onCityChange={handleCityChange}
          onSearchChange={handleSearchChange}
        />
      </div>
      <div className="p-[10px]" aria-hidden="true" />
      <div className="mx-auto w-full md:max-w-[1320px] px-10 sm:px-20 md:px-20 lg:px-10">
        <OnlinePaymentsGrid payments={payments} loading={loading} error={error} />
      </div>
      <div className="mx-auto w-full px-3 md:max-w-[1320px]">
        <div className="p-5" aria-hidden="true" />
        <Paginator page={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      <div className="h-25 w-full bg-white"></div>
    </section>
  );
}
