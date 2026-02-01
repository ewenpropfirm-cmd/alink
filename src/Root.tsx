import "./index.css";
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import {
  AffiliateLinksBanner,
  affiliateLinksBannerSchema,
} from "./AffiliateLinks/AffiliateLinksBanner";
import {
  FeatureAnalytics,
  featureAnalyticsSchema,
} from "./AffiliateLinks/FeatureAnalytics";
import {
  FeatureTemplates,
  featureTemplatesSchema,
} from "./AffiliateLinks/FeatureTemplates";
import {
  FeatureAdmin,
  featureAdminSchema,
} from "./AffiliateLinks/FeatureAdmin";
import {
  FeatureShowcase,
  featureShowcaseSchema,
} from "./AffiliateLinks/FeatureShowcase";
import {
  FeatureUseCases,
  featureUseCasesSchema,
} from "./AffiliateLinks/FeatureUseCases";
import {
  AffiliateLinksPromoVideo,
  promoVideoSchema,
} from "./AffiliateLinks/PromoVideo";

// Trade Hub imports
import {
  TradeHubBanner,
  tradeHubBannerSchema,
} from "./TradeHub/TradeHubBanner";
import {
  FeatureCalendar,
  featureCalendarSchema,
} from "./TradeHub/FeatureCalendar";
import {
  FeatureCalculator,
  featureCalculatorSchema,
} from "./TradeHub/FeatureCalculator";
import {
  FeatureHeatMap,
  featureHeatMapSchema,
} from "./TradeHub/FeatureHeatMap";
import {
  FeaturePartners,
  featurePartnersSchema,
} from "./TradeHub/FeaturePartners";
import {
  FeatureOverview,
  featureOverviewSchema,
} from "./TradeHub/FeatureOverview";
import { FeatureNews, featureNewsSchema } from "./TradeHub/FeatureNews";
import {
  FeatureWhiteLabel,
  featureWhiteLabelSchema,
} from "./TradeHub/FeatureWhiteLabel";
import { TradeHubAppIcon, appIconSchema } from "./TradeHub/AppIcon";

// Kickback imports
import {
  KickbackBanner,
  kickbackBannerSchema,
} from "./Kickback/KickbackBanner";
import {
  FeatureDashboard,
  featureDashboardSchema,
} from "./Kickback/FeatureDashboard";
import {
  FeatureHowItWorks,
  featureHowItWorksSchema,
} from "./Kickback/FeatureHowItWorks";
import {
  FeatureDeals,
  featureDealsSchema,
} from "./Kickback/FeatureDeals";
import {
  FeatureExtension,
  featureExtensionSchema,
} from "./Kickback/FeatureExtension";

// Blog imports
import { WhopReview, whopReviewSchema } from "./Blog/WhopReview";
import { WhopVsGumroad, whopVsGumroadSchema } from "./Blog/WhopVsGumroad";
import { SaveMoney, saveMoneySchema } from "./Blog/SaveMoney";
import { SaveMoneyKickback, saveMoneyKickbackSchema } from "./Blog/SaveMoneyKickback";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Affiliate Links - App Store Images */}
      <Composition
        id="1-AffiliateLinksBanner"
        component={AffiliateLinksBanner}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={affiliateLinksBannerSchema}
        defaultProps={{}}
      />
      <Composition
        id="2-FeatureAnalytics"
        component={FeatureAnalytics}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureAnalyticsSchema}
        defaultProps={{}}
      />
      <Composition
        id="3-FeatureTemplates"
        component={FeatureTemplates}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureTemplatesSchema}
        defaultProps={{}}
      />
      <Composition
        id="4-FeatureAdmin"
        component={FeatureAdmin}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureAdminSchema}
        defaultProps={{}}
      />
      <Composition
        id="5-FeatureShowcase"
        component={FeatureShowcase}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureShowcaseSchema}
        defaultProps={{}}
      />
      <Composition
        id="6-FeatureUseCases"
        component={FeatureUseCases}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureUseCasesSchema}
        defaultProps={{}}
      />

      {/* Trade Hub - App Store Images */}
      <Composition
        id="TradeHub-1-Banner"
        component={TradeHubBanner}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={tradeHubBannerSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-2-Calendar"
        component={FeatureCalendar}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureCalendarSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-3-Calculator"
        component={FeatureCalculator}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureCalculatorSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-4-HeatMap"
        component={FeatureHeatMap}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureHeatMapSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-5-Partners"
        component={FeaturePartners}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featurePartnersSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-6-Overview"
        component={FeatureOverview}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureOverviewSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-7-News"
        component={FeatureNews}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureNewsSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-8-WhiteLabel"
        component={FeatureWhiteLabel}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureWhiteLabelSchema}
        defaultProps={{}}
      />
      <Composition
        id="TradeHub-AppIcon"
        component={TradeHubAppIcon}
        durationInFrames={1}
        fps={30}
        width={1024}
        height={1024}
        schema={appIconSchema}
        defaultProps={{}}
      />

      {/* Kickback - Whop Store Images */}
      <Composition
        id="Kickback-1-Banner"
        component={KickbackBanner}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={kickbackBannerSchema}
        defaultProps={{}}
      />
      <Composition
        id="Kickback-2-Dashboard"
        component={FeatureDashboard}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureDashboardSchema}
        defaultProps={{}}
      />
      <Composition
        id="Kickback-3-HowItWorks"
        component={FeatureHowItWorks}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureHowItWorksSchema}
        defaultProps={{}}
      />
      <Composition
        id="Kickback-4-Deals"
        component={FeatureDeals}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureDealsSchema}
        defaultProps={{}}
      />
      <Composition
        id="Kickback-5-Extension"
        component={FeatureExtension}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        schema={featureExtensionSchema}
        defaultProps={{}}
      />

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
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />
      {/* Mount any React component to make it show up in the sidebar and work on it individually! */}
      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema2}
        defaultProps={{
          logoColor1: "#91dAE2" as const,
          logoColor2: "#86A8E7" as const,
        }}
      />
    </>
  );
};
