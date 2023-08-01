import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBackBtn from ".";

import { expect, it, describe } from 'vitest';


describe('NavBackBtn', () => {
    it('deve renderizar corretamente', () => {
        test('deve renderizar corretamente o ícone de seta para trás', () => {
            render(<NavBackBtn />);

            const backButtonIcon = screen.getByTestId('back-button-icon');

            expect(backButtonIcon).toBeInTheDocument();
        });
    });

    it('função useNavigate ao clicar no botão', () => {
        test('deve chamar a função useNavigate ao clicar no botão', () => {
            const mockNavigate = jest.fn();
            useNavigate.mockReturnValue(mockNavigate);

            render(<NavBackBtn />);

            const backButtonDiv = screen.getByTestId('back-button');

            fireEvent.click(backButtonDiv);

            expect(mockNavigate).toHaveBeenCalledWith(-1);
        });
    });
});
