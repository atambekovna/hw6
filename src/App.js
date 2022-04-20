import PhotoItem from './components/PhotoItem';
import PhotoId from './components/PhotoId';
import PhotoTitle from './components/PhotoTitle';
import './App.css';


function App() {

  const photos =
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    }

  return (
    <div className="App">
      <PhotoId id={photos.id}/>
      <PhotoItem img={photos.url}/>
      <PhotoTitle title={photos.title}/>
    </div>
  );
}

export default App;
