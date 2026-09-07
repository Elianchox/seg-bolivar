import { HomeBanner } from "@/features/home/components/home-banner";
import { HomeNews } from "@/features/home/components/home-news";
import { HomeStepsTabs } from "@/features/home/components/home-steps-tabs";
import { HomeToyStoryBanner } from "@/features/home/components/home-toy-story-banner";

export function HomeView() {
  return (
    <>
      <HomeBanner />
      <HomeStepsTabs />
      <HomeToyStoryBanner />
      <HomeNews />
    </>
  );
}