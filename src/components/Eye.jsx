export default function Eye({ type, uClass }) {
    let color;
    if (type === "blue") {
        color = '50d4d4';
    }
    else if (type === "green") {
        color = '55b54a'
    }
    else if (type === "brown") {
        color = '4a261d';
    }

    return (
        <div className={uClass +` eye-${type}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" style={{ enableBackground: 'new 0 0 280.028 280.028' }} xmlSpace="preserve">
                <path d="M140 44c77 0 140 43 140 96s-63 96-140 96S0 193 0 140s63-96 140-96z" fill="#E4E7E7" />
                <path fill="currentColor" d="M140 70a70 70 0 1 1 0 140 70 70 0 0 1 0-140z" />
                <path d="M140 96a44 44 0 1 1 0 88 44 44 0 0 1 0-88z" fill="#324D5B" />
                <path d="M166 96a18 18 0 1 1 0 35 18 18 0 0 1 0-35z" fill="#C9EAE4" />
                <path d="M181 124c-5-11-14-20-25-25a17 17 0 1 0 25 25z" fill="#D6DBDE" />
            </svg>
        </div>
    )
}
