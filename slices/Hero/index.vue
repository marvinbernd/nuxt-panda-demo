<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import styles from "./styles"; // Adjust the path as necessary

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :class="[styles.Bounded, styles.FullpageHero]"
  >
    <div
      :class="[
        styles.FullpageHeroContent,
        slice.variation === 'imageRight'
          ? styles.FullpageHeroImageRightFirstChild
          : styles.FullpageHeroImageLeftFirstChild,
      ]"
    >
      <div>
        <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          :class="styles.FullpageHeroImage"
        />
      </div>
      <div :class="styles.FullpageHeroContentRight">
        <div :class="styles.FullpageHeroContentIntro">
          <p
            v-if="isFilled.keyText(slice.primary.eyebrowHeadline)"
            :class="styles.FullpageHeroContentIntroEyebrow"
          >
            {{ slice.primary.eyebrowHeadline }}
          </p>
          <div
            v-if="isFilled.richText(slice.primary.title)"
            :class="styles.FullpageHeroContentIntroHeadline"
          >
            <PrismicRichText :field="slice.primary.title" />
          </div>
          <div
            v-if="isFilled.richText(slice.primary.description)"
            :class="styles.FullpageHeroContentIntroDescription"
          >
            <PrismicRichText :field="slice.primary.description" />
          </div>
          <PrismicLink
            v-if="isFilled.link(slice.primary.callToActionLink)"
            :class="styles.CallToActionLink"
            :field="slice.primary.callToActionLink"
          >
            {{ slice.primary.callToActionLabel || "Learn more…" }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>
