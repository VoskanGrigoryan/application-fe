import { AdoptionFilterSelectList } from "@/src/arrays/adoptionFilter";
import { Grid, Select } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import MyButton from "../generic/button";
import useIsMobile from "@/src/hooks/useIsMobile";
import MyPaper from "../generic/paper";
import { useForm } from "@mantine/form";
import axios from "axios";

const baseUrlLocal = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

interface ISelectFiltro {
  label: string;
  placeholder: string;
  data: string[];
  defaultValue?: string;
  form: ReturnType<typeof useForm<any>>;
}

const SelectFiltro = ({
  label,
  placeholder,
  data,
  defaultValue = "",
  form,
}: ISelectFiltro) => {
  return (
    <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 2 }}>
      <Select
        placeholder={placeholder}
        data={data}
        allowDeselect
        maxDropdownHeight={200}
        defaultValue={defaultValue}
        {...form.getInputProps(label)}
      />
    </Grid.Col>
  );
};

export default function AdoptionFilters() {
  const isMobile = useIsMobile();

  const adoptionListFilterForm = useForm({
    initialValues: Object.fromEntries(
      AdoptionFilterSelectList.map((item) => [
        item.label,
        item.defaultValue || "",
      ])
    ),
  });

  const handleSearch = () => {
    const values = adoptionListFilterForm.getValues();

    const queryParams = Object.entries(values)
      .filter(([_, value]) => value && value !== "")
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    const fullUrl = `${baseUrlLocal}/pets/filter${
      queryParams ? "?" + queryParams : ""
    }`;

    axios
      .get(fullUrl)
      .then((response) => {
        console.log("Filtered results:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching filtered results:", error);
      });
  };

  return (
    <MyPaper
      shadow={!isMobile ? "md" : "none"}
      withBorder={!isMobile}
      p={!isMobile ? "md" : 0}
      style={{ marginBottom: 20 }}
    >
      <Grid>
        {AdoptionFilterSelectList.map((item) => (
          <SelectFiltro
            key={item.label}
            {...item}
            form={adoptionListFilterForm}
          />
        ))}
        <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 2 }}>
          <MyButton fullWidth onClick={handleSearch}>
            Buscar
          </MyButton>
        </Grid.Col>
      </Grid>
    </MyPaper>
  );
}
