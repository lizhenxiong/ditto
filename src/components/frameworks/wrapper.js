import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class Wrapper extends PureComponent {
	render() {
		return (
			<Layout>
				<Header>
					<div id="wrapper-header"></div>
				</Header>
				<Layout>
					<Sider>
						<div id="wrapper-sider"></div>
					</Sider>
					<Content>
						<div id="wrapper-content"></div>
					</Content>
				</Layout>
				<Footer>
					<div id="wrapper-footer"></div>
				</Footer>
			</Layout>
		);
	}
}
