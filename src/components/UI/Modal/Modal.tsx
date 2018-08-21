import * as React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';
import { IModalProps } from '../../../models/UIComponents.model';


class Modal extends React.Component {

	public props: IModalProps;

	public shouldComponentUpdate(nextProps: IModalProps, nextState: React.ComponentState) {
		return (nextProps.show !== this.props.show || nextProps.children !== this.props.children);
	}

	public render(): JSX.Element {
		const styles = { 
			opacity: this.props.show ? 1 : 0, 
			transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
		} 
		return (
			<React.Fragment>
				<Backdrop show={this.props.show} dismissed={this.props.modalClosed}/>
				<div className='Modal' style={ styles }>
					{this.props.children}
				</div>
			</React.Fragment>
		);
	}
}

export default Modal;