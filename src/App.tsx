import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/app/Navbar/Navbar';
import { GlobalStyle } from './styles/global-style/global-style';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <main>
          <h1>Todofeito App</h1>
          <Navbar />
          <Routes>
            <Route path='/inbox' element={<h1>Inbox</h1>} />
            <Route path='/today' element={<h1>Today</h1>} />
            <Route path='/upcoming' element={<h1>upcoming</h1>} />
          </Routes>

          <GlobalStyle />
        </main>
      </HashRouter>
    </Provider>
  );
}
