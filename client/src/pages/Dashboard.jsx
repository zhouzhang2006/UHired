import { useState } from "react";
import { useNavigate } from "react-router-dom";

// the dashboard page where users can upload their resume and analyze it
function Dashboard() {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);

  // variable to handle the logout functionality, which clears the token and user data from local storage and redirects to the login page
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setResume(file);
  };

  const handleAnalyze = () => {
    if (!resume) {
      alert("Please upload a resume first!");
      return;
    }

    // used to connect to the backend
    alert(`Resume selected: ${resume.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          UHired?
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

      {/* Dashboard */}
      <main className="max-w-4xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-2">
          Resume Upload & Analysis
        </h2>

        <p className="text-gray-500 mb-8">
          Upload your resume to get started with your analysis!
        </p>

        {/* Upload Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h3 className="text-xl font-semibold mb-6">
            Upload Your Resume In The Box Below!
          </h3>

          <label className="block cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:border-blue-500 transition">

              <p className="text-lg font-medium text-gray-700">
                Click to upload your resume
              </p>

              <p className="text-sm text-gray-400 mt-2">
                PDF files only
              </p>

              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />

            </div>
          </label>

          {/* Selected file */}
          {resume && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">

              <p className="font-medium">
                Selected Resume
              </p>

              <p className="text-gray-600 mt-1">
                {resume.name}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {(resume.size / 1024 / 1024).toFixed(2)} MB
              </p>

            </div>
          )}

          {/* Analyze button */}
          <button
            onClick={handleAnalyze}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Analyze Resume
          </button>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;