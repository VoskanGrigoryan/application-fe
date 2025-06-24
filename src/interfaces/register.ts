export type IStepOptions = Partial<{
  step: number;
  setStep: (arg0: number) => void;
  tipoDeCuenta: number;
  setTipoDeCuenta: (arg0: number) => void;
}>;

export type WizardFormData = {
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
};

export interface RegisterWizardState {
  step: number;
  tipoDeCuenta: number; // 0 = adopter, 1 = shelter
  formData: WizardFormData;
  setStep: (step: number) => void;
  setTipoDeCuenta: (tipo: number) => void;
  updateFormData: (data: Partial<WizardFormData>) => void;
  resetWizard: () => void;
}
