import { HomeBanner } from "@pagos/features/home/components/home-banner";
import { HomeNews } from "@pagos/features/home/components/home-news";
import { HomeStepsTabs } from "@pagos/features/home/components/home-steps-tabs";
import { HomeToyStoryBanner } from "@pagos/features/home/components/home-toy-story-banner";

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