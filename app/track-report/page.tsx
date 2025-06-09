"use client";
import dynamic from 'next/dynamic';

// Dynamically import the ReportTracker component with no SSR
const ReportTracker = dynamic(
  () => import('@/components/report/ReportTracker').then(mod => ({ default: mod.ReportTracker })),
  { ssr: false }
);

export default function TrackReportPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-5xl">
          <ReportTracker />
        </div>
      </div>
    </div>
  );
}
