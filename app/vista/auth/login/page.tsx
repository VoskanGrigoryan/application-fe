'use client'

import MyButton from "@/src/components/generic/button";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import { useRouter } from "next/navigation";

const LoginView = () => {
  const router = useRouter();
  return (
    <BaseShell>
      Si ya tenes cuenta anda al register moño{" "}
      <MyButton onClick={() => router.push(`/vista/auth/register`)}>
        register
      </MyButton>
    </BaseShell>
  );
};

export default LoginView;
