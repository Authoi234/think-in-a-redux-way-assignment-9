import React from 'react';

const Team = ({team}) => {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold">Team Members</h3>
            <div className="mt-3 space-y-4">
                {team?.map( item => <div className="checkbox-container">
                    <img src={item.avatar} className="team-avater" />
                    <p className="label">{item.name}</p>
                </div>)}
            </div>
        </div>
    );
};

export default Team;