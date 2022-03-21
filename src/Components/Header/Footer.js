import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Learn More</Heading>
			<FooterLink href="#">About BizStat</FooterLink>
			<FooterLink href="#">Our Team</FooterLink>
			<FooterLink href="#">Privacy Policy</FooterLink>
			<FooterLink href="#">Other</FooterLink>
		</Column>
		<Column>
			<Heading>Contact us</Heading>
			<FooterLink>Technical help - <b>011 657 1298</b></FooterLink>
			<FooterLink>head Office- <b>011 657 1299</b></FooterLink>
			<FooterLink>Mail - <b>BizStat@cgen.net</b></FooterLink>
			<FooterLink href="#">Website</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};

export default Footer;
