import { About } from './styles'
export default function Sobre(){
  return(
    <>
    <About>
        <p>Node: <span id="node-version"></span></p>
        <p>Chrome: <span id="chrome-version"></span></p>
        <p>Electron: <span id="electron-version"></span></p>
      </About>
    </>
  )
}