import React, { useState, useEffect } from 'react';

interface ServerUnreachablePageProps {
  onBypass: () => void;
}

export const ServerUnreachablePage: React.FC<ServerUnreachablePageProps> = ({ onBypass }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [secretClickCount, setSecretClickCount] = useState(0);
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  // Dynamically set realistic tab title like real Chrome error
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "This site can’t be reached";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Secret hotkey listener: Ctrl + Shift + L to open developer unlock modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault();
        setShowSecretModal(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSecretClick = () => {
    const newCount = secretClickCount + 1;
    setSecretClickCount(newCount);
    if (newCount >= 4) {
      setShowSecretModal(true);
      setSecretClickCount(0);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = passcode.trim().toLowerCase();
    if (cleanPass === 'vle' || cleanPass === 'paid' || cleanPass === 'admin') {
      onBypass();
    } else {
      setPasscodeError('Invalid passcode');
    }
  };

  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'server';

  return (
    <div 
      className="min-h-screen w-full bg-[#FFFFFF] text-[#1f1f1f] flex flex-col justify-start items-start select-text"
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      }}
    >
      {/* Container matching standard Chrome / Edge error layout */}
      <div className="w-full max-w-[620px] mx-auto px-6 pt-16 sm:pt-24 pb-12">
        
        {/* Sad document error icon */}
        <div 
          onClick={handleSecretClick}
          className="mb-8 cursor-default inline-block"
          title=""
        >
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8C10 5.79086 11.7909 4 14 4H28L38 14V40C38 42.2091 36.2091 44 34 44H14C11.7909 44 10 42.2091 10 40V8Z" fill="#DADCE0"/>
            <path d="M28 4V14H38L28 4Z" fill="#BDC1C6"/>
            <circle cx="20" cy="24" r="2.5" fill="#5F6368"/>
            <circle cx="28" cy="24" r="2.5" fill="#5F6368"/>
            <path d="M19 33C20.5 30.5 27.5 30.5 29 33" stroke="#5F6368" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Main Error Heading */}
        <h1 className="text-[22px] sm:text-[24px] font-normal text-[#202124] leading-tight mb-4">
          This site can’t be reached
        </h1>

        {/* Error description */}
        <p className="text-[14px] text-[#5f6368] leading-[22px] mb-5">
          <strong className="font-semibold text-[#202124]">{hostname}</strong>’s server is unable to reach destination or connection was reset by host.
        </p>

        {/* Suggestion list */}
        <div className="text-[14px] text-[#5f6368] leading-[24px] mb-6">
          <p className="mb-1 text-[#3c4043]">Try:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Checking the connection</li>
            <li>Checking the proxy, firewall, and DNS configuration</li>
            <li>Running Windows Network Diagnostics</li>
          </ul>
        </div>

        {/* Error Code */}
        <div className="text-[12px] font-mono text-[#70757a] tracking-wide mb-8">
          ERR_CONNECTION_REFUSED
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#0b57d0] hover:bg-[#0842a0] text-white text-[14px] font-medium rounded-full transition-colors cursor-pointer shadow-sm active:bg-[#073887]"
          >
            Reload
          </button>

          <button
            onClick={() => setDetailsOpen(!detailsOpen)}
            className="px-4 py-2 text-[#0b57d0] hover:bg-[#f1f3f4] text-[14px] font-medium rounded-full transition-colors cursor-pointer"
          >
            {detailsOpen ? 'Hide details' : 'Details'}
          </button>
        </div>

        {/* Collapsible Details */}
        {detailsOpen && (
          <div className="mt-6 pt-5 border-t border-[#dadce0] text-[13px] text-[#5f6368] leading-[20px]">
            <p className="mb-2">
              The web server host is currently unreachable or has terminated incoming traffic. The host service may be inactive, suspended, or failing to respond to HTTP requests.
            </p>
            <p className="font-mono text-[11px] text-[#70757a] mt-3">
              Error code: ERR_CONNECTION_REFUSED / 503 SERVICE_UNAVAILABLE_HOST_HALT
            </p>
          </div>
        )}

      </div>

      {/* Secret Developer Bypass Modal (Triggered by clicking icon 4 times or Ctrl+Shift+L) */}
      {showSecretModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full border border-gray-200 text-left">
            <h3 className="text-base font-bold text-gray-900 mb-1">Developer Live Access</h3>
            <p className="text-xs text-gray-500 mb-4">
              Enter passcode to bypass this screen and preview the website.
            </p>

            <form onSubmit={handleUnlock} className="space-y-3">
              <input
                type="password"
                placeholder="Enter passcode (e.g. vle or paid)"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setPasscodeError('');
                }}
                autoFocus
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-600 text-gray-900"
              />
              {passcodeError && (
                <p className="text-xs text-red-600">{passcodeError}</p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSecretModal(false)}
                  className="flex-1 py-1.5 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-1.5 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                >
                  Unlock Live Site
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
