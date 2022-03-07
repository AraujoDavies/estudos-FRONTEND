import { ReactNode } from 'react'
// import ReactNode para Children

type Props = {
    children: ReactNode;
    legend?: string
}

export const Photo = ( {legend, children}: Props) => {
    return ( 
        <> 
            {children}
            <p>{legend}</p>
        </> /* fragment */
    )
}