import { create } from "zustand";
import { persist } from "zustand/middleware";
import { RegisterWizardState, WizardFormData } from "../interfaces/auth";

const initialFormData: WizardFormData = {
  name: "",
  last_name: "",
  birth_date: new Date(),
  email: "",
  password: "",
  gender: "male",
  phone_number: "",
  province: "",
  city_id: 0,
  street: "",
  street_number: "",
  floor: "",
  apartment: "",

  shelter: {
    name: "",
    description: "",
    phone_number: [],
    shelter_logo: "",
  },
};
export const useRegisterWizard = create<RegisterWizardState>()(
  persist(
    (set, get) => ({
      step: 0,
      tipoDeCuenta: 0,
      formData: initialFormData,
      setStep: (step) => set({ step }),
      setTipoDeCuenta: (tipoDeCuenta) => set({ tipoDeCuenta }),
      updateFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      updateShelterFormData: (data: Partial<WizardFormData>, usePersonalAddress = false) =>
        set((state) => {
          let addressFields = {};
          if (usePersonalAddress) {
            addressFields = {
              province: state.formData.province,
              city_id: state.formData.city_id,
              street: state.formData.street,
              street_number: state.formData.street_number,
              floor: state.formData.floor,
              apartment: state.formData.apartment,
            };
          }
          return {
            formData: {
              ...state.formData,
              ...data,
              ...addressFields,
            },
          };
        }),
      resetWizard: () =>
        set({ step: 0, tipoDeCuenta: 0, formData: initialFormData }),
    }),
    {
      name: "register-wizard",
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
      // override state after rehydration to force step = 0
      merge: (persistedState, currentState) => {
        return {
          ...currentState,
          ...(persistedState as RegisterWizardState),
          step: 0, // always reset step
        };
      },
    }
  )
);
