"use client";

import { useForm } from "@mantine/form";
import { WizardFormData } from "../interfaces/auth";
import MyButton from "../components/generic/button";
import { IStepOptions } from "../interfaces/general";
import {
  Checkbox,
  FileInput,
  Grid,
  Stack,
  TagsInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useState, useEffect } from "react";
import classes from "@/app/vista/auth/register/Register.module.css";
import AddressFields from "./AddressFields";

interface IShelterRegisterFormProps extends IStepOptions {
  formData: Partial<WizardFormData>;
  provinces?: { id: number; name: string }[];
  isLoadingProvinces: boolean;
  isErrorProvinces: boolean;
  onSubmit: (values: WizardFormData) => Promise<void>;
}

// Local type for form values with city_id as string
interface ShelterFormValues extends Omit<WizardFormData, 'city_id' | 'shelter'> {
  city_id: string;
  shelter: {
    name: string;
    description: string;
    phone_number: string[];
    shelter_logo: string;
  };
}

const ShelterRegisterForm = ({
  formData,
  setStep,
  provinces,
  isLoadingProvinces,
  isErrorProvinces,
  onSubmit,
}: IShelterRegisterFormProps) => {
  const [mismaDir, setMismaDir] = useState(true);

  const form = useForm<ShelterFormValues>({
    initialValues: {
      name: formData.name || "",
      last_name: formData.last_name || "",
      birth_date: formData.birth_date || null,
      email: formData.email || "",
      password: formData.password || "",
      gender: formData.gender || "male",
      phone_number: formData.phone_number || "",
      shelter: {
        name: formData.shelter?.name || "",
        description: formData.shelter?.description || "",
        phone_number: formData.shelter?.phone_number || [],
        shelter_logo: formData.shelter?.shelter_logo || "",
      },
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
      shelter: {
        name: (val: string) => val.trim().length < 2 ? "Nombre muy corto" : null,
        description: (val: string) =>
          val.trim().length === 0
            ? "Descripción requerida"
            : val.length > 500
            ? "Máximo 500 caracteres"
            : null,
        phone_number: (val: string[]) =>
          val.length === 0 ? "Ingresá al menos un teléfono" : null,
        shelter_logo: (val: string) => (val ? null : "Seleccioná un logo o imagen"),
      },
      province: (val: string) =>
        !mismaDir && val.trim() === "" ? "Campo requerido" : null,
      city_id: (val: string) =>
        !mismaDir && val.trim() === "" ? "Campo requerido" : null,
      street: (val: string) =>
        !mismaDir && val.trim() === "" ? "Campo requerido" : null,
      street_number: (val: string) =>
        !mismaDir && /^\d+$/.test(val) ? null : !mismaDir
        ? "Número de calle inválido"
        : null,
      floor: (val: string) =>
        !mismaDir && val.trim() === "" ? "Campo requerido" : null,
      apartment: (val: string) =>
        !mismaDir && val.trim() === "" ? "Campo requerido" : null,
    },
  });

  useEffect(() => {
    if (mismaDir) {
      form.setFieldValue("province", "");
      form.setFieldValue("city_id", "");
      form.setFieldValue("street", "");
      form.setFieldValue("street_number", "");
      form.setFieldValue("floor", "");
      form.setFieldValue("apartment", "");
    }
  }, [mismaDir]);

  return (
    <form onSubmit={form.onSubmit((values) => {
      onSubmit({
        ...values,
        city_id: Number(values.city_id), // convert to number for WizardFormData
      } as unknown as WizardFormData);
    })}>
      <Grid gutter={0} p={20}>
        <Grid.Col span={{ base: 12, md: 6 }} p={{ base: 0, md: 20 }}>
          <Stack>
            <TextInput
              required
              label="Nombre del refugio"
              placeholder="Patitas Felices"
              {...form.getInputProps("shelter.name")}
              radius="md"
            />

            <Textarea
              required
              resize="vertical"
              size="md"
              radius="xs"
              label="Descripción"
              placeholder="Somos un refugio enfocado en rescates... (hasta 500 caracteres)"
              {...form.getInputProps("shelter.description")}
            />

            <TagsInput
              required
              acceptValueOnBlur={false}
              maxTags={3}
              label="Teléfonos de contacto"
              placeholder="Podes ingresar hasta tres"
              {...form.getInputProps("shelter.phone_number")}
            />

            <FileInput
              required
              label="Logo o imagen del refugio"
              description="Tené en cuenta que se usará como logo mini"
              placeholder="logo.jpg"
              {...form.getInputProps("shelter.shelter_logo")}
            />

            <div className={classes.buttonsGroup}>
              <MyButton
                variant="outline"
                onClick={() => setStep?.(1)}
                style={{ width: "180px", marginRight: 20 }}
              >
                Volver atrás
              </MyButton>
              <MyButton
                type="submit"
                disabled={!form.isValid()}
                style={{ width: "180px" }}
              >
                Finalizar
              </MyButton>
            </div>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} p={{ base: 0, md: 20 }}>
          <Stack style={{ marginTop: 26 }}>
            <Checkbox
              style={{ paddingBottom: 14 }}
              onChange={(e) => setMismaDir(e.currentTarget.checked)}
              checked={mismaDir}
              label="Es la misma dirección que la personal"
              color="violet"
              size="sm"
            />
            {!mismaDir && (
              <AddressFields
                form={form}
                provinces={provinces}
                isLoadingProvinces={isLoadingProvinces}
                isErrorProvinces={isErrorProvinces}
              />
            )}
          </Stack>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default ShelterRegisterForm;
