import React from 'react';

const loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin" />
        </div>
    );
};

export default loading;