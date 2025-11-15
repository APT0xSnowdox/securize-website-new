import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center space-x-3 text-sm sm:text-base">
            {/* Megaphone Icon */}
            <svg 
              className="w-5 h-5 text-green-400 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
            <p className="text-gray-300">
              Security shouldn't wait for scheduling.{' '}
              <Link 
                href="/story" 
                className="text-green-400 hover:text-green-300 underline transition-colors"
              >
                Read the story
              </Link>
              {' '}behind Securize Pentest On-Demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

