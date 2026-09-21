import { useState } from "react";

// function to analyze the resume and compare it against a job description
function Analyze() {
  const [resume, setResume] = useState(null);

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

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Analyze Your Resume
        </h1>

        <p className="text-gray-500 mb-8">
          Upload your resume and compare it against a job description.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">
            Upload Resume
          </h2>

          <label className="block">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-blue-500">
              <p className="text-gray-600 mb-2">
                Click to upload your resume
              </p>

              <p className="text-sm text-gray-400">
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

          {resume && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">
                Selected Resume:
              </p>

              <p className="text-gray-600 mt-1">
                {resume.name}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {(resume.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Analyze;