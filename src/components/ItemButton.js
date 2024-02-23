import React, {useState} from 'react';

const ItemButton = ({title, dict, changeEntry}) => {

    // const [currentCount, setCount] = useState(dict[title]);

    const [r, changer] = useState(true);

    function addCount(){
        changeEntry(title, 1);
        changer(!r);
    }

    function subCount(){
        changeEntry(title, -1);
        changer(!r);
    }

    return (
        <div className='row .btn-group'>
            <div className='col-3'></div>
            <div className='col-3 nopadding btn-group'>
                <button 
                    type="button" 
                    class="btn btn-primary btn-sm fitfull nopadding" 
                    onClick={() => subCount()}>-</button>
            </div>
            <div className='col-3 nopadding'>
                <p class="text-center nopadding">{dict[title]}</p>
            </div>
            <div className='col-3 nopadding btn-group'>
                <button 
                    type="button" 
                    class="btn btn-primary btn-sm fitfull nopadding" 
                    onClick={() => addCount()}>+</button>
            </div>
        </div>
    );
};

export default ItemButton;