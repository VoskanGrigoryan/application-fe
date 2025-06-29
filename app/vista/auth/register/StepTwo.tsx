import { IStepOptions } from "@/src/interfaces/general";
import { useState } from "react";

import MyNotification from "@/src/components/generic/notification";
import { IconX } from "@tabler/icons-react";
import UserRegisterForm from "@/src/forms/UserRegister";
import { useRegisterMutation } from "@/src/redux/features/auth/authApi";
import { useGetProvincesQuery } from "@/src/redux/features/location/locationApi";
import { useRegisterWizard } from "@/src/zustand/registerWizardStore";
import { useRouter } from "next/navigation";
import { FormValues } from "@/src/interfaces/auth";
import { useAuthStore } from "@/src/zustand/authStore";

const StepTwo = ({ setStep, tipoDeCuenta }: IStepOptions) => {
  const [notificationVisible, setNotificationVisible] = useState(false);

  //Loading del registro de usuario
  const [register, { isLoading: isRegistering }] = useRegisterMutation();

  //loading del llamado que trae las provincias (ciudades esta en UserRegister.tsx)
  const { data: provinces, isLoading, isError } = useGetProvincesQuery();

  const formData = useRegisterWizard((state) => state.formData);
  const updateFormData = useRegisterWizard((state) => state.updateFormData);
  const router = useRouter();

  const handleRegister = async (values: FormValues) => {
    if (tipoDeCuenta === 1) {
      // Only save form data and move to next step for shelter
      updateFormData({
        ...values,
        city_id: Number(values.city_id),
        access_level: { role: "public" as const },
      });
      setStep?.(2);
      return;
    }
    try {
      const payload = {
        ...values,
        birth_date: values.birth_date ? new Date(values.birth_date) : null,
        city_id: Number(values.city_id),
        access_level: { role: "public" as const },
      };

      const result = await register(payload).unwrap();

      const { setAuth } = useAuthStore.getState();
      setAuth(result.user, result.accessToken, result.refreshToken);

      sessionStorage.setItem("user", JSON.stringify(result.user));
      sessionStorage.setItem("accessToken", result.accessToken);
      sessionStorage.setItem("refreshToken", result.refreshToken);

      updateFormData({
        ...values,
        city_id: Number(values.city_id),
        access_level: { role: "public" as const },
      });

      router.push("/");
    } catch {
      setNotificationVisible(true);
      setTimeout(() => setNotificationVisible(false), 5000);
    }
  };

  return (
    <>
      {notificationVisible && (
        <MyNotification
          icon={<IconX size={20} />}
          title={"Error"}
          body={"No se pudo crear la cuenta! :("}
          color="red"
        />
      )}

      <UserRegisterForm
        provinces={provinces}
        isLoadingProvinces={isLoading}
        isErrorProvinces={isError}
        formData={formData}
        onSubmit={handleRegister}
        setStep={setStep}
        tipoDeCuenta={tipoDeCuenta}
      />
    </>
  );
};

export default StepTwo;
