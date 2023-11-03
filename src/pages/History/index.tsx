import {
  StyledHistoryContainer,
  StyledHistoryList,
  StyledStatus,
} from "./styled";

const History = () => {
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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <StyledStatus statuscolor="red">Interrompido</StyledStatus>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <StyledStatus statuscolor="green">Concluído</StyledStatus>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <StyledStatus statuscolor="yellow">Em andamento</StyledStatus>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <StyledStatus statuscolor="yellow">Em andamento</StyledStatus>
              </td>
            </tr>
          </tbody>
        </table>
      </StyledHistoryList>
    </StyledHistoryContainer>
  );
};

export default History;
