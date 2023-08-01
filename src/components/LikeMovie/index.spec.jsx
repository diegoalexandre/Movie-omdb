import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LikeMovie from ".";

import { expect, it, describe } from 'vitest';


describe('LikeMovie', () => {
    it('deve renderizar corretamente', () => {
        test('deve renderizar corretamente com o ícone vazio de coração', () => {
            render(<LikeMovie movie={{ imdbID: '123' }} />);

            const emptyHeartIcon = screen.getByTestId('empty-heart-icon');

            expect(emptyHeartIcon).toBeInTheDocument();
        });
    });

    it('ícone de coração preenchido', () => {
        test('deve renderizar corretamente com o ícone de coração preenchido', () => {
            const storedFavorites = JSON.stringify(['123']);
            jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(storedFavorites);

            render(<LikeMovie movie={{ imdbID: '123' }} />);

            const filledHeartIcon = screen.getByTestId('filled-heart-icon');

            expect(filledHeartIcon).toBeInTheDocument();
        });
    });
    it('alternar entre os ícones', () => {

        test('deve alternar entre os ícones ao clicar', () => {
            render(<LikeMovie movie={{ imdbID: '123' }} />);

            const likeMovieDiv = screen.getByTestId('like-movie');

            expect(likeMovieDiv).toContainElement(screen.getByTestId('empty-heart-icon'));

            fireEvent.click(likeMovieDiv);

            expect(likeMovieDiv).toContainElement(screen.getByTestId('filled-heart-icon'));

            fireEvent.click(likeMovieDiv);

            expect(likeMovieDiv).toContainElement(screen.getByTestId('empty-heart-icon'));
        });
    });
});