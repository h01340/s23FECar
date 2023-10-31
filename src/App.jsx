import './App.css'
import Carlist from './components/Carlist'
import { AppBar, Typography } from '@mui/material'

function App() {
  return (
    <>
      <AppBar position="static">
        <Typography variant="h5">
          Car Shop
        </Typography>
      </AppBar>
      <Carlist />
    </>
  )
}

export default App
