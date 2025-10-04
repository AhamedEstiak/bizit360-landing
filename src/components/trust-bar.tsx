"use client";

import { useEffect, useState } from "react";

export default function TrustBar() {
  const targets = {
    states: 48,
    compliance: 99,
    jobs: 100,
    staff: 400,
  };

  const [counts, setCounts] = useState(targets);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setCounts({
      states: 0,
      compliance: 0,
      jobs: 0,
      staff: 0,
    });
    setShouldAnimate(true);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        states: Math.floor((targets.states * step) / steps),
        compliance: Math.floor((targets.compliance * step) / steps),
        jobs: Math.floor((targets.jobs * step) / steps),
        staff: Math.floor((targets.staff * step) / steps),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [shouldAnimate]);

  const metrics = [
    { value: counts.states, label: "States Covered", suffix: "" },
    { value: counts.compliance, label: "SLA Compliance", suffix: "%" },
    { value: counts.jobs, label: "Field Jobs Managed", suffix: "K+" },
    { value: counts.staff, label: "Remote Staff", suffix: "+" },
  ];

  return (
    <section className="py-16 bg-surface-dark text-text-inverse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {metric.value}
                {metric.suffix}
              </div>
              <div className="text-sm text-text-inverse/70">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
