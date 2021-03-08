import React from 'react';
import { Card } from './Card';

export const CardList = (props) => {
    const finalRow = [];
    for (let i = 0; i < props.friends.length / 3; i++) {
        let friendsRow = props.friends.slice(i * 3, (i + 1) * 3);
        finalRow.push(
            <div key={props.friends.id} className="d-flex justify-content-around flex-wrap">{
                friendsRow.map((j) => (
                    <Card key={props.friends.id} friends={j} />
                ))
            }</div>
        )
    }
    return (
        <div>
            {finalRow}
        </div>
    )
}