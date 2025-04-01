import React, {ElementType} from "react";

type Props = {
    title: string;
    description: string;
    Icon: ElementType;
};

const WhyUsCard = ({title, Icon, description}: Props) => {
    return (
        <div className="flex-1 bg-[#FAFAFA] p-[32px] rounded-xl space-y-[80px]">
            <div className="w-fit p-3 border border-[#C3C4C5] rounded-full bg-transparent">
                <Icon className="size-[24px] text-[#575757]" />
            </div>
            <div className="space-y-[16px]">
                <h1 className="text-[28px] leading-[1.4] font-semibold">{title}</h1>
                <p className="text-[20px] leading-[1.6] text-[#575757]">{description}</p>
            </div>
        </div>
    );
};

export default WhyUsCard;