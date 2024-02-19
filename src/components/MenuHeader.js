import React from 'react';

const MenuHeader = ({logo, header1, header2}) => {

    const imagepath = "./images/"+logo;

    return(
        <div>
            <div className="row">
                <div className="logo">
                    <img src={imagepath}/>
                </div>
            </div>

            <div className="row">
                <div className="title">
                    <div className="cursive-text">{header1}</div>
                    <div className="title-text">{header2}</div>
                </div>
            </div>
        </div>
        
    )
}

export default MenuHeader;