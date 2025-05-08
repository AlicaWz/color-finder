import './index.css'

export type ChipButtonProps = {
    label?: string;
}

export default function ChipButton({ label }: ChipButtonProps) {

    function getCorrectColor(group: string) {
        switch (group) {
            case "Aqua":
                return "var(--groups-aqua)";
            case "Blue":
                return "var(--groups-blue)";
            case "Brown":
                return "var(--groups-brown)";
            case "Cyan":
                return "var(--groups-cyan)";
            case "Gray":
                return "var(--groups-gray)";
            case "Green":
                return "var(--groups-green)";
            case "Orange":
                return "var(--groups-orange)";
            case "Pink":
                return "var(--groups-pink)";
            case "Purple":
                return "var(--groups-purple)";
            case "Red":
                return "var(--groups-red)";
            case "Yellow":
                return "var(--groups-yellow)";

            default:
                return "var(--groups-aqua)";
        }
    }

    function handleClick() {
        const button = document.querySelector(`.chipbutton[aria-label="Filter Button for: ${label}"]`);
        if (button) {
            button.classList.toggle('active');
        }


    }

    return (
        <button
            className="chipbutton"
            onClick={() => handleClick()}
            aria-label={`Filter Button for: ${label}`}
        >
            {label && <div className="prev" style={{ background: getCorrectColor(label) }}></div>}
            {label && <p>{label}</p>}
        </button>
    )
}