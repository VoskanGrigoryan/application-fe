
export type IStepOptions = Partial<{
  step: number;
  setStep: (step: number) => void;
  tipoDeCuenta: number; // 0 = adopter, 1 = shelter
  setTipoDeCuenta: (tipo: number) => void;
  setNotificationVisible: (arg0: boolean) => void;
}>;
