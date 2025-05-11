import { AdoptionFilterSelectList } from "@/src/arrays/adoptionFilter";
import { Grid, Select } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import MyButton from "../generic/button";
import useIsMobile from "@/src/hooks/useIsMobile";
import MyPaper from "../generic/paper";

interface ISelectFiltro {
  label?: string;
  placeholder: string;
  data: string[];
  defaultValue?: string;
}

const SelectFiltro = ({ placeholder, data }: ISelectFiltro) => {
  return (
    <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 2 }}>
      <Select
        checkIconPosition="right"
        placeholder={placeholder}
        data={data}
        allowDeselect
        maxDropdownHeight={200}
        defaultValue={""}
      />
    </Grid.Col>
  );
};

export default function AdoptionFilters() {

  const isMobile = useIsMobile();

  return (
    <MyPaper shadow={!isMobile ? "md" : "none"} withBorder={!isMobile} p={!isMobile ? "md" : 0} style={{ marginBottom: 20 }}>
      <Grid>
        {AdoptionFilterSelectList.map((item) => {
          return <SelectFiltro key={item.label} {...item} />;
        })}
        <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 2 }}>
          <MyButton fullWidth rightSection={<IconSearch size={14} />}>
            Buscar
          </MyButton>
        </Grid.Col>
      </Grid>
    </MyPaper>
  );
}
