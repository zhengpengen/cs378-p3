import React from 'react';
import ItemButton from './ItemButton';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imagename, price}) => {

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
					<div className="col-8">
						<div className="price">{price}</div>
					</div>
					<div className="col-3">
						{/* <button type="button" className="btn btn-secondary btn-sm">Add</button> */}
						<ItemButton />
					</div>
					<div className='col-1'>

					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
