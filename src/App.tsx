import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style/global-style';
import { store } from './redux/store';
import { AppThemeProvider } from './context-api/theme-api/ThemeAppContext';

import { Inbox } from './pages/Inbox';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppThemeProvider>
        <HashRouter>
          <main>
            <Routes>
              <Route path='/inbox' element={<Inbox />} />
              <Route path='/today' element={<h1>Today</h1>} />
              <Route path='/upcoming' element={<h1>upcoming</h1>} />
              <Route path='*' element={<Navigate to='/inbox' replace={true} />} />
            </Routes>
            <GlobalStyle />
          </main>
        </HashRouter>
      </AppThemeProvider>
    </ReduxProvider>
  );
}
