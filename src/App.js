import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from './components/Main/MainPage';
import { CharacterCard } from './components/CharacterCard/CharacterCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/details'} element={<CharacterCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
