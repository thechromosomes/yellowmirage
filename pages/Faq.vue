<template>
  <div>
    <section class="faq-section">
      <div class="container">
        <div class="row">
          <!-- ***** FAQ Start ***** -->
          <div class="col-md-6 offset-md-3">
            <div class="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div class="col-md-6 offset-md-3">
            <div class="faq" id="accordion">
              <div class="card" v-for="(item, index) in faqList" :key="index">
                <div class="card-header" :id="`faqHeading-${index}`">
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      :data-target="`#faqCollapse-${index}`"
                      data-aria-expanded="true"
                      :data-aria-controls="`faqCollapse-${index}`"
                    >
                      <span class="badge">{{ index + 1 }}</span
                      >{{ item.question }}
                    </h5>
                  </div>
                </div>
                <div
                  :id="`faqCollapse-${index}`"
                  class="collapse"
                  :aria-labelledby="`faqHeading-${index}`"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      {{ item.answer }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-5 p-3 justify-content-center">
                <h3>Still have a question?</h3>
                <p>
                  Call us
                  <a href="tel:9837176793" class="Blondie"
                    ><i class="mdi mdi-cellphone-basic"></i>9837176793</a
                  >
                  or mail to
                  <a href="mailto:support@natureroar.com" class="footer-link"
                    >support@natureroar.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        {
          question: "Where can I find the directions to the hotel?",
          answer:
            "At the bottom of the overview page of the hotel you can find travel information with details on location and directions.",
        },
        {
          question:
            "We have two small children; can we get extra beds in the room?",
          answer:
            "In general one extra bed for one child is available at a minor additional charge. However, please note that this possibility depends on each hotel’s policy and availability. We advise you to check the overview page of the hotel, or to send an email to support@natureroar.com",
        },
        {
          question: "Are the rates on your website per person or per room?",
          answer:
            "All rates on the website are per room per stay, unless stated differently.",
        },
        {
          question: "Is meals included in the price?",
          answer: "Yes, three time delicious meal included in the price.",
        },
        {
          question:
            "Do you offer special discounts (for seniors, airlines employees, etc)?",
          answer:
            "We provide the best available rates for the dates of your stay. The discounts are already included and therefore it is not possible to have any other discount on the confirmed price.",
        },
        {
          question:
            "Can I use discount vouchers (e.g. issued by magazines, shops, etc.)?",
          answer:
            "No, via our website it is not possible. You will have to book through the organization issuing the voucher.",
        },
        {
          question: "Does the hotel need a deposit or a payment in advance?",
          answer:
            "You will pay for your stay at the hotel. But you have to pay small token money to confirm the booking.",
        },
        {
          question: "Can I pay for my stay in advance?",
          answer:
            "Please note that such arrangements depend on each hotel’s policy. Therefore, you will need to contact the hotel directly. The hotel’s contact details can be found in the confirmation e-mail of your reservation.",
        },
        {
          question: "How do I know that my reservation is confirmed?",
          answer:
            "When you have completed the steps of the reservation process, an instant on-screen confirmation will appear. It will show your reservation details as well as your booking number. We advise you to print it out. Within a couple of minutes, you will receive a confirmation email containing more information such as the hotel’s contact details.",
        },
        {
          question: "Can I book a hotel room by telephone or email?",
          answer:
            "Yes, you can book the hotel via call or direct message. The contact detail can be found on the home page.",
        },
        {
          question:
            "I have booked a hotel but I did not receive a confirmation by email. What do I have to do?",
          answer:
            "The most common reason for not getting a confirmation email is typing your email address incorrectly. Therefore, please double check your email address before finalizing your reservation. Also we have noticed that in some cases our confirmation email may end up in your spam folder. If you do not receive an email after you have made a booking, please send an email with your booking number and details to support@natureroar.com",
        },
        {
          question: "Can I book a hotel for day use?",
          answer:
            "Unfortunately it is not possible to book a hotel for day use. The minimum that can be booked through our website is one night.",
        },
        {
          question: "What are the check-in and check-out times of a hotel?",
          answer:
            "The check-in and check-out times differ. You will find them on the “Hotel Policies” section at the bottom of the overview page of the hotel. If you are going to arrive late or very early, we advise you to let the hotel know in advance  using the contact details you will find in your confirmation email.",
        },
        {
          question:
            "What do I do when I have a question about the room or hotel?",
          answer:
            "We advise you to contact the hotel via direct call or mail us to support@natureroar.com",
        },
        {
          question: "How can I cancel or change my booking?",
          answer:
            "You can cancel your reservation or send us a request for a modification by clicking on the link at the bottom of your confirmation email.",
        },
        {
          question: "Do I pay a cancellation fee?",
          answer:
            "The token money you paid at the time of booking is your cancellation fee as well.You will find the cancellation policy on the bottom of overview page of the hotel.",
        },
        {
          question: "How do I know that my booking has been cancelled?",
          answer:
            "After you have cancelled your reservation you will receive an email to confirm your cancellation. If you do not receive the cancellation email, please send an email with the details of your reservation to support@natureroar.com",
        },
      ],
    };
  },
  head() {
    return {
      script: [
        {
          src: "https://code.jquery.com/jquery-2.1.0.js",
        },
        {
          src:
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        },
      ],

      // seo tags
      title:
        "nature roar about us | home-stay | birdwatching | eco-tourism | peaceful-living",
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

  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Frequently asked question",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://natureroar.com/faq",
      },
      headline: "FAQs Nature Roar",
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
};
</script>

<style scoped>
.faq-section {
  background: #fdfdfd;
  min-height: 100vh;
  padding: 10vh 0 0;
}
.faq-title h2 {
  position: relative;
  margin-bottom: 45px;
  display: inline-block;
  font-weight: 600;
  line-height: 1;
}
.faq-title h2::before {
  content: "";
  position: absolute;
  left: 50%;
  width: 60px;
  height: 2px;
  background: #e91e63;
  bottom: -25px;
  margin-left: -30px;
}
.faq-title p {
  padding: 0 190px;
  margin-bottom: 10px;
}

.faq {
  background: #ffffff;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}

.faq .card {
  border: none;
  background: none;
  border-bottom: 1px dashed #cee1f8;
}

.faq .card .card-header {
  padding: 0px;
  border: none;
  background: none;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.faq .card .card-header:hover {
  background: rgba(233, 30, 99, 0.1);
  padding-left: 10px;
}
.faq .card .card-header .faq-title {
  width: 100%;
  text-align: left;
  padding: 0px;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 1px;
  color: #3b566e;
  text-decoration: none !important;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;
}

.faq .card .card-header .faq-title .badge {
  display: inline-block;
  width: 25px;
  height: 20px;
  line-height: 14px;
  float: left;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  text-align: center;
  background: #e91e63;
  color: #fff;
  font-size: 12px;
  margin-right: 20px;
}

.faq .card .card-body {
  padding: 30px;
  padding-left: 35px;
  padding-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #6f8ba4;
  line-height: 28px;
  letter-spacing: 1px;
  border-top: 1px solid #f3f8ff;
}

.faq .card .card-body p {
  margin-bottom: 14px;
}

@media (max-width: 991px) {
  .faq {
    margin-bottom: 30px;
  }
  .faq .card .card-header .faq-title {
    line-height: 26px;
    margin-top: 10px;
  }
}
</style>
