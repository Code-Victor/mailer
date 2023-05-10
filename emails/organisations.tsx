import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
} from "../src/components/email";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Abeokuta Tech Hangout Invite to Organisations</Preview>
      <Body
        style={{
          fontFamily: "sans-serif",
          background: "#F5F5F5",
        }}
      >
        <Container
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop:10,
          }}
        >
          <Img
            src={`${baseUrl}/static/otc-logo.png`}
            width="150"
            height="144"
            alt="OTC logo"
            style={logo}
          />
          <Section
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
          ></Section>
          <Section
            style={{
              backgroundColor: "#056302",
              background: "linear-gradient(180deg, #056302 0%, #06B102 100%)",
              borderRadius: "14.0774px 14.0774px 0px 0px",
              padding: "20px 20px 20px 20px",
            }}
          >
            <Heading
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
                color: "#FFF",
              }}
            >
              ABEOKUTA TECH HANGOUT 4.0
            </Heading>
            <Text
              style={{
                textAlign: "center",
                color: "#FFF",
              }}
            >
              Becoming world class
            </Text>
          </Section>
          <Section>
            <Text style={{ fontWeight: "bold" }}>Dear Sir/Ma'am,</Text>
            <Text>
              I hope this email finds you well. It's our pleasure to invite you
              to the upcoming Abeokuta Tech Hangout, which will take place on
              the 27th of May, 2023 by 12 noon at Chrisland University,
              Abeokuta.
            </Text>
            <Text>
              The event promises to be an engaging and informative gathering of
              technology enthusiasts and professionals from various industries.
            </Text>
            <Text>
              The Abeokuta Tech Hangout aims to create a platform for tech
              enthusiasts, developers, and professionals to connect, learn, and
              share ideas. The event will feature insightful keynote speeches,
              interactive panel discussions, and networking sessions that will
              enable attendees to build meaningful connections and explore the
              latest trends in technology.
            </Text>
            <Text>
              As an organization that values innovation and technology, we
              believe that attending the Abeokuta Tech Hangout will be highly
              beneficial to your organization. Here are some of the benefits you
              stand to gain from attending the event:
            </Text>
            <Text>
              Networking Opportunities: The Abeokuta Tech Hangout is a great
              opportunity to meet and connect with other professionals and
              organizations in the tech industry. You can build new
              relationships, exchange ideas, and explore potential
              collaborations that can help your organization grow.
            </Text>
            <Text>
              Learning and Skill Development: The event will feature informative
              sessions and workshops that will provide you with valuable
              insights and skills in emerging technology trends, innovation, and
              best practices in the tech industry.
            </Text>
            <Text>
              Exposure and Brand Visibility: The Abeokuta Tech Hangout is a
              great platform to showcase your organization's products, services,
              and expertise to a diverse audience of technology enthusiasts and
              professionals.
            </Text>
            <Text>
              We look forward to your organization's participation in this
              exciting event. Please register your interest{" "}
              <Button href="http://bit.ly/AbkTechHangout4">here</Button> to
              secure your seat. If you have any questions or require more
              information, please do not hesitate to contact us.
            </Text>
            <Text>Thank you for your time and consideration.</Text>
            <Text>Best regards,</Text>
            <Text style={{ fontWeight: "bold", width: 180 }}>
              Organizing Committee, Abeokuta Tech Hangout
            </Text>
            <Img
              src={`${baseUrl}/static/flier.png`}
              alt="Abeokuta Tech Hangout 4.0 flier"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Section>
          <Hr color="#BDBDBD" style={{ height: 1, marginTop: "20px" }} />
          <Section
            align="center"
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "26px",
            }}
          >
            <Text style={{ color: "#828282" }}>Let's connect online</Text>
            <Row align="center">
              <Button
                href="https://www.instagram.com/tech_ogun"
                style={{ marginRight: "10px" }}
              >
                <Img
                  src={`${baseUrl}/static/logo-instagram.png`}
                  alt="instagram"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Button>
              <Button
                href="https://www.linkedin.com/company/ogun-tech-community/"
                style={{ marginRight: "10px" }}
              >
                <Img
                  src={`${baseUrl}/static/linkedin-logo.png`}
                  alt="linkedin"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Button>
              <Button
                href="https://twitter.com/tech_ogun"
                style={{ marginRight: "10px" }}
              >
                <Img
                  src={`${baseUrl}/static/twitter-logo.png`}
                  alt="twitter"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Button>
              <Button href="https://www.facebook.com/techogun" style={{}}>
                <Img
                  src={`${baseUrl}/static/facebook-logo.png`}
                  alt="facebook"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Button>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const logo = {
  margin: "0 auto",
};
