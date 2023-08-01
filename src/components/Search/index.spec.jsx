import { render, screen } from '@testing-library/react';
import Search from ".";

import  { expect, it, describe } from 'vitest';

describe('Search', () => {
    it('should render correctly', () => {
        render(<Search onSearch={() => {}} />);
        expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument();
    });
});