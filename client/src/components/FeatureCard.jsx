function FeatureCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;