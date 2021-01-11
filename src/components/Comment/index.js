import './styles.scss';
import { Avatar } from '../Avatar';

export function Comment(props) {
    return (
        <div className="comment">
            <Avatar user={props.user} />

            <div className="content">
                <div className="author-name">
                    {props.user.name}
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}
