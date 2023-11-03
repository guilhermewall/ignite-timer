import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import { ContainerLayout } from "./styles";

const DefaultLayout = () => {
  return (
    <ContainerLayout>
      <Header />
      <Outlet />
    </ContainerLayout>
  );
};

export default DefaultLayout;
