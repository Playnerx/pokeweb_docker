import React from 'react';

const StatsBar = ({ bgcolor, progress, height }) => {
    const maxProgress = 260;
    const progressPercentage = (progress / maxProgress) * 100;

    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 5,
    };

    const Childdiv = {
        height: '100%',
        width: `${progressPercentage}%`,
        backgroundColor: bgcolor,
        borderRadius: 5,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center'
    };

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    };

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}`}</span>
            </div>
        </div>
    );
};

export default StatsBar;