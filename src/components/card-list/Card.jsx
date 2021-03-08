import React from 'react';
import './card-list.css';

export const Card = (props) => {
    return (
        <div className="card my-3" style={{ width: "16rem", height: "18rem" }}
            toggle="tooltip" placement="top" title={props.friends.display}
        >
            <div className="card-img-top">
                <img
                    id="img"
                    alt="cast"
                    src={props.friends.URL}
                />
            </div>
            <div className="card-body">
                <span className="card-title">{props.friends.name}</span>
            </div>
        </div>
    )
}