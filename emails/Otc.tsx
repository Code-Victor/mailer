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
      <Preview>OTC Newsletter</Preview>
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
          }}
        >
          <Section
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Img
              src={`${baseUrl}/static/iframeworks.png`}
              height="37"
              alt="Vercel"
              //   style={logo}
            />
          </Section>
          <Section
            style={{
              background: "#FFAA01",
              borderRadius: "14.0774px 14.0774px 0px 0px",
              padding: "20px 20px 20px 20px",
            }}
          >
            <Heading
              style={{
                fontWeight: "600",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              Bring your Idea to life
            </Heading>
          </Section>
          <Section>
            <Text style={{ fontWeight: "bold" }}>Hello Oluwaseun</Text>
            <Text>
              Time sure flies!​We are 40 days into the new year and I bet you
              should have started making plans for 2023.It's not too early to
              start making plans for the new year and it's okay to take one day
              at a time. However, that mindset of "we'll cross the bridge when
              we get there" is not sustainable even under God.​​Let me encourage
              you to catch the Lord's purpose for you for 2023 and then make it
              plain before your eyes and plan towards it.
            </Text>
            <Text>
              There is definitely something in the heart of God for you in the
              year 2023. Go before him and start to seek who he will have you
              become and/or what he will have you do for the new year. ​​Between
              28th - 30th of November (next week Monday to Wednesday), I want to
              sit with a few people whose hearts are burning with an idea, a
              vision or a question that they need clarity on and require help on
              how to go about it as you enter 2023.​​Please register here and
              keep tabs on your mailbox afterwards so you don't miss the
              appointment.
            </Text>
            <Img
              src={`${baseUrl}/static/otc.png`}
              alt="Vercel"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Text>
              Registration is free and ends 7pm on Wednesday.​If you're
              interested in the Email Marketing Beginner's Course Replays, click
              here to grab it before price goes up. It's a 5-module robust
              course with a bonus on how to set up your email marketing platform
              as a beginner and templates to work out an email marketing
              strategy.​Do you want to learn content creation & marketing before
              the year runs out? Fill this interest form and I will get in
              touch. Feel free to share this with your friends and family.
            </Text>
            <Text>
              For those who have been asking, here is the link to how your
              friends & family can join my community so they get to receive my
              mails like you. In another news Christopher, I'm partnering with
              God to write two books for you and yours. I will share more
              details on this soon. Feel free to share this mail to as many
              people as you want so they can take action with respect to any of
              these updates and offerings.​Thank you ​I'm rooting for you,
              Cheers
            </Text>
          </Section>
          <Section
            style={{
              textAlign: "center",
              marginTop: "26px",
              marginBottom: "26px",
            }}
          >
            <Button
              pX={20}
              pY={10}
              href={"https://google.com"}
              style={{
                color: "white",
                background: "#181873",
                borderRadius: 8.04423,
                margin: "auto",
                width: 120,
                textAlign: "center",
              }}
            >
              Sign Up now
            </Button>
          </Section>
          <Hr color="#BDBDBD" />
          <Section
            align="center"
            style={{
              textAlign: "center",
              marginTop: "26px",
              marginBottom: "26px",
            }}
          >
            <Text>Let's connect online</Text>
            <Img
              src={`${baseUrl}/static/links.png`}
              alt="social links"
              style={{
                width: 80,
                height: "auto",
                margin: "-10px auto 5px auto",
              }}
            />
            <Row>
              <Button>Unsubscribe</Button>•<Button>Update Profile</Button>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
