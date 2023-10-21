import React from 'react';

const Lighting: React.FC = () => {
    return (
        <>
            <ambientLight intensity={5.5} />
            <pointLight position={[10, 10, 10]} />
        </>
    );
};

export default Lighting;
