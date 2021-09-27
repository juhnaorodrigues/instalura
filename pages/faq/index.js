import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FAQScreen {...props} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (result) => {
    const jsonData = await result.json();
    return jsonData.data;
  });

  return {
    props: {
      faqCategories,
    },
  };
}
