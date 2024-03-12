import React, { useState } from 'react';

function InputBox(props) {
    const [inputValue, setInputValue] = useState('');
    const handleInput = () => {
        props.addTask(inputValue);
        setInputValue('');
    }
    return (
        <div className='inputbox'>
           <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
            <button onClick={handleInput}>Add</button>
        </div>
    );
}

export default InputBox;