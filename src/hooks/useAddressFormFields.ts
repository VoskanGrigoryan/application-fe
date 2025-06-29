import { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { skipToken } from "@reduxjs/toolkit/query";
import { FormValues } from "../interfaces/auth";
import { useGetCitiesQuery } from "../redux/features/location/locationApi";

interface UseAddressFormFieldsProps {
  form: ReturnType<typeof useForm<FormValues>>;
  provinces?: { id: number; name: string }[];
}

export function useAddressFormFields({
  form,
  provinces,
}: UseAddressFormFieldsProps) {
  const [citySearch, setCitySearch] = useState("");

  const selectedProvince = provinces?.find(
    (p) => p.name === form.values.province
  );

  const { data: cities, isLoading: citiesLoading } = useGetCitiesQuery(
    selectedProvince && citySearch.length >= 3
      ? { provinceId: selectedProvince.id, query: citySearch }
      : skipToken,
    { skip: !(selectedProvince && citySearch.length >= 3) }
  );

  const cityOptions =
    selectedProvince && citySearch.length >= 3 && cities
      ? cities.map((city) => ({
          value: city.id.toString(),
          label: city.name,
        }))
      : [];

  useEffect(() => {
    form.setFieldValue("city_id", "");
    setCitySearch("");
  }, [form.values.province]);

  return {
    cityOptions,
    citySearch,
    setCitySearch,
    citiesLoading,
  };
}
