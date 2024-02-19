import React, {useState} from 'react';

const ItemButton = () => {

    const [currentCount, setCount] = useState(0);

    return (
        <div className='row .btn-group'>
            <div className='col-3 nopadding btn-group'>
                <button 
                    type="button" 
                    class="btn btn-primary btn-sm fitfull nopadding" 
                    onClick={() => setCount(Math.max(currentCount-1,0))}>-</button>
            </div>
            <div className='col-6 nopadding'>
                <p class="text-center nopadding">{currentCount}</p>
            </div>
            <div className='col-3 nopadding btn-group'>
                <button 
                    type="button" 
                    class="btn btn-primary btn-sm fitfull nopadding" 
                    onClick={() => setCount(currentCount+1)}>+</button>
            </div>
        </div>
    );
};

export default ItemButton;