<template>
  <Home />
</template>

<script>
export default {
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Nature roar",
      image: "./logo.png",
      "@id": "https://natureroar.com/",
      url: "http://natureroar.com/",
      telephone: "7466056737",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Village bajun near golu mandir.",
        addressLocality: "Nainital",
        postalCode: "263001",
        addressCountry: "IN",
      },
      sameAs: [" https://www.instagram.com/thenatureroar/"],
    };
  },
};
</script>
