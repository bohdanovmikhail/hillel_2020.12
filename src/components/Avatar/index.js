import './styles.scss';

export function Avatar({ user: { avatar }}) {
    return (
        <img src={avatar} alt="" className="avatar" />
    );
}
