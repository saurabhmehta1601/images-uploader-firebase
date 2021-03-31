import UploadForm from './components/UploadForm'
import UploadStatusBar from './components/UploadStatusBar'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <UploadStatusBar />
      <ImageGrid />
     </div>
  );
}

export default App;
