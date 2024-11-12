import { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#EEEEEE',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", serif;
 }

 body {
  background-color: ${cores.preta};
  color: ${cores.branca};
 }
`
