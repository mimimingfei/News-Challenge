import React from 'react'

export default function SingleNews({ thumbnail, headline }) {
    const altText = thumbnail.match(/\/([^/]+)$/)[1];
  
    return (
      <article className="headlines-article">
        <img src={thumbnail} alt={altText} />
        <h2>{headline}</h2>
      </article>
    );
  }
