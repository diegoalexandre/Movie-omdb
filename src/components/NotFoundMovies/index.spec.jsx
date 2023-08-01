import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import moviesNotFound from '../../assets/movies_not_found.png'
import NotFoundMovies from ".";

import { expect, it, describe } from 'vitest';


describe('NotFoundMovies', () => {
    it('deve renderizar corretamente', () => {
        test('deve renderizar corretamente a imagem e os textos', () => {
            render(<NotFoundMovies />);

            const notFoundImage = screen.getByRole('img', { name: /notfound/i });
            const imageElement = screen.getByAltText("Here's an offer you can't refuse");
            const headingElement = screen.getByRole('heading', { name: /don't know what to search\?/i });
            const paragraphElement = screen.getByText("Here's an offer you can't refuse");

            expect(loadingImage).toHaveAttribute('src', moviesNotFound);
            expect(imageElement).toBeInTheDocument();
            expect(headingElement).toBeInTheDocument();
            expect(paragraphElement).toBeInTheDocument();
        });
    });
});