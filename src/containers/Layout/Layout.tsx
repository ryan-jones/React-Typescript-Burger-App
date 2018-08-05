import * as React from 'react';
import '../Layout/Layout.scss';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends React.Component {

	public state = {
		showSideDrawer: false
	}

	public sideDrawerClosedHandler = (): void => this.setState({ showSideDrawer: false });

	public sideDrawerToggleHandler = (): void => {
		this.setState( (prevState: any) => ({ showSideDrawer: !prevState.showSideDrawer }));
	}

	public render() {
		return (
			<React.Fragment>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
				<main className='Content'>
					{this.props.children}
				</main>
			</React.Fragment>
		);
	}
} 

export default Layout;