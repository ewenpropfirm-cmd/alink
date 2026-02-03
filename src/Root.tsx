import "./index.css";
import { Composition } from "remotion";

// Blog imports
import { WhopReview, whopReviewSchema } from "./Blog/WhopReview";
import { WhopVsGumroad, whopVsGumroadSchema } from "./Blog/WhopVsGumroad";
import { SaveMoney, saveMoneySchema } from "./Blog/SaveMoney";
import { SaveMoneyKickback, saveMoneyKickbackSchema } from "./Blog/SaveMoneyKickback";
import { KickbackReview, kickbackReviewSchema } from "./Blog/KickbackReview";
import { Top5WhopApps, top5WhopAppsSchema } from "./Blog/Top5WhopApps";

// Cheddy's Kitchen imports
import { CheddysBanner, cheddysBannerSchema } from "./CheddysKitchen/CheddysBanner";
import { FeatureStats as CheddysStats, featureStatsSchema as cheddysStatsSchema } from "./CheddysKitchen/FeatureStats";
import { FeatureSports, featureSportsSchema } from "./CheddysKitchen/FeatureSports";
import { FeaturePricing, featurePricingSchema } from "./CheddysKitchen/FeaturePricing";
import { FeaturePricingTiers, featurePricingTiersSchema } from "./CheddysKitchen/FeaturePricingTiers";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Blog Article Images */}
      <Composition
        id="Blog-1-WhopReview"
        component={WhopReview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={whopReviewSchema}
        defaultProps={{}}
      />
      <Composition
        id="Blog-2-WhopVsGumroad"
        component={WhopVsGumroad}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={whopVsGumroadSchema}
        defaultProps={{}}
      />
      <Composition
        id="Blog-3-SaveMoney"
        component={SaveMoney}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={saveMoneySchema}
        defaultProps={{}}
      />
      <Composition
        id="Blog-4-SaveMoneyKickback"
        component={SaveMoneyKickback}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={saveMoneyKickbackSchema}
        defaultProps={{}}
      />
      <Composition
        id="Blog-5-KickbackReview"
        component={KickbackReview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={kickbackReviewSchema}
        defaultProps={{}}
      />
      <Composition
        id="Blog-6-Top5WhopApps"
        component={Top5WhopApps}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={top5WhopAppsSchema}
        defaultProps={{}}
      />

      {/* Cheddy's Kitchen - Whop Store Images */}
      <Composition
        id="Cheddys-1-Banner"
        component={CheddysBanner}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={cheddysBannerSchema}
        defaultProps={{}}
      />
      <Composition
        id="Cheddys-2-Stats"
        component={CheddysStats}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={cheddysStatsSchema}
        defaultProps={{}}
      />
      <Composition
        id="Cheddys-3-Sports"
        component={FeatureSports}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureSportsSchema}
        defaultProps={{}}
      />
      <Composition
        id="Cheddys-4-Pricing"
        component={FeaturePricing}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featurePricingSchema}
        defaultProps={{}}
      />
      <Composition
        id="Cheddys-5-PricingTiers"
        component={FeaturePricingTiers}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featurePricingTiersSchema}
        defaultProps={{}}
      />
    </>
  );
};
