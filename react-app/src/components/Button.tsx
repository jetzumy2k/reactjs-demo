interface Props {
  children?: string;
  type: "submit" | "reset" | "button";
  styleClass: string;
  onClickButton?: () => void;
  dataDismiss?: string;
  ariaLabel?: string;
}

function Button({
  children,
  type,
  styleClass,
  onClickButton,
  dataDismiss = "",
  ariaLabel = "",
}: Props) {
  return (
    <>
      <button
        type={type}
        className={`${styleClass}`}
        onClick={onClickButton}
        data-bs-dismiss={dataDismiss}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
