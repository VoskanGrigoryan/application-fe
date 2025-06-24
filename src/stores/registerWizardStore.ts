import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RegisterWizardState, WizardFormData } from "../interfaces/register";

const initialFormData: WizardFormData = {
  name: "",
  lastname: "",
  birthdate: new Date(),
  email: "",
  password: "",
  gender: "",
  phone: "",
  province: "",
  city: "",
  street: "",
  street_number: "",
  floor: "",
  apartment: "",
};

export const useRegisterWizard = create<RegisterWizardState>()(
  persist(
    (set) => ({
      step: 0,
      tipoDeCuenta: 0,
      formData: initialFormData,
      setStep: (step) => set({ step }),
      setTipoDeCuenta: (tipoDeCuenta) => set({ tipoDeCuenta }),
      updateFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      resetWizard: () =>
        set({ step: 0, tipoDeCuenta: 0, formData: initialFormData }),
    }),
    {
      name: "register-wizard", // key for localStorage
    }
  )
);
