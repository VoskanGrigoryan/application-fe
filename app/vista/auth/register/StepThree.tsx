import ShelterRegisterForm from "@/src/forms/ShelterRegister";
import { FormValues } from "@/src/interfaces/auth";
import { IStepOptions } from "@/src/interfaces/general";
import { useGetProvincesQuery } from "@/src/redux/features/location/locationApi";
import { useRegisterWizard } from "@/src/zustand/registerWizardStore";
import { useRegisterMutation } from "@/src/redux/features/auth/authApi";
import { useAuthStore } from "@/src/zustand/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MyNotification from "@/src/components/generic/notification";
import { IconX } from "@tabler/icons-react";

// Step 2
const StepThree = ({ setStep }: IStepOptions) => {
  //loading del llamado que trae las provincias (ciudades esta en UserRegister.tsx)
  const { data: provinces, isLoading, isError } = useGetProvincesQuery();

  const formData = useRegisterWizard((state) => state.formData);
  const updateFormData = useRegisterWizard((state) => state.updateFormData);
  const [register, { isLoading: isRegistering }] = useRegisterMutation();
  const { setAuth } = useAuthStore.getState();
  const router = useRouter();
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleRegisterShelter = async (values: any) => {
    try {
      // Combine user and shelter data from the wizard
      const userPayload = {
        name: formData.name,
        last_name: formData.last_name,
        birth_date: formData.birth_date,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        phone_number: formData.phone_number,
        province: formData.province,
        city_id: formData.city_id,
        street: formData.street,
        street_number: formData.street_number,
        floor: formData.floor,
        apartment: formData.apartment,
        access_level: { role: "shelter" as const },
      };
      const shelterPayload = {
        name: values.shelter_name,
        description: values.shelter_description,
        phone_number: values.shelter_phones,
        logo: values.shelter_logo,
        // address fields if not using personal address
        province: values.province || formData.province,
        city_id: values.city_id || formData.city_id,
        street: values.street || formData.street,
        street_number: values.street_number || formData.street_number,
        floor: values.floor || formData.floor,
        apartment: values.apartment || formData.apartment,
      };
      const payload = {
        ...userPayload,
        shelter: shelterPayload,
      };
      const result = await register(payload).unwrap();
      setAuth(result.user, result.accessToken, result.refreshToken);
      sessionStorage.setItem("user", JSON.stringify(result.user));
      sessionStorage.setItem("accessToken", result.accessToken);
      sessionStorage.setItem("refreshToken", result.refreshToken);
      updateFormData({
        ...formData,
        access_level: { role: "shelter" as const },
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
          body={"No se pudo crear la cuenta de refugio! :("}
          color="red"
        />
      )}
      <ShelterRegisterForm
        formData={formData}
        setStep={setStep}
        provinces={provinces}
        isLoadingProvinces={isLoading}
        isErrorProvinces={isError}
        onSubmit={handleRegisterShelter}
      />
    </>
  );
};

export default StepThree;
