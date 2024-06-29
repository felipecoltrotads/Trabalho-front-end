import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import { ChakraProvider } from "@chakra-ui/react";
import Listagem from "./pages/Listagem";
import Detalhes from "./pages/Detalhes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/listagem",
    element: <Listagem />
  },
  {
    path: "/pokemon/:id",
    element: <Detalhes />
  }
])

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
