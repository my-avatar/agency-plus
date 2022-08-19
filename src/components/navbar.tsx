import mergeObjects from 'merge-objects';
import isUndefined from 'is-undefined';

import React, { Component } from 'react';
import { Container, Nav, Navbar as BNavbar } from 'react-bootstrap';

import type { ReactNode, ReactElement } from 'react';

export interface NavbarProps {
	// Brand text (nothing = disable)
	brandText?: string | undefined;

	// Toggle button text
	toggleButtonText: string;
}

export const navbarDefaultProps: NavbarProps = {
	toggleButtonText: 'Menu'
}

export class Navbar extends Component<NavbarProps> {
	constructor(props: NavbarProps) {
		super(mergeObjects(navbarDefaultProps, props));
	}

	makeNavbarBrand(): ReactElement | null {
		if (isUndefined(this.props.brandText)) return null;

		return <BNavbar.Brand>{this.props.brandText}</BNavbar.Brand>;
	}

	makeNavbarToggler(): ReactElement {
		return (
			<BNavbar.Toggle
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarResponsive"
				aria-label="Toggle navigation"
				aria-controls="navbarResponsive"
				aria-expanded="false"
			>
				{this.props.toggleButtonText}
			</BNavbar.Toggle>
		);
	}

	render(): ReactNode {
		return (
			<BNavbar id="mainNav" color="dark" expand="lg" fixed="top">
				<Container>
					{this.makeNavbarBrand()}
					{this.makeNavbarToggler()}
					<BNavbar.Collapse id="navbarResponsive">
						<Nav className="text-uppercase ms-auto py-4 py-lg-0">
						</Nav>
					</BNavbar.Collapse>
				</Container>
			</BNavbar>
		);
	}
}
