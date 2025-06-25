import { IStepOptions, WizardFormData } from "@/src/interfaces/register";
import {
  Grid,
  Loader,
  PasswordInput,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePickerInput } from "@mantine/dates";
import MyButton from "@/src/components/generic/button";
import classes from "./Register.module.css";
import { useRegisterWizard } from "@/src/stores/registerWizardStore";
import { useGetProvincesQuery } from "../../../../src/redux/features/location/locationSlice";
import { useGetCitiesQuery } from "../../../../src/redux/features/location/locationSlice";
import { useEffect, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query/react";

// Step 2
const StepTwo = ({ step, setStep, tipoDeCuenta }: IStepOptions) => {
  const updateFormData = useRegisterWizard((state) => state.updateFormData);
  const formData = useRegisterWizard((state) => state.formData);

  const [citySearch, setCitySearch] = useState("");

  const { data: provinces, isLoading, isError } = useGetProvincesQuery();

  //Register form
  const form = useForm<{
    name: string;
    lastname: string;
    birthdate: Date | null;
    email: string;
    password: string;
    gender: string;
    phone: string;
    province: string;
    city: string;
    street: string;
    street_number: string;
    floor: string;
    apartment: string;
  }>({
    initialValues: {
      name: formData.name || "",
      lastname: formData.lastname || "",
      birthdate: formData.birthdate ? new Date(formData.birthdate) : null,
      email: formData.email || "",
      password: formData.password || "",
      gender: formData.gender || "",
      phone: formData.phone || "",
      province: formData.province || "",
      city: formData.city || "",
      street: formData.street || "",
      street_number: formData.street_number || "",
      floor: formData.floor || "",
      apartment: formData.apartment || "",
    },
    validate: {
      name: (val) => (val.trim() === "" ? "Campo requerido" : null),
      lastname: (val) => (val.trim() === "" ? "Campo requerido" : null),
      birthdate: (val) => (val === null ? "Campo requerido" : null),
      email: (val) => (/^\S+@\S+\.\S+$/.test(val) ? null : "Email inválido"),
      password: (val) =>
        val.length < 6
          ? "La contraseña debe tener al menos 6 caracteres"
          : null,
      gender: (val) => (!val ? "Campo requerido" : null),
      phone: (val) =>
        val.trim().length < 10 ? "Número inválido, mínimo 10 caracteres" : null,
      province: (val) => (!val ? "Campo requerido" : null),
      city: (val) => (val.trim() === "" ? "Campo requerido" : null),
      street: (val) => (val.trim() === "" ? "Campo requerido" : null),
      street_number: (val) =>
        /^\d+$/.test(val) ? null : "Número de calle inválido (solo números)",
      floor: (val) => (val.trim() === "" ? "Campo requerido" : null),
      apartment: (val) => (val.trim() === "" ? "Campo requerido" : null),
    },
  });

  const selectedProvince = provinces?.find(
    (p) => p.name === form.values.province
  );

  const handleSubmit = (values: WizardFormData) => {
    updateFormData(values);
    setStep?.(2);
  };

  // Trigger query only if province is selected and citySearch length >= 3
  const {
    data: cities,
    isLoading: citiesLoading,
    isError: citiesError,
  } = useGetCitiesQuery(
    selectedProvince && citySearch.length >= 3
      ? { provinceId: selectedProvince.id, query: citySearch }
      : skipToken,
    { skip: !(selectedProvince && citySearch.length >= 3) }
  );

  // update form city value and search input separately:
  const handleCityInputChange = (value: string) => {
    setCitySearch(value);
    form.setFieldValue("city", value || "");
  };

  useEffect(() => {
    form.setFieldValue("city", "");
    setCitySearch("");
  }, [form.values.province]);

  const cityOptions = selectedProvince && citySearch.length >= 3 && cities
  ? cities.map(city => city.name)
  : [];

  console.log("provinces", provinces);
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Grid gutter={0} p={20}>
        <Grid.Col span={{ base: 12, md: 4 }} p={20}>
          <Stack>
            <TextInput
              label="Nombre"
              placeholder="Juan"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              error={form.errors.name}
              radius="md"
            />

            <TextInput
              label="Apellido"
              placeholder="Perez"
              value={form.values.lastname}
              onChange={(event) =>
                form.setFieldValue("lastname", event.currentTarget.value)
              }
              error={form.errors.lastname}
              radius="md"
            />

            <TextInput
              required
              label="Email"
              placeholder="email.trucho@hotmail.com"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email}
              radius="md"
            />

            <DatePickerInput
              label="Fecha de nacimiento"
              placeholder="Junio 26, 1997"
              value={form.values.birthdate}
              onChange={(value) =>
                form.setFieldValue("birthdate", value as Date | null)
              }
              error={form.errors.birthdate}
            />

            <PasswordInput
              required
              label="Contraseña"
              placeholder="Contraseñasecreta007"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password}
              radius="md"
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }} p={20}>
          <Stack>
            <Select
              allowDeselect={false}
              label="Género"
              placeholder="Hombre"
              data={["Hombre", "Mujer", "Otro", "Empanada de cheese burger"]}
              value={form.values.gender}
              onChange={(value) => form.setFieldValue("gender", value || "")}
              error={form.errors.gender}
            />

            <TextInput
              label="Número de teléfono"
              placeholder="+54 11 23880209"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              error={form.errors.phone}
              radius="md"
            />

            <Select
              label="Provincia"
              placeholder={
                isLoading ? "Cargando provincias..." : "Elegí una provincia"
              }
              data={provinces ? provinces.map((prov) => prov.name) : []}
              value={form.values.province}
              onChange={(value) => form.setFieldValue("province", value || "")}
              error={form.errors.province}
              disabled={isLoading || isError}
            />

            <Select
              label="Ciudad"
              placeholder="Ingrese al menos 3 caracteres"
              searchable
              value={form.values.city}
              onSearchChange={handleCityInputChange}
              onChange={(value) => form.setFieldValue("city", value || "")}
              data={cityOptions}
              error={form.errors.city}
              radius="md"
              disabled={!form.values.province}
              rightSection={citiesLoading ? <Loader size="xs" /> : null}
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }} p={20}>
          <Stack>
            <TextInput
              label="Calle"
              placeholder="Av. Corrientes"
              value={form.values.street}
              onChange={(event) =>
                form.setFieldValue("street", event.currentTarget.value)
              }
              error={form.errors.street}
              radius="md"
              disabled={!form.values.city}
            />

            <TextInput
              label="Número de calle"
              placeholder="1234"
              value={form.values.street_number}
              onChange={(event) =>
                form.setFieldValue("street_number", event.currentTarget.value)
              }
              error={form.errors.street_number}
              radius="md"
              disabled={!form.values.street}
            />

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
                  form.values.city &&
                  form.values.street &&
                  form.values.street_number
                )
              }
            />

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
                  form.values.city &&
                  form.values.street &&
                  form.values.street_number
                )
              }
            />
          </Stack>
        </Grid.Col>

        <Grid.Col p={20}>
          <div className={classes.buttonsGroup}>
            <MyButton variant={"outline"} onClick={() => setStep?.(0)}>
              Volver atrás
            </MyButton>
            <MyButton type="submit" disabled={!form.isValid()}>
              {tipoDeCuenta === 0 ? "Finalizar" : "Siguiente"}
            </MyButton>
          </div>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default StepTwo;
