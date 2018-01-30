import React from 'react';
import GraphImg from 'graphcms-image';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledGraphImg = styled(GraphImg)`
width: 250px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`

const NewStuff = ({ data: { loading, error, images } }) => {
  if (error) return <h1>Shit Cra Cra {console.log(error)}</h1>
  if(!loading) {
      return (
	      <Wrapper>
	  {images.map((image, handle) => (
        <StyledGraphImg key={handle} image={image} maxWidth={500} withWebp={true} fit="clip"/>
      ))}
        </Wrapper>
        )
      }
      return <h1>loading</h1>
    }

    export const query = gql`
      query allAssets {
        images: allAssets {
        handle
        width
        height
    }
  }
`;

export default graphql(query)(NewStuff);