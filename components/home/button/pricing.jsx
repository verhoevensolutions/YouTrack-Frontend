export default function HomeButtonPricing(props) {
  return (
    <button
      className="bg-green-200 p-4 rounded-xl text-xl text-gray-800 w-40 mr-10"
      onClick={() => props.setPricingVisible(!props.pricingVisible)}
    >
      Pricing
    </button>
  );
}
