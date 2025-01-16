import { Blog } from "./components/Blog/Blog"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { MainPage } from "./components/MainPage/MainPage"
import { Projetos } from "./components/Projetos/Projetos"

function App(): JSX.Element {
  return( 
    <>
      <Header />
      <MainPage />
      <Blog />
      <Projetos />
      <Footer />
    </>
  )
}



export default App
