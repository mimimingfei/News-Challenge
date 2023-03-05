import React from 'react';
import { render } from '@testing-library/react';

export default function Headlines({ data = [] }) {
    const news = data.map((article) => {
        const { thumbnail, headline } = article.fields;
        const { id } = article;
        return (
            <article key={id}>
                <img src={thumbnail} alt={`Thumbnail ${id}`} />
                <h2>{headline}</h2>
            </article>
        );
    });

    return (
        <main>
            {!data.length && <h1>News are loading...</h1>}
            {!!data.length && news}
        </main>
    );
}


