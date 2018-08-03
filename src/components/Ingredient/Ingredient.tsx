import * as React from 'react';
import './Ingredient.scss';

class Ingredient extends React.Component<{ type: string }> {


	public render() {
		switch (this.props.type) {
			case ('bread-bottom'):
				return <div className='Ingredient BreadBottom'>.</div>;
			case ('bread-top'):
				return (
					<div className='Ingredient BreadTop'>
						<div className='Ingredient Seeds1'>.</div>
						<div className='Ingredient Seeds2'>.</div>
					</div>
				);
			case ('meat'):
				return <div className='Ingredient Meat'>.</div>;
			case ('cheese'):
				return <div className='Ingredient Cheese'>.</div>;
			case ('salad'):
				return <div className='Ingredient Salad'>.</div>;
			case ('bacon'):
				return <div className='Ingredient Bacon'>.</div>;
			default:
				return null;
		}
	};
} 
	

export default Ingredient;