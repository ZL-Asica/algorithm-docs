import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type { WrapperProps } from '@docusaurus/types';

type Properties = WrapperProps<typeof FooterType>;

export default function FooterWrapper(properties: Properties): JSX.Element {
  return (
    <>
      <Footer {...properties} />
    </>
  );
}
