import { Fragment } from "react";

import Navigation from "./Navigation";
import Content from "./Content";
import { Container, Header, Section } from "./styles";

const Layout = () => {
  return (
    <Fragment>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <Section>
          <Content />
        </Section>
        <footer></footer>
      </Container>
    </Fragment>
  );
};
export default Layout;
