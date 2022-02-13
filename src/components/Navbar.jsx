import React from "react";
import {Image,Wrapper,Div,A} from "./Navbar.styled"

export const Navbar = () => {
	return (
		<Wrapper>
			<Image src="https://drive.google.com/uc?id=1ZUwUGXblA-5i-dFJh0jx9ekCbQcf9UiR" alt="logo"></Image>
			<Div>
				<A href="https://www.linkedin.com">LINKEDIN</A>
				<A href="https://github.com/">GITHUB</A>
			</Div>
		</Wrapper>
	);
};

