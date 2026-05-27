
import './App.css';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
      <header>
        <h1>⚖️ Alimentos al Día</h1>
        <p>Asistente legal ciudadano para pensión de alimentos en Perú</p>
      </header>
      <main>
        <Chat />
      </main>
      <footer>
        <small>Información meramente orientativa. No reemplaza el asesoramiento de un abogado.</small>
      </footer>
    </div>
  );
}

export default App;