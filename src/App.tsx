import React from 'react';
import { useGetDataSample } from './hooks/useGetDataSample';

function App() {
    const { data } = useGetDataSample();

    return (
        <div className="App">
            <div>Sample</div>
        </div>
    );
}

export default App;
