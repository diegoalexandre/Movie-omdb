import { render, screen } from '@testing-library/react';
import LoadingMovies from ".";

import { expect, it, describe } from 'vitest';

describe('LoadingMovies', () => {
    it('deve renderizar corretamente', () => {
        test('deve renderizar corretamente', () => {
            render(<LoadingMovies />);

            const loadingImage = screen.getByRole('img', { name: /loading/i });

            expect(loadingImage).toBeInTheDocument();
            expect(loadingImage).toHaveAttribute('src', 'src/assets/loader.gif');
        });
    });
});