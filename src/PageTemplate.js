/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const container = css`
  display: flex;
  justify-content: center;
`;

const layout = css`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTemplate = ({ children }) => {
  return (
    <main css={container}>
      <div css={layout}>{children}</div>
    </main>
  );
};

export default PageTemplate;
