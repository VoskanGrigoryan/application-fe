import { AdoptionFilterSelectList } from "@/src/arrays/adoptionFilter";
import { Button, Grid, Paper, Select } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

interface ISelectFiltro {
  label?: string;
  placeholder: string;
  data: string[];
  defaultValue?: string;
}

const SelectFiltro = ({
  placeholder,
  data,
}: ISelectFiltro) => {
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
  return (
    <Paper shadow="md" withBorder p="md" style={{ marginBottom: 20 }}>
      <Grid>
        {AdoptionFilterSelectList.map((item) => {
          return <SelectFiltro key={item.label} {...item} />;
        })}
        <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 2 }}>
          <Button
          fullWidth
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
             rightSection={<IconSearch size={14} />}
          >
            Buscar
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
