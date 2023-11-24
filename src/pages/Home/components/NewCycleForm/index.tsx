import {
  StyledFormContainer,
  StyledMinutesAmountInput,
  StyledTaskInput,
} from "./styles";

import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <StyledFormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <StyledTaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu project"
        disabled={!!activeCycle}
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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </StyledFormContainer>
  );
};

export default NewCycleForm;
