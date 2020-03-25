import React, { useState, useEffect } from 'react';
import './App.css';

import { TalkBlock } from './components/TalkBlock/TalkBlock';
import { FilterInput } from './components/FilterInput/FilterInput';
import { ExclusiveCheckboxGroup } from './components/ExclusiveCheckboxGroup/ExclusiveCheckboxGroup';
import { talksStub } from './consts/talks';
import { Talk } from './models/talk';
import { Language, Tag } from './models/filters';

interface Filters {
    language: Language | null;
    tag: Tag | null;
    text: string | null;
}

function hasActiveFilters(filters: Filters): boolean {
    return !!Object.values(filters).filter(filterValue => !!filterValue).length;
}

const FILTERS_INITIAL_STATE = { language: null, tag: null, text: null };

const App: React.FC = () => {
    const [activeFilters, setActiveFilters] = useState<Filters>(FILTERS_INITIAL_STATE);
    const [filteredTalks, setFilteredTalks] = useState<Array<Talk>>([]);
    useEffect(
        () =>
            setFilteredTalks(
                hasActiveFilters(activeFilters)
                    ? talksStub.filter(
                          talk =>
                              (activeFilters.language ? talk.language === activeFilters.language : true) &&
                              (activeFilters.tag ? talk.tag === activeFilters.tag : true) &&
                              (activeFilters.text
                                  ? talk.title.toLowerCase().includes(activeFilters.text.toLowerCase()) ||
                                    talk.author.toLowerCase().includes(activeFilters.text.toLowerCase())
                                  : true)
                      )
                    : talksStub
            ),
        [activeFilters]
    );

    return (
        <>
            <section className={'filtersContainer'}>
                <ExclusiveCheckboxGroup
                    activeFilter={activeFilters.language}
                    filters={Object.values(Language)}
                    setFilter={(value): void =>
                        setActiveFilters({
                            ...activeFilters,
                            language: value ? Language[value as keyof typeof Language] : null
                        })
                    }
                />
                <ExclusiveCheckboxGroup
                    activeFilter={activeFilters.tag}
                    filters={Object.values(Tag)}
                    setFilter={(value): void =>
                        setActiveFilters({
                            ...activeFilters,
                            tag: value ? Tag[value as keyof typeof Tag] : null
                        })
                    }
                />
                <FilterInput
                    filterValue={activeFilters.text}
                    setFilter={(value): void => setActiveFilters({ ...activeFilters, text: value })}
                />
                <button type={'reset'} onClick={() => setActiveFilters(FILTERS_INITIAL_STATE)}>
                    Reset Filters
                </button>
            </section>
            <section className={'talksContainer'}>
                {filteredTalks.map(talk => (
                    <TalkBlock key={talk.id} talk={talk} />
                ))}
            </section>
        </>
    );
};

export default App;
