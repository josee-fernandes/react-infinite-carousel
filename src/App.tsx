import { GlobalStyle } from './styles'

import { Carousel } from './components/Carousel'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Carousel
        title="Filmes"
        items={[
          'Avengers: Endgame',
          'Avengers: Infinity War',
          'Avengers: Age of Ultron',
          'Batman Begins',
          'Batman v Superman: Dawn of Justice',
          'Captain America: Civil War',
          'Deadpool',
          'Deadpool 2',
          'Doctor Strange',
          'Guardians of the Galaxy',
          'Guardians of the Galaxy Vol. 2',
          'Iron Man'
        ]}
      />
      {/* <Carousel
        title="Filmes"
        items={[
          'Avengers: Endgame',
          'Avengers: Infinity War',
          'Avengers: Age of Ultron'
        ]}
      /> */}
    </>
  )
}
