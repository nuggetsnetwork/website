import React from 'react'
import { SpinnerRoundOutlined, SpinnerInfinity, SpinnerDiamond, SpinnerRoundFilled } from 'spinners-react';

export const Spinner = () => {
    return (
        <div id="spinner" style={{
            position: 'absolute', top: 0,
            left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 122, cursor: 'pointer'
        }}>
            <SpinnerRoundOutlined size={80} still={false} style={{ position: 'relative', left: '50%', right: '50%', top: '45%' }} thickness={200} color={'#9a5f97'} enabled={true} />

        </div>
    )
}
export const Stop = () => {
    document.getElementById('spinner').style.display = 'none';
}
export const Start = () => {
    document.getElementById('spinner').style.display = 'flex';
}