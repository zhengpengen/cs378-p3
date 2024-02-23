import React from 'react';
import ItemButton from './ItemButton';

const MenuItem = ({ title, description, imagename, price, dict, changeEntry}) => {

	const imagepath = "./images/"+imagename;

	return (
		
		<div className="row menu-row">
			<div className="col-4">
					<img src={imagepath} />
			</div>
			<div className ="col-8">
				<div className="row">
					<div className="item-name">{title}</div>
				</div>
				<div className="row">
					<div className="item-description">{description}</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="price">{price}</div>
					</div>
					<div className="col-5">
						<ItemButton 
							title = {title}
							dict = {dict}
							changeEntry= {changeEntry}/>
					</div>
					<div className='col-1'>

					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
