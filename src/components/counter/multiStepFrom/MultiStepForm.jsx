import React, { useState } from "react";

const MultiStepForm = ({ steps = [], onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;

  const StepComponent = steps[currentStep];

  function next() {
    if (currentStep < totalSteps - 1) setCurrentStep((prev) => prev + 1);
    else onSubmit?.();
  }

  const prev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="p-6 bg-white rounded-lg w-[400px] mx-auto">
      <div className="mb-6 text-center">
        <h2>
          Step {currentStep + 1} of {totalSteps}
        </h2>
      </div>

      <StepComponent />

      <div className="flex justify-between mt-6">
        {currentStep > 0 && (
          <button
            onClick={prev}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Back
          </button>
        )}
        <button
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-auto"
        >
          {currentStep === totalSteps - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
