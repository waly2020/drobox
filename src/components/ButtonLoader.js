const ButtonLoader = ({className,children}) => {
    return (
        <div className={`${className} py-3 px-2`}>
            <button className="text-center w-full">
                {children}
            </button>
        </div>
    );
}

export default ButtonLoader;