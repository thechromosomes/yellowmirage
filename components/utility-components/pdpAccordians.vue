<template>
  <!-- ================== social sharing icons -->
  <div class="down_info_wraper md:w-[95%] w-full">
    <div>
      <ul class="social_sharimg_list flex justify-center"></ul>
    </div>
    <!-- ===================== SPECIFICATION tabs ============= -->
    <div class="speclitation-tabs">
      <h3
        :class="{ active: accordianValue == 'specification' }"
        @click="accordianToggle('specification')"
      >
        SPECIFICATION
      </h3>
      <div
        class="all_details additinoal-info"
        :class="{ active: accordianValue == 'specification' }"
      >
        <!-- <h5>Materials & Fabrics</h5> -->
        <ul class="flex" v-for="(item, index) in 4" :key="index">
          <li>
            <p>{{ "item.label" }}</p>
          </li>
          <li>
            <p>{{ "item.value" }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- ========================= -->
    <div class="speclitation-tabs">
      <h3
        class="relative"
        :class="{ active: accordianValue == 'additinoal' }"
        @click="accordianToggle('additinoal')"
      >
        ADDITIONAL INFO
      </h3>
      <div
        class="all_details additinoal-info"
        :class="{ active: accordianValue == 'additinoal' }"
      >
        <ul class="flex" v-for="(item, index) in 4" :key="index">
          <li>
            <p>{{ "item.label" }}</p>
          </li>
          <li>
            <p>{{ "item.value" }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordianValue: false,
    };
  },
  methods: {
    accordianToggle(data, specificValue) {
      if (specificValue) {
        this.accordianValue = specificValue;
        return;
      }
      if (data == this.accordianValue) {
        this.accordianValue = "";
      } else {
        this.accordianValue = data;
      }
    },
  },
};
</script>

<style scoped>
.verified-img[data-v-96d61308] {
  filter: invert(43%) sepia(65%) saturate(4957%) hue-rotate(339deg)
    brightness(95%) contrast(95%);
  margin-right: 3px;
  height: 15px;
  width: 15px;
}
.all_details table {
  display: block;
  overflow-x: auto;
  border: 0px;
}
.size_caption {
  text-align: left;
  font-size: 22px;
  text-transform: uppercase;
  color: #103c8c;
  padding-left: 21px;
  margin-bottom: 10px;
}
.social_sharimg_list {
  padding: 16px 0px 9px 0px;
}
/* -================= tabs css ========= */
.speclitation-tabs {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.speclitation-tabs > h3 {
  font-size: 14px;
  color: var(--navy_blue);
  text-transform: uppercase;
  font-family: var(--supergroup_bold);
  cursor: pointer;
  padding: 17px 0px 17px 18px;
  position: relative;
}
.speclitation-tabs > h3:after {
  content: "\e613";
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-family: Font Icon;
  font-size: 11px;
  font-weight: 900;
}
.speclitation-tabs > h3.active:after {
  content: "\e614";
}

.all_details h5 {
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: var(--navy_blue);
  font-family: var(--supergroup_bold);
  padding: 0 0 10px;
  font-size: 14px;
}
.all_details {
  padding: 15px 0px;
  display: none;
}
.all_details ul li {
  padding: 7px 0;
  width: 21%;
}
.all_details ul li > P {
  color: var(--navy_blue);
  font-size: 14px;
  font-family: var(--supergroup_std);
}
.additinoal-info ul {
  padding: 6px 10px;
  font-size: 12px;
}
.additinoal-info ul > li {
  width: 100%;
  padding: 0px;
}
.additinoal-info ul > li > p {
  font-size: 12px;
}

.all_details.active {
  display: block;
}
.down_info_wraper {
  padding: 0 15px;
}

/* ==================== 767 ================ */
@media only screen and (max-width: 767px) {
  .speclitation-tabs > h3 {
    padding-left: 0px;
  }
  .all_details ul li {
    width: 50%;
  }
}

/* rating css */

.rating-section {
  margin-bottom: 8px;
  align-items: center;
}
.rating-block {
  padding: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rating-block .ratings-type {
  margin-right: 1rem;
  margin-bottom: 0;
}

.rating-block .rating-block {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.rating-block .rating-block-rating {
  display: flex;
}

.rating-block .star {
  cursor: pointer;
  stroke: #535353;
  margin: 0 1px;
}

.rating-block .rating-block-rating .star.selected polygon {
  fill: #ffb306;
}
.rating-block .rating-block-rating .star.half polygon {
  fill: url(#grad2);
}

.rating-block .rating-block-rating.is-voted .star polygon {
  fill: #ffb306;
}

.rating-block .rating-block-rating.is-voted .star.selected ~ .star polygon {
  fill: transparent;
}
.rating-block .star svg {
  width: 20px;
  height: 20px;
}
.rating-block .star.selected {
  stroke: #ffb306;
}
.reviews-section ul {
  margin-bottom: 30px;
}
.reviews-section h3 {
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.reviews-section p {
  font-size: 16px;
}
</style>
