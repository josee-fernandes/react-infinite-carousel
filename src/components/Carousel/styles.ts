import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   grid-template-areas:
      '.. TT ..'
      'NB LW NF'
   ;
   grid-template-columns: min-content auto min-content;
   width: 100%;
   padding: 1rem;
`

export const Title = styled.h3`
   grid-area: TT;
   font-size: 1.5rem;
   font-weight: bold;
   padding: 1rem;
`

export const ListWrapper = styled.div`
   grid-area: LW;
   overflow: hidden;
`

interface IList {
   left: number
   current: number
}

export const List = styled.ul<IList>`
   position: relative;
   left: calc(${props => 
      `${-props.left}px`}
      + ${props => `${-props.current}rem`});
   padding: 1rem;
   display: flex;
   flex-wrap: none;
   align-items: center;
   gap: 1rem;
   overflow: hidden;
   transition: all 0.2s ease;
`

export const Item = styled.li`
   display: grid;
   place-items: center;
   min-width: 150px;
   width: 150px;
   height: 80px;
   color: #fff;
   background-color: #7a48b3;
   border-radius: 5px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   transition: all 0.2s ease;

   &:hover {
      transform: scale(1.05);
   }
`

export const NavigateBack = styled.button`
   grid-area: NB;
   place-self: center;
   width: 40px;
   height: 40px;
   background-color: #7a48b3;
   border-radius: 50%;
   color: #fff;
   font-weight: bold;
   border: none;
   cursor: pointer;
`

export const NavigateForward = styled.button`
   grid-area: NF;
   place-self: center;
   width: 40px;
   height: 40px;
   background-color: #7a48b3;
   border-radius: 50%;
   color: #fff;
   font-weight: bold;
   border: none;
   cursor: pointer;
`