import {
  Grid,
  Loader,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAddressFormFields } from "../hooks/useAddressFormFields";

interface Props {
  form: ReturnType<typeof useForm<any>>;
  provinces?: { id: number; name: string }[];
  isLoadingProvinces: boolean;
  isErrorProvinces: boolean;
}

const AddressFields = ({ form, provinces, isLoadingProvinces, isErrorProvinces }: Props) => {
  const {
    cityOptions,
    citySearch,
    setCitySearch,
    citiesLoading,
  } = useAddressFormFields({form, provinces});

  return (
    <>
      <Select
        required
        label="Provincia"
        placeholder={
          isLoadingProvinces
            ? "Cargando provincias..."
            : "Elegí una provincia"
        }
        data={provinces ? provinces.map((prov) => prov.name) : []}
        value={form.values.province}
        onChange={(value) => form.setFieldValue("province", value || "")}
        error={form.errors.province}
        disabled={isLoadingProvinces || isErrorProvinces}
      />

      <Select
        required
        label="Ciudad"
        placeholder="Ingrese al menos 3 caracteres"
        searchable
        value={form.values.city_id}
        onSearchChange={setCitySearch}
        onChange={(value) => form.setFieldValue("city_id", value || "")}
        data={cityOptions}
        error={form.errors.city_id}
        radius="md"
        disabled={!form.values.province}
        rightSection={citiesLoading ? <Loader size="xs" /> : null}
      />

      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <TextInput
            required
            label="Calle"
            placeholder="Av. Corrientes"
            value={form.values.street}
            onChange={(event) =>
              form.setFieldValue("street", event.currentTarget.value)
            }
            error={form.errors.street}
            radius="md"
            disabled={!form.values.city_id}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            required
            label="Número"
            placeholder="1234"
            value={form.values.street_number}
            onChange={(event) =>
              form.setFieldValue("street_number", event.currentTarget.value)
            }
            error={form.errors.street_number}
            radius="md"
            disabled={!form.values.street}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="Piso"
            placeholder="3"
            value={form.values.floor}
            onChange={(event) =>
              form.setFieldValue("floor", event.currentTarget.value)
            }
            error={form.errors.floor}
            radius="md"
            disabled={
              !(
                form.values.province &&
                form.values.city_id &&
                form.values.street &&
                form.values.street_number
              )
            }
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="Departamento"
            placeholder="A"
            value={form.values.apartment}
            onChange={(event) =>
              form.setFieldValue("apartment", event.currentTarget.value)
            }
            error={form.errors.apartment}
            radius="md"
            disabled={
              !(
                form.values.province &&
                form.values.city_id &&
                form.values.street &&
                form.values.street_number
              )
            }
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default AddressFields;
