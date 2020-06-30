import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const header = (
    <h1 className="font-telugu-head m-0 mb-4 text-5xl text-center">
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {data.site.siteMetadata.title}
      </Link>
    </h1>
  );

  return (
    <Wrapper>
      <div className="mx-auto max-w-2xl px-4 py-2">
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <Footer className="text-gray-500">© {new Date().getFullYear()}, Rao Balla</Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;
