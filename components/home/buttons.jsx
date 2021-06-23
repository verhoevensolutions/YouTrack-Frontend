import HomeButtonFeatures from "./button/features";
import HomeButtonPricing from "./button/pricing";

export default function HomeButtons(props) {
  return (
    <div className="flex flex-row items-center justify-center mt-10 ">
      <HomeButtonFeatures featuresVisible={props.featuresVisible} setFeaturesVisible={props.setFeaturesVisible}/>
      <HomeButtonPricing pricingVisible={props.pricingVisible} setPricingVisible={props.setPricingVisible}/>
    </div>
  );
}
