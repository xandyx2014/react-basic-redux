import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => (
  <h1>Home</h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

const Playlist = () => (
  <h1>Playlist</h1>
)

const App = () => {
  // Switch rederiza la primera ruta q encuentra y no rederiza los 2 componentes videos
  // en este caso solo renderizaria videos ya que esta como primero en la fila
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={Home} />
        { {/* SOlO ESTA RUTA SE RENDERIZARA PORQ ES LA PRIMERA */}}
        <Route path='/videos' render={Videos} />
        <Route path='/videos' render={Playlist} />
      </Switch>
    </BrowserRouter>
  )
}

export default App