import React from 'react'

import {
   Container,
   Title,
   ListWrapper,
   List,
   Item,
   Content,
   NavigateBack,
   NavigateForward
} from './styles'

interface ICarousel {
   title: string
   items: string[]
   thumbOrientation?: 'horizontal' | 'vertical'
}

export const Carousel: React.FC<ICarousel> = ({ title, items, thumbOrientation = 'horizontal' }) => {
   const [direction, setDirection]  = React.useState<number>(-1)
   const [transform, setTransform] = React.useState<string>('translateX(0)')
   const [transition, setTransition] = React.useState<string>('all 0.3s ease')

   const [width] = React.useState(thumbOrientation === 'horizontal' ? '300px' : '175px')
   const [height] = React.useState(thumbOrientation === 'vertical' ? '200px' : '100px')

   const listRef = React.useRef<HTMLUListElement>(null)

   const handleNavigateBack = () => {
      if (direction === -1) {
         listRef.current?.appendChild(listRef.current?.firstElementChild as HTMLElement)
         
         setDirection(1)
      }

      setTransform(`translateX(${width})`)
   }
   
   const handleNavigateForward = () => {
      if (direction === 1) {
         listRef.current?.prepend(listRef.current?.lastElementChild as HTMLElement)
         
         setDirection(-1)
      }
      
      setTransform(`translateX(-${width})`)
   }

   const handleTransitionEnd = () => {
      if (direction === -1) {
         listRef.current?.appendChild(listRef.current?.firstElementChild as HTMLElement)
      } else if (direction === 1) {
         listRef.current?.prepend(listRef.current?.lastElementChild as HTMLElement)
      }
      
      setTransition('none')
      setTransform('translateX(0)')

      setTimeout(() => {
         setTransition('all 0.3s ease')
      })
   }

   return (
      <Container>
         <Title>
            {title}
         </Title>
         <NavigateBack onClick={handleNavigateBack}>
            {'<'}
         </NavigateBack>
         <ListWrapper>
            <List
               ref={listRef}
               transform={transform}
               transition={transition}
               onTransitionEnd={handleTransitionEnd}
            >
               {items?.map((item, index) => {
                  return (
                     <Item key={index} width={width} height={height}>
                        <Content>{item}</Content>
                     </Item>
                  )
               })}
            </List>
         </ListWrapper>
         <NavigateForward onClick={handleNavigateForward}>
            {'>'}
         </NavigateForward>
      </Container>
   )
}