import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/Interaction';
import { ReactFlowProvider } from 'react-flow-renderer';

export const frontmatter = {
  title: 'Interaction',
  slug: 'interaction',
  order: 4,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </ExamplePage>
  );
};
