import React from "react";
import styled from "styled-components";
const Login = () => {
	return (
		<Container>
			<Nav>
				<a href="/">
					<img src="/images/login-logo.svg" alt="logo" />
				</a>
				<div>
					<Join>Join now</Join>
					<SignIn>Sign In</SignIn>
				</div>
			</Nav>
			<Section>
				<Hero>
					<h1>Welcome to your professional community</h1>
					<img src="/images/login-hero.svg" alt="logo" />
				</Hero>
				<Form>
					<Google>
						<img src="/images/google.svg" alt="alt" />
						<span>Sign in with Google</span>
					</Google>
				</Form>
			</Section>
		</Container>
	);
};

// styles
const Container = styled.div`
	padding: 0;
`;

const Nav = styled.nav`
	max-width: 1120px;
	margin: auto;
	padding: 12px 0 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: nowrap;
	position: relative;

	& > a {
		width: 134px;
		height: 34px;
		@media (max-width: 768px) {
			padding: 0 5px;
		}
	}
`;

const Join = styled.a`
	padding: 10px 12px;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.6);
	font-size: 16px;
	margin-right: 12px;
	cursor: pointer;
	border-radius: 4px;
	transition: all 0.2s ease;
	font-family: "Roboto", sans-serif;

	&:hover {
		background: rgba(0, 0, 0, 0.08);
		color: rgba(0, 0, 0, 0.9);
	}
`;

const SignIn = styled.a`
	box-shadow: inset 0 0 0 1px #0a66c2;
	color: #0a66c2;
	border-radius: 24px;
	font-size: 16px;
	font-weight: 600;
	transition-duration: 167ms;
	line-height: 40px;
	text-decoration: none;
	padding: 10px 24px;
	text-align: center;
	background-color: rgba(0, 0, 0, 0);
	cursor: pointer;

	&:hover {
		background: rgba(112, 181, 249, 0.15);
	}
`;

const Section = styled.section`
	display: flex;
	padding-bottom: 13px;
	align-content: start;
	align-items: center;
	min-height: 700px;
	padding-bottom: 138px;
	padding-top: 40px;
	padding: 60px 0;
	position: relative;
	flex-wrap: wrap;
	width: 100%;
	max-width: 1128px;
	margin: auto;

	@media (max-width: 768px) {
		margin: auto;
		min-height: 0px;
	}
`;
const Hero = styled.div`
	width: 100%;
	h1 {
		padding-bottom: 0;
		width: 55%;
		font-size: 56px;
		color: #2977c9;
		font-weight: 200;
		line-height: 70px;

		@media (max-width: 768px) {
			text-align: center;
			width: 100%;
			font-size: 20px;
			line-height: 2;
		}
	}

	img {
		z-index: -1;
		width: 700px;
		height: 670px;
		position: absolute;
		bottom: -2px;
		right: -150px;

		@media (max-width: 768px) {
			top: 230px;
			width: initial;
			position: initial;
			height: initial;
		}
	}
`;

const Form = styled.div`
	margin-top: 100px;
	width: 408px;
	@media (max-width: 768px) {
		margin-top: 20px;
	}
`;

const Google = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: center;
	background-color: #fff;
	align-items: center;
	height: 56px;
	border: 2px solid rgba(0, 0, 0, 0.6);
	width: 70%;
	border-radius: 28px;
	box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
		inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
	vertical-align: middle;
	z-index: 0;
	transition-duration: 167ms;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.6);
	&:hover {
		background-color: rgba(207, 207, 207, 0.25);
		color: rgba(0, 0, 0, 0.75);
	}
	span {
		padding-left: 5px;
	}
`;
export default Login;
