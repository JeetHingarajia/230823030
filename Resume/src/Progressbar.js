import React from 'react'

export const Progressbar = ({ fill = 5 }) => {
    return (
        <div style={{ display: "flex", justifyContent: 'space-between', width: '80px' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: fill >= 1 ? 'blue' : '', border: '1px solid blue', borderRadius: '50%' }}></div>
            <div style={{ width: '10px', height: '10px', backgroundColor: fill >= 2 ? 'blue' : '', border: '1px solid blue', borderRadius: '50%' }}></div>
            <div style={{ width: '10px', height: '10px', backgroundColor: fill >= 3 ? 'blue' : '', border: '1px solid blue', borderRadius: '50%' }}></div>
            <div style={{ width: '10px', height: '10px', backgroundColor: fill >= 4 ? 'blue' : '', border: '1px solid blue', borderRadius: '50%' }}></div>
            <div style={{ width: '10px', height: '10px', backgroundColor: fill >= 5 ? 'blue' : '', border: '1px solid blue', borderRadius: '50%' }}></div>
        </div>
    )
}
