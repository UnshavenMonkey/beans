import AppHeader from "./components/app-header/app-header.tsx";
import s from "./App.module.scss";
import AppContent from "./components/app-content/app-content.tsx";

function App() {
  return (
    <div className={s.appWrapper}>
      <AppHeader />
      <AppContent />
    </div>
  );
}

export default App;
