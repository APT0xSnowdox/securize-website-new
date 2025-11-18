import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="fixed top-24 sm:top-28 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center bg-gray-900/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-2xl border border-gray-800/50">
          <div className="flex items-center space-x-3 text-sm text-center">
            {/* Megaphone Icon */}
            <svg 
              className="w-5 h-5 text-cyan-400 flex-shrink-0" 
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 5.858a3 3 0 00-4.243 4.243h.001l5.428 5.428a2 2 0 002.828 0l2.122-2.121m-8.486-8.485a3 3 0 014.243 0L12 3l5.428-5.428a2 2 0 012.828 0l2.122 2.121m-4.243 4.242a3 3 0 010 4.243" />
            </svg>
            <p className="text-gray-300">
              Security shouldn't wait for scheduling.{' '}
              <Link 
                href="/story" 
                className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
              >
                Read the story
              </Link>
              {' '}behind SECURIZE Pentest On-Demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

