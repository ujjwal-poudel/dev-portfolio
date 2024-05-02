import { twMerge } from 'tailwind-merge'
export default function CloseButton(props) {
    // Use tw to merge class names
    // eslint-disable-next-line react/prop-types
    const mergedClassName = twMerge`w-[12px] h-[12px] rounded-[20px] ${props.style}`;

    return (
        <div className={mergedClassName}>
            {/* Additional content for the button */}
        </div>
    );
}
