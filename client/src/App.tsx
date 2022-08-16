import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global-style/global-style';
import { persistor, store } from './redux/store';
import { AppThemeProvider } from './context-api/theme-api/ThemeAppContext';
import { PersistGate } from 'redux-persist/integration/react';

import { Inbox } from './pages/Inbox';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/inbox' element={<Inbox />} />
              <Route path='/today' element={<h1>Today</h1>} />
              <Route path='/upcoming' element={<h1>upcoming</h1>} />
              <Route path='*' element={<Navigate to='/inbox' replace={true} />} />
            </Routes>
            <GlobalStyle />
          </BrowserRouter>
        </AppThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
