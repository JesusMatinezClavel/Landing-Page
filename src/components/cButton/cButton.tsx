import "./cButton.css";

interface CButtonProps {
    title: string;
}

export const CButton: React.FC<CButtonProps> = ({title}) => {
    return(
        <>
        <div className="button-design">{title}</div>
        </>
    )
};
