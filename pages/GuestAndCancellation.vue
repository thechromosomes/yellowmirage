<template>
  <div class="main-privacy-policy">
    <h2 class="text-center p-3 mb-2 bg-primary text-white ">
      Nature Roar Guest and cancellation Policies.
    </h2>
    <h3>General Terms and Conditions</h3>
    <p>
      &bull;All guests must present original and valid photo identification at
      the time of check-in, such as Aadhar ID, National ID for GCC residents, or
      passport.
    </p>
    <p><br /></p>
    <p>
      &bull;The primary guest must be at least 18 years of age to be able to
      check-in at the hotel.
    </p>
    <p><br /></p>
    <p>
      &bull;It is mandatory for guests to present valid photo identification at
      the time of check-in.
    </p>
    <p><br /></p>
    <p>
      &bull;Stay of 1 child up to 5 years of age is complementary without the
      use of an extra bed. Breakfast charges may be applicable for the child.
    </p>
    <p><br /></p>
    <p>
      &bull;Should any action by a guest be deemed inappropriate by the hotel,
      or if any inappropriate behavior is brought to the attention of the hotel,
      the hotel reserves the right, after the allegations have been
      investigated, to take action against the guest.
    </p>
    <p><br /></p>
    <p>
      &bull;A discounted booking cannot be modified. In case of early check-out
      for such a booking, no amount will be refunded.
    </p>
    <p><br /></p>
    <p>
      &bull;Guests may be contacted closer to their check-in date to confirm the
      arrival status or arrival time through calls or messages. In case, we do
      not receive a response from the guest after multiple attempts, the booking
      may be put on hold or canceled. In case of availability, Nature Roar will
      try to reinstate your booking when you contact us back or make a payment
      through our multitude of payment options.
    </p>
    <p><br /></p>
    <p>
      &bull;As we continue to strive to improve our services, Nature Roar may
      reach out to guests to get a feedback on their experience through calls or
      messages
    </p>
    <p><br /></p>
    <p><strong>Booking Extension Policy</strong></p>
    <p>
      &bull;Extension of stay would be provided on current room rates, subject
      to availability.
    </p>
    <p><br /></p>
    <p>
      &bull;Current room rates can be different from the rates at which the
      rooms were booked.
    </p>
    <p><br /></p>
    <h3>Cancellation and Refunds Policy</h3>
    <p>
      You can cancel your booking by calling our Customer Support helpline on
      9837176793 or mailing to support@natureroar.com
    </p>
    <p><br /></p>
    <p>
      <strong>If a booking having less than 3 room nights is canceled:</strong>
    </p>
    <ul>
      <li>
        More than 48 hours before check-in date: FREE CANCELLATION but the token
        money can not be refunded.
      </li>
      <li>
        0-24 hours before check-in date: 1-night cost + token money will be
        charged as a cancellation fee.
      </li>
      <li>
        In case of no show: Entire booking cost will be charged as a
        cancellation fee.
      </li>
    </ul>
    <p><br /></p>
    <p>
      Refund shall be initiated within 48 hours of receiving the request and the
      payment would be credited within 5-7 working days via the same mode as
      used while making the booking.
    </p>
    <p><br /></p>
    <p><strong>How to Cancel</strong></p>
    <p>
      You can email us at support@natureroar.com or call 9837176793 to cancel
      your booking. The applicable refund amount will be credited to you within
      14 working days.
    </p>
    <p><br /></p>
    <p><strong>Arrival and departure</strong></p>
    <p><br /></p>
    <p>Check-in: 2-3pm</p>
    <p>check out: 10am-11am</p>
    <p><br /></p>
    <p>Early check-in (subject to availability):</p>
    <p>
      In case you have not opted for Sunrise Check-in, early check-in will be
      subject to availability. Our standard check-in time is 2-3 pm.&nbsp;
    </p>
    <p><br /></p>
    <p>Late Check-out (subject to availability) -</p>
    <p>
      Our standard check-out time is 10 am-11 am. Late check-out is subject to
      availability and cannot be confirmed in advance. Extra charges will apply
      as per the availability.
    </p>
    <p><br /></p>
    <p><br /></p>
  </div>
</template>

<script>
export default{
    jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Guest and cancellation policy",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://natureroar.com/GuestAndCancellation",
      },
      headline: "Guest and cancellation policy",
      description: "We are trying eco-friendly and peaceful living",
      image: "/logo.png",
      author: {
        "@type": "Person",
        name: "Nature Roar",
      },
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
    head() {
    return {
      // seo tags
      title:
        "nature roar guest and cancellation policy | home-stay | birdwatching | eco-tourism | peaceful-living",
      meta: [
        {
          hid: "we are trying to make eco friendly and peaceful living",
          name:
            "Best home stay | Best view | Best birdwatching | Best place to stay | Best mountain",
          content:
            "Best home stay | Best view | Best birdwatching | Best place to stay | Best mountain",
        },
        {
          hid: "og:title",
          content: "nature roar- home-stay | birdwatching",
          property: "og:title",
        },
        {
          hid: "og:description",
          content:
            "Best home stay | Best view | Best birdwatching | Best place to stay | Best mountain",
          property: "og:description",
        },
        {
          hid: "og:url",
          content: this.$store.state.BASE_URL + this.$route.fullPath,
          property: "og:url",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/logo.png",
        },
      ],
    };
  },
}
</script>
<style scoped>
.main-privacy-policy {
  padding: 50px;
}
</style>
