import { HandPalm, Play } from "phosphor-react";
import {
  StyledHomeContainer,
  StyledCountdownButton,
  StyledStopCountdownButton,
} from "./styles";
import { useContext } from "react";

// import NewCycleForm from "./components/NewCycleForm";
import Countdown from "./components/Countdown";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import NewCycleForm from "./components/NewCycleForm";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1)
    .max(60, "o intervalo precisa ser de no maximo de 60 minutos"),
});

type iNewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<iNewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const handlerCreateNewCycle = (data: iNewCycleFormData) => {
    createNewCycle(data);
    reset();
  };

  const task = watch("task");
  const isSubmitDisabled = !task;
  // 'handlerSubmit' variavel auxiliar para facilitar leitura
  return (
    <StyledHomeContainer>
      <form onSubmit={handleSubmit(handlerCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StyledStopCountdownButton
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24} />
            Interromper
          </StyledStopCountdownButton>
        ) : (
          <StyledCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StyledCountdownButton>
        )}
      </form>
    </StyledHomeContainer>
  );
};

export default Home;
