import Header from "../components/header";
import Login from "../pages/login";
import useToken from '../hooks/useToken'
import Productos from './productos'

export default function Home() {

  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  //
  return (
    <>
      <Header />
      <Productos />
    </>
  );
}
