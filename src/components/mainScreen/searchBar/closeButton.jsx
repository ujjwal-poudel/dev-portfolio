import { twMerge } from 'tailwind-merge'
export default function CloseButton(props) {
    // Use tw to merge class names
    // eslint-disable-next-line react/prop-types
    const mergedClassName = twMerge`w-[11px] h-[11px] rounded-[20px] ${props.style}`;

    return (
        <div className={mergedClassName}>
            {/* Additional content for the button */}
        </div>
    );
}
