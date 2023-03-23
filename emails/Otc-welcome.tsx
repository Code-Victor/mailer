import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '../src/components/email';
import * as React from 'react';

interface OTCWelcomeEmailProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const OTCWelcomeEmail = ({ userFirstname = "Zeno" }: OTCWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>The tech community you need for your career growth.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/otc-logo.png`}
          width="150"
          height="144"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>Welcome to the Ogun Tech Community!</Text>
        <Text style={paragraph}>
          We're excited to have you join our community of tech enthusiasts and
          professionals. As a member, you'll have access to exclusive events,
          workshops, and networking opportunities.
        </Text>
        <Text style={paragraph}>
          We can't wait to see what you'll bring to our community. If you have
          any questions or need help getting started, don't hesitate to reach
          out.
        </Text>

        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={button}
            href="https://oguntechcommunity.org/"
          >
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Hamzat Oluwaseun Ph.d
          <br />
          Ogun Tech Community
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          OTC Secretariat, Prohub, Salawu Olabode Avenue, Ewang Road, Idi-aba
        </Text>
      </Container>
    </Body>
  </Html>
);

export default OTCWelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: "#125145",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
