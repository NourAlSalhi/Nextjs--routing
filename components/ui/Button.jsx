import Link from 'next/link';

import classes from './button.module.css';

function Button(props) {
    {
        props.link ? <Link href={props.link} className={classes.btn}>
            {props.children}
        </Link>
            :
            <button className={classes.btn} onClick={props.onClick}>
                {props.children}
            </button>

    }
}

export default Button;