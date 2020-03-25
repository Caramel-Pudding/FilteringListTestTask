import React from 'react';

import './ExclusiveCheckboxGroup.css';

interface ExclusiveCheckboxGroupProps {
    filters: Array<string>;
    activeFilter: string | null;
    setFilter: (value: string | null) => void;
}

export const ExclusiveCheckboxGroup: React.FC<ExclusiveCheckboxGroupProps> = ({ filters, activeFilter, setFilter }) => {
    return (
        <ul className={'checkboxList'}>
            {filters.map(filter => (
                <li key={`li-${filter}`}>
                    <input
                        key={`checkbox-${filter}`}
                        checked={filter === activeFilter}
                        type={'checkbox'}
                        value={filter}
                        onClick={(e: React.FormEvent<HTMLInputElement>): void =>
                            setFilter(
                                e.currentTarget.value === activeFilter ? null : e.currentTarget.value.toLowerCase()
                            )
                        }
                    />
                    {filter}
                </li>
            ))}
        </ul>
    );
};
