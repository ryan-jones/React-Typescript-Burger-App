import * as React from 'react';
import Ingredients from '../../models/Ingredients.model';

import Ingredient from '../Ingredient/Ingredient';
import './Burger.scss';

const burger = (props: Ingredients): JSX.Element => {

	let transformedIngredients: any = Object.keys(props)
		.map(ikey => {
			const ingredients = []
			for (let i = 0; i <= props[ikey]-1; i++) {
				ingredients.push(i);
			}
			return ingredients.map((_, index) => {
				return <Ingredient key={ikey + index} type={ikey} />
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	
	if (transformedIngredients.length === 0) {
		transformedIngredients = (<p>Add ingredients to your burger</p>);
	}

	return (
		<div className='Burger'>
			<Ingredient type='bread-top'/>
				{transformedIngredients}
			<Ingredient type='bread-bottom'/>
		</div>
	);
};

export default burger;
