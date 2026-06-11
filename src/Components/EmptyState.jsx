function EmptyState({icon,message,onText,onAction}){


    return(
        <div>
            <h2>{icon}</h2>
            <p>{message}</p>
            {onText && onAction && (<button onClick={onAction}>{onText}</button>)}
        </div>
    )
}
export default EmptyState;