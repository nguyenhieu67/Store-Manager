import { useMemo } from "react";

export const useFilter = (
  data,
  filterKey,
  filterValue,
  defaultValue = "All",
) => {
  return useMemo(() => {
    if (filterValue === defaultValue) return data;
    return data.filter(
      (item) => item[filterKey]?.toLowerCase() === filterValue.toLowerCase(),
    );
  }, [data, filterKey, filterValue, defaultValue]);
};
