import * as React from "react";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/config";
import { rem } from "polished";

import githubIconUrl from "!!file-loader?modules!./socialServiceProfile/github.svg";
import facebookIconUrl from "!!file-loader?modules!./socialServiceProfile/facebook.svg";
import twitterIconUrl from "!!file-loader?modules!./socialServiceProfile/twitter.svg";
import mediumIconUrl from "!!file-loader?modules!./socialServiceProfile/medium.svg";
import instagramIconUrl from "!!file-loader?modules!./socialServiceProfile/instagram.svg";
import lineIconUrl from "!!file-loader?modules!./socialServiceProfile/line.svg";
import youtubeIconUrl from "!!file-loader?modules!./socialServiceProfile/youtube.svg";
import naverBlogIconUrl from "!!file-loader?modules!./socialServiceProfile/naver_blog.svg";

type SocialServiceProfileProps = {
  className?: string;
  profile: GatsbyTypes.SocialServiceProfile_profileFragment;
};

export const query = graphql`
  fragment SocialServiceProfile_profile on PrismicSiteNavigationDataSnsProfiles {
    service
    link {
      url
    }
  }
`;

const Container = styled("a", {
  display: "inline-block",
  fontSize: rem(24),
  lineHeight: 0,

  "&:hover, &:focus": {
    opacity: 0.64,
  },
});

const Icon = styled("img", {
  width: "1em",
  height: "1em",
});

const socialServiceProfileConfigMap: Record<
  string,
  { src: string; alt: string }
> = {
  github: {
    src: githubIconUrl,
    alt: "GitHub",
  },
  twitter: {
    src: twitterIconUrl,
    alt: "Twitter",
  },
  facebook: {
    src: facebookIconUrl,
    alt: "Facebook",
  },
  instagram: {
    src: instagramIconUrl,
    alt: "Instagram",
  },
  medium: {
    src: mediumIconUrl,
    alt: "Medium",
  },
  line: {
    src: lineIconUrl,
    alt: "LINE",
  },
  youtube: {
    src: youtubeIconUrl,
    alt: 'Youtube',
  },
  naver_blog: {
    src: naverBlogIconUrl,
    alt: 'Naver Blog',
  },
};

export default function SocialServiceProfile({
  className,
  profile,
}: SocialServiceProfileProps) {
  const config = socialServiceProfileConfigMap[profile.service || ""];
  if (!config) {
    console.warn(`${profile.service} has no implementation`);
    return null;
  }

  if (!profile.link) {
    console.warn("link is empty");
    return null;
  }

  return (
    <Container
      className={className}
      href={profile.link.url}
      target="_blank"
      rel="external noopener"
    >
      <Icon src={config.src} alt={config.alt} />
    </Container>
  );
}
