import { render, screen } from '@testing-library/react';
import CardMovie from ".";

import { expect, it, describe } from 'vitest';

describe('CardMovie', () => {
    it('deve renderizar corretamente', () => {
        const mockMovie = {
            imdbID: '123',
            Title: 'Test Movie',
            Year: '2023',
            Poster: 'http://example.com/test.jpg',
        };

        test('deve renderizar corretamente', () => {
            render(<CardMovie movie={mockMovie} />);
        });
    });
});