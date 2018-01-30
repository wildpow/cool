import React from 'react';
import GraphImg from 'graphcms-image';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

const NewStuff = ({ data: { loading, error, images } }) => {
  if (error) return <h1>Shit Cra Cra {console.log(error)}</h1>
  if(!loading) {
      return (
	      <div>
	  {images.map((image, handle) => (
        <GraphImg key={handle} image={image} maxWidth={100} maxheight={100}/>
      ))};
        </div>
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