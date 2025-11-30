export default function WaveDecoration({ className = 'w-full h-24 md:h-36 text-white' }) {
    return (
        <svg className={className} viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
                fill="currentColor"
                d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5,73.84,4.36,147.54-16.88,218.2-35.26,69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34,92.64,30.79,216.15,70.08,303,3.32V120Z"
            ></path>
        </svg>
    );
}
