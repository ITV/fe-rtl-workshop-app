import SavedList from "./components/SavedList";
import AnimalInfo from "./components/AnimalInfo";
import { LikesProvider } from "./contexts/Likes";

const App = () => {
  return (
    <div className="App">
      <LikesProvider>
        <AnimalInfo />
        <SavedList />
      </LikesProvider>
    </div>
  );
};

export default App;
