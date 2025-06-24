import MyButton from "@/src/components/generic/button";
import { IStepOptions } from "@/src/interfaces/register";

// Step 2
const StepThree = ({ step, setStep, tipoDeCuenta }: IStepOptions) => {
  return (
      <div>
        <MyButton variant={"outline"} onClick={() => setStep?.(1)}>
          Volver atrás
        </MyButton>
        <MyButton >Finalizar!</MyButton>
      </div>
  );
};

export default StepThree;
