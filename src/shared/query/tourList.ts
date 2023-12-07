import { gql } from '@apollo/client'

export const GET_TOUR_LIST = gql`
query ExampleQuery {
 rockets {
   id
   description
   name
 }
}

`