import { useContext } from "react";
import {
  StyledHistoryContainer,
  StyledHistoryList,
  StyledStatus,
} from "./styled";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const History = () => {
  const { cycle } = useContext(CyclesContext);

  return (
    <StyledHistoryContainer>
      <h1>Meu historico</h1>

      <StyledHistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycle.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.task}</td>
                  <td>{elem.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(elem.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {elem.finishedDate && (
                      <StyledStatus statuscolor="green">Concluído</StyledStatus>
                    )}

                    {elem.interruptedDate && (
                      <StyledStatus statuscolor="red">
                        Interrompido
                      </StyledStatus>
                    )}

                    {!elem.finishedDate && !elem.interruptedDate && (
                      <StyledStatus statuscolor="yellow">
                        Em Andamento
                      </StyledStatus>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledHistoryList>
    </StyledHistoryContainer>
  );
};

export default History;
