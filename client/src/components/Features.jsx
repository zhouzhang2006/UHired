import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-8 px-10 py-20">

      <FeatureCard
        title="ATS Score"
        description="See how well your resume performs against applicant tracking systems."
      />

      <FeatureCard
        title="Skill Gap Analysis"
        description="Identify missing technologies and keywords from the job posting."
      />

      <FeatureCard
        title="AI Resume Feedback"
        description="Receive personalized suggestions to improve your resume and interview readiness."
      />

    </section>
  );
}

export default Features;