import React from 'react'

import {
   Container,
   Title,
   ListWrapper,
   List,
   Item,
   NavigateBack,
   NavigateForward
} from './styles'

interface ICarousel {
   title: string
   items: string[]
   maxItems?: number
}

export const Carousel: React.FC<ICarousel> = ({ title, items, maxItems = 5}) => {
   const [visibleItems, setVisibleItems] = React.useState(items.slice(0, maxItems))
   const [currentCount, setCurrentCount] = React.useState(0)
   const [current, setCurrent] = React.useState(0)
   const [previous, setPrevious] = React.useState(items.length - 1)
   const [next, setNext] = React.useState(items[1] ? 1 : 0)
   const [left, setLeft] = React.useState(0)

   const log = () => {
      console.log({ current })
      console.log({ previous })
      console.log({ next })
   }

   const handleNavigateBack = () => {
      setCurrentCount(currentCount - 1)
      setNext(current)
      setCurrent(previous)
      setPrevious(items[previous - 1] ? previous - 1 : items.length - 1)
      setLeft(left - 150)
   }
   
   const handleNavigateForward = () => {
      setCurrentCount(currentCount + 1)
      setPrevious(current)
      setCurrent(next)
      setNext(items[next + 1] ? next + 1 : 0)
      setLeft(left + 150)
   }

   React.useEffect(() => {
      log()
      console.log({ visibleItems })
   }, [current])

   return (
      <Container>
         <Title>
            {title}
         </Title>
         {items?.length > maxItems && (
            <NavigateBack onClick={handleNavigateBack}>
               {'<'}
            </NavigateBack>
         )}
         <ListWrapper>
            <List left={left} current={currentCount}>
               {items?.map((item, index) => {
                  return (
                     <Item key={index}>
                        {item}
                     </Item>
                  )
               })}
            </List>
         </ListWrapper>
         {items?.length > maxItems && (
            <NavigateForward onClick={handleNavigateForward}>
               {'>'}
            </NavigateForward>
         )}
      </Container>
   )
}