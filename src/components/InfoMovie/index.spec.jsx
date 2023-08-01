import { render, screen } from '@testing-library/react';
import InfoMovie from ".";

import { expect, it, describe } from 'vitest';

describe('InfoMovie', () => {
    it('deve renderizar corretamente', () => {
        const mockMovie = {
            imdbID: '123',
            Title: 'Test Movie',
            Year: '2023',
            Rated: 'PG-13',
            Runtime: '120 min',
            imdbRating: '8.5',
            Actors: 'Actor 1, Actor 2',
            Genre: 'Genre 1, Genre 2',
            Director: 'Director 1',
            Plot: 'This is the plot of the movie.',
        };

        test('deve renderizar corretamente', () => {
            render(<InfoMovie movie={mockMovie} />);
        });
    });
});