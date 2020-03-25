import React from 'react';

import './FilterInput.css';

interface FilterInputProps {
    filterValue: string | null;
    setFilter: (value: string) => void;
}

export const FilterInput: React.FC<FilterInputProps> = ({ filterValue, setFilter }) => {
    return (
        <input
            className={'filterInput'}
            type={'text'}
            value={filterValue || ''}
            onChange={(e: React.FormEvent<HTMLInputElement>): void => setFilter(e.currentTarget.value)}
        />
    );
};
