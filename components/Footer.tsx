export default function Footer() {
    return (
        <footer className="bg-white border-t border-black/5 py-12 text-[#121212]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
                    LaunchFlow
                </a>
                <div className="text-sm text-[#4A5568]">
                    © 2026 LaunchFlow. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
