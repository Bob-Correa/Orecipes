import Header from './components/Header';
import MainPage from './components/MainPage';
import NavBar from './components/Nav';

function App() {
  return (
    <div className="flex min-h-screen">
      <NavBar />
      <div className="p-4 w-3/4 bg-white">
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
