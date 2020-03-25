import React from 'react';

import { Talk } from '../../models/talk';
import './TalkBlock.css';

interface TalkBlockProps {
    talk: Talk;
}

export const TalkBlock: React.FC<TalkBlockProps> = ({ talk }) => {
    return (
        <div className={'talkBlock'}>
            <b>{talk.title}</b>
            <b>{talk.author}</b>
            <span>{`${talk.language}/${talk.tag}`}</span>
        </div>
    );
};
