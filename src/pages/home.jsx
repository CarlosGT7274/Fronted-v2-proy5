import Header from "../components/header";
import Login from "../pages/login";
import useToken from '../hooks/useToken'

export default function Home() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Header />
      <h1 className="w-screen h-screen flex justify-center items-center">
        Hello world!
      </h1>
    </>
  );
}
