"use client";

import { useEffect, useRef, useState } from "react";
import { getOnlinePayments } from "@/features/listado-pagos-en-linea/api/get-online-payments";
import type {
  OnlinePayment,
  OnlinePaymentQuery,
} from "@/features/listado-pagos-en-linea/types/online-payment";
import { useDebouncedSearch } from "@/hooks/use-debounced-search";

interface UseOnlinePayments {
  payments: OnlinePayment[];
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  totalPages: number;
}

export function useOnlinePayments(query: OnlinePaymentQuery): UseOnlinePayments {
  const debouncedSearch = useDebouncedSearch(query.search ?? "");

  const [payments, setPayments] = useState<OnlinePayment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const requestRef = useRef(0);

  const { page: queryPage, limit, cityId } = query;

  useEffect(() => {
    const requestId = ++requestRef.current;
    let active = true;

    getOnlinePayments({
      page: queryPage,
      limit,
      cityId,
      search: debouncedSearch,
    })
      .then((data) => {
        if (!active || requestRef.current !== requestId) return;
        setPayments(data.results);
        setTotal(data.total);
        setPage(data.page);
        setTotalPages(data.totalPages);
        setError(null);
      })
      .catch(() => {
        if (!active || requestRef.current !== requestId) return;
        setError("No se pudieron cargar los pagos en línea.");
      })
      .finally(() => {
        if (active && requestRef.current === requestId) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [queryPage, limit, cityId, debouncedSearch]);

  return { payments, loading, error, total, page, totalPages };
}
