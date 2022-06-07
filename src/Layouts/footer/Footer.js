import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
SubRow,
FooterText,
FooterCopyRight,
} from "./FooterStyles";

const Footer = () => {
return (
	<>
		<Box>
	    <Container>
		<Row>
		<Column>
		   <img  src='../Assets/logo.png' alt='logo' height='120px' width='120px'/> 
		   <Heading style={{paddingLeft:'24px'}}>BizStat</Heading>
		</Column>

		<Column>
			<Heading>Learn More</Heading>
			<FooterLink >About BizStat</FooterLink>
			<FooterLink >Our Team</FooterLink>
			<FooterLink >Privacy Policy</FooterLink>
			<FooterLink >Other</FooterLink>
		</Column>

		<Column>
			<Heading>Contact us</Heading>
			<FooterText>Technical Help - <b>011 657 1298</b></FooterText>
			<FooterText>Head Office- <b>011 657 1299</b></FooterText>
			<FooterText>Mail - <b>BizStat@cgen.net</b></FooterText>
			<FooterLink href="#">Website</FooterLink>
		</Column>

		<Column>
			<Heading>Social Media</Heading>
			<SubRow>
			<FaFacebook/>
			<FaInstagram/>
			<FaTwitter/>
			<FaYoutube/>
			</SubRow>
		</Column>

		</Row>
	</Container>
	<br/>
	<hr/>
	<br/>
	<FooterCopyRight >@2022 Copyright: BizStat.com</FooterCopyRight>
	</Box>	
	
	</>
);
};

export default Footer;
