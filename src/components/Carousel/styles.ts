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

interface IListWrapper {
   justifyContent: string
}

export const ListWrapper = styled.div`
   grid-area: LW;
   display: flex;
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
`

interface IList {
   transform: string
   transition: string
}

export const List = styled.ul`
   list-style: none;
   position: relative;
   display: flex;
   flex-wrap: none;
   align-items: center;
   overflow: hidden;
   transform: ${({ transform }: IList) => transform};
   transition: ${({ transition }: IList) => transition};
`

interface IItem {
   width: string
   height: string
}

export const Item = styled.li<IItem>`
   display: grid;
   place-items: center;
   min-width: ${({ width }: IItem) => width};
   width: ${({ width }: IItem) => width};
   min-height: ${({ height }: IItem) => height};
   height: ${({ height }: IItem) => height};
   overflow: hidden;
   /* opacity: 0;
   animation: fadeIn 0.5s ease forwards;

   @keyframes fadeIn {
      from {
         opacity: 0;
      }

      to {
         opacity: 1;
      }
   } */

   /* transition: all 0.2s ease;

   &:hover {
      transform: scale(1.05);
   } */
`

export const Content = styled.div`
   display: grid;
   place-items: center;
   width: 80%;
   height: 80%;
   color: #fff;
   background-color: #7a48b3;
   white-space: nowrap;
   text-overflow: ellipsis;
   border-radius: 7px;
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