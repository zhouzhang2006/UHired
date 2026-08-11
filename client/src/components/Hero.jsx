import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-center py-24 px-8">
      <h1 className="text-6xl font-bold mb-6">
        Land More Interviews
      </h1>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Upload your resume and compare it against any job description.
        Receive ATS scores, missing skills analysis, and AI-powered
        resume improvements.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <Link
          to="/register"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700"
        >
          Get Started
        </Link>

        <Link
          to="/analyze"
          className="border px-8 py-4 rounded-xl text-lg hover:bg-gray-100"
        >
          View Demo
        </Link>
      </div>
    </section>
  );
}

export default Hero;