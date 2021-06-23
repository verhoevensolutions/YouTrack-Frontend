export default function HomeButtonFeatures(props) {
  return (
    <button
      className="bg-green-200 p-4 rounded-xl text-xl text-gray-800 w-40 mr-10"
      onClick={() => props.setFeaturesVisible(!props.featuresVisible)}
    >
      Features
    </button>
  );
}
