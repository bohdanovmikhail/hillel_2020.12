export function ParsedTime({ time }) {
    const totalSeconds = time;

    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / (60 * 60));

    seconds = seconds.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');

    return (
        <span>
            {hours}:{minutes}:{seconds}
        </span>
    );
}
