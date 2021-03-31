import UploadForm from './components/UploadForm'
import UploadStatusBar from './components/UploadStatusBar'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'
import ProgressContext from './context/ProgressContext'
import { useContext } from 'react'

function App() {
  const {progress} =useContext(ProgressContext)

  console.log("progress is ",progress);
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
