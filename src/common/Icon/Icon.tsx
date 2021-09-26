import icons from './icons.svg';

interface Props {
    name: string;
    className?: string;
}

export function Icon({ name, className }: Props): JSX.Element {
    return (
        <svg className={className}>
            <use xlinkHref={`${icons}#${name}`} />
        </svg>
    );
}
