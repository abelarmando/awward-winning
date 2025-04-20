function Button({ id, title, rightIcon, leftIcon, containerClass }) {
  return (
    <div
      id={id}
      title={title}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="font-general text-xs uppercase ">{title}</span>
      {rightIcon}
    </div>
  );
}

export default Button;
