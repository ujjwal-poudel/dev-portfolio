import CloseButton from "./closeButton";

export default function CloseNavigation() {
    return (
        <div className="flex flex-row justify-center gap-[10px] pl-10px">
            <CloseButton style="bg-[#EF6A6A]" />
            <CloseButton style="bg-[#FFED8F]" />
            <CloseButton style="bg-[#75FF72]" />
        </div>
    );
}