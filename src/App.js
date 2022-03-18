import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/SignIn';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* Adicionar react-toastify para notificar o usuário sobre o processo */}
      <ToastContainer />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
