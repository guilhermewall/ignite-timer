import { Play } from "phosphor-react";
import {
  StyledCountdownContainer,
  StyledFormContainer,
  StyledHomeContainer,
  StyledSeparator,
  StyledCountdownButton,
  StyledMinutesAmountInput,
  StyledTaskInput,
} from "./styles";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import * as zod from "zod"

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5).max(60, "o intervalo precisa ser de no maximo de 60 minutos")
})

const Home = () => {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema)
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreateNewCycle = (data: any) => {
    console.log(data);
  };

  const task = watch("task");
  const isSubmitDisabled = !task;
  // 'handlerSubmit' variavel auxiliar para facilitar leitura
  
  return (
    <StyledHomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <StyledFormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <StyledTaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu project"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="project 1" />
            <option value="project 1" />
            <option value="project 1" />
            <option value="project 1" />
            <option value="ola 1"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <StyledMinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </StyledFormContainer>

        <StyledCountdownContainer>
          <span>0</span>
          <span>0</span>
          <StyledSeparator>:</StyledSeparator>
          <span>0</span>
          <span>0</span>
        </StyledCountdownContainer>

        <StyledCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StyledCountdownButton>
      </form>
    </StyledHomeContainer>
  );
};

export default Home;
