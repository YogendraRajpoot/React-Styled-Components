import styled from "styled-components";

const Image = styled.img`
    
	width: 124px;
    position: absolute;
    left: 7px;
    top: 12px;
	@media only screen and (max-width: 650px) {
		display: none;
	}
`;
Image.displayName = "image";
const Wrapper = styled.div`
	border: 1px solid black;
	margin: 20px;
	position: relative;
	box-sizing: border-box;
	background-color : #e17055;
`;
Wrapper.displayName = "Wrapper";

const A = styled.a`
	margin: 30px;
	padding: 10px 35px;
	text-decoration: none;
	background: #fab1a0;
	color: black;

	@media only screen and (max-width: 650px) {
		padding: 5px 10px;
		font-size: 10px;
	}
`;
A.displayName = "A";
const Div = styled.div`
	display: flex;
	flex-direction: row-reverse;
`;
Div.displayName = "Div";

export {Image,Wrapper,Div,A} 