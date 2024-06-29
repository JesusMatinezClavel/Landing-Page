import "./cButton.css";

interface CButtonProps {
    title: string;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const CButton: React.FC<CButtonProps> = ({title,onClick}) => {
    return(
        <>
        <div onClick={onClick} className="button-design">{title}</div>
        </>
    )
};
