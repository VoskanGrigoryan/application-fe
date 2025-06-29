"use client";

import { Grid, PasswordInput, Select, Stack, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import MyButton from "../components/generic/button";
import { useForm } from "@mantine/form";
import { FormValues, WizardFormData } from "../interfaces/auth";
import { useEffect } from "react";
import { IStepOptions } from "../interfaces/general";
import classes from "../../app/vista/auth/register/Register.module.css";
import AddressFields from "./AddressFields";

interface IUserRegisterFormProps extends IStepOptions {
  provinces?: { id: number; name: string }[];
  isLoadingProvinces: boolean;
  isErrorProvinces: boolean;
  formData: Partial<WizardFormData>;
  onSubmit: (values: FormValues) => Promise<void>;
}

const UserRegisterForm = ({
  provinces,
  isLoadingProvinces,
  isErrorProvinces,
  formData,
  onSubmit,
  setStep,
  tipoDeCuenta,
}: IUserRegisterFormProps) => {
  const form = useForm<FormValues>({
    initialValues: {
      name: formData.name || "",
      last_name: formData.last_name || "",
      birth_date: formData.birth_date ? new Date(formData.birth_date) : null,
      email: formData.email || "",
      password: formData.password || "",
      gender: formData.gender || "male",
      phone_number: formData.phone_number || "",
      province: formData.province || "",
      city_id:
        formData.city_id !== undefined && formData.city_id !== null
          ? String(formData.city_id)
          : "",
      street: formData.street || "",
      street_number: formData.street_number || "",
      floor: formData.floor || "",
      apartment: formData.apartment || "",
    },
    validate: {
      name: (val) => (val.trim() === "" ? "Campo requerido" : null),
      last_name: (val) => (val.trim() === "" ? "Campo requerido" : null),
      birth_date: (val) => (val === null ? "Campo requerido" : null),
      email: (val) => (/^\S+@\S+\.\S+$/.test(val) ? null : "Email inválido"),
      password: (val) =>
        val.length < 6
          ? "La contraseña debe tener al menos 6 caracteres"
          : null,
      gender: (val) => (!val ? "Campo requerido" : null),
      phone_number: (val) =>
        val.trim().length < 10 ? "Número inválido, mínimo 10 caracteres" : null,
      province: (val) => (!val ? "Campo requerido" : null),
      city_id: (val) => (val.trim() === "" ? "Campo requerido" : null),
      street: (val) => (val.trim() === "" ? "Campo requerido" : null),
      street_number: (val) =>
        /^\d+$/.test(val) ? null : "Número de calle inválido (solo números)",
      floor: (val) => (val.trim() === "" ? "Campo requerido" : null),
      apartment: (val) => (val.trim() === "" ? "Campo requerido" : null),
    },
  });

  // Reset city selection when province changes
  useEffect(() => {
    form.setFieldValue("city_id", "");
  }, [form.values.province]);

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Grid gutter={0} p={20}>
        {/* Datos personales */}
        <Grid.Col span={{ base: 12, md: 4 }} p={{ base: 0, md: 20 }}>
          <Stack>
            <TextInput
              required
              label="Nombre"
              placeholder="Juan"
              {...form.getInputProps("name")}
              radius="md"
            />

            <TextInput
              required
              label="Apellido"
              placeholder="Perez"
              {...form.getInputProps("last_name")}
              radius="md"
            />

            <TextInput
              required
              label="Email"
              placeholder="email.trucho@hotmail.com"
              {...form.getInputProps("email")}
              radius="md"
            />

            <PasswordInput
              required
              label="Contraseña"
              placeholder="Contraseñasecreta007"
              {...form.getInputProps("password")}
              radius="md"
            />
          </Stack>
        </Grid.Col>

        {/* Info adicional */}
        <Grid.Col span={{ base: 12, md: 3 }} p={{ base: 0, md: 20 }}>
          <Stack>
            <DatePickerInput
              required
              label="Fecha de nacimiento"
              placeholder="Junio 26, 1997"
              {...form.getInputProps("birth_date")}
            />

            <Select
              required
              label="Género"
              placeholder="Seleccionar"
              data={[
                { label: "Hombre", value: "male" },
                { label: "Mujer", value: "female" },
                { label: "Otro", value: "other" },
              ]}
              {...form.getInputProps("gender")}
            />

            <TextInput
              required
              label="Número de teléfono"
              placeholder="+54 11 23880209"
              {...form.getInputProps("phone_number")}
              radius="md"
            />
          </Stack>
        </Grid.Col>

        {/* Dirección */}
        <Grid.Col span={{ base: 12, md: 5 }} p={{ base: 0, md: 20 }}>
          <AddressFields
            form={form}
            provinces={provinces}
            isLoadingProvinces={isLoadingProvinces}
            isErrorProvinces={isErrorProvinces}
          />
        </Grid.Col>

        {/* Botones */}
        <Grid.Col pl={{ base: 0, md: 20 }} pt={{ base: 24, md: 10 }}>
          <div className={classes.buttonsGroup}>
            <MyButton
              variant="outline"
              onClick={() => setStep?.(0)}
              style={{ width: "180px", marginRight: 20 }}
            >
              Volver atrás
            </MyButton>
            <MyButton
              type="submit"
              disabled={!form.isValid()}
              style={{ width: "180px" }}
            >
              {tipoDeCuenta === 0 ? "Finalizar" : "Siguiente"}
            </MyButton>
          </div>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default UserRegisterForm;
