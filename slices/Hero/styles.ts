import { css } from "styled-system/css";

const styles = {
  Bounded: css({
    margin: "0px",
    minWidth: "0px",
    position: "relative",
  }),

  FullpageHero: css({
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "#fff",
    color: "#333",
  }),

  FullpageHeroImage: css({
    maxWidth: "100%",
    height: "auto",
    alignSelf: "center",
  }),

  FullpageHeroImageLeftFirstChild: css({
    order: 1,
  }),

  FullpageHeroImageLeftSecondChild: css({
    order: 2,
  }),

  FullpageHeroImageRightFirstChild: css({
    order: 2,
  }),

  FullpageHeroImageRightSecondChild: css({
    order: 1,
  }),

  FullpageHeroContent: css({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "@media (min-width: 1080px)": {
      flexDirection: "row",
      "& > div": {
        width: "50%",
      },
    },
  }),

  FullpageHeroContentRight: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "1.5rem",
  }),

  FullpageHeroContentIntro: css({
    display: "grid",
    gap: "1rem",
  }),

  FullpageHeroContentIntroEyebrow: css({
    color: "#47c1af",
    fontSize: "1.15rem",
    fontWeight: 500,
    margin: 0,
  }),

  FullpageHeroContentIntroHeadline: css({
    fontSize: "1.625rem",
    fontWeight: 700,
    "& > *": {
      margin: 0,
    },
    "@media (min-width: 640px)": {
      fontSize: "2rem",
    },
    "@media (min-width: 1024px)": {
      fontSize: "2.5rem",
    },
    "@media (min-width: 1200px)": {
      fontSize: "2.75rem",
    },
  }),

  FullpageHeroContentIntroDescription: css({
    fontSize: "1.15rem",
    maxWidth: "38rem",
    "& > p": {
      margin: 0,
    },
    "@media (min-width: 1200px)": {
      fontSize: "1.4rem",
    },
  }),

  CallToActionLink: css({
    justifySelf: "flex-start",
    borderRadius: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: 1.3,
    padding: "1rem 2.625rem",
    transition: "background-color 100ms linear",
    backgroundColor: "#16745f",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0d5e4c",
    },
  }),
};

export default styles;
