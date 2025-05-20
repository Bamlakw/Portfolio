import styles from './ContactDescription.module.scss';
import classNames from 'classnames';
export function ContactDescription() {
    return (
        <div
            className={classNames(
                'leading-7',
                'w-[508px]',
                'max-md:max-w-full',
                styles.div1,
                styles.div1
            )}
        >
            <p style={{ fontFamily: 'Matter, -apple-system, Roboto, Helvetica, sans-serif' }}>
                If you have a project in mind and want to explore the possibility of working with
                me, send me an email and I will reply as soon as I can so we can discuss further
                details :)
            </p>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bamlakwtinsae1@gmail.com&su=Let%27s%20Work%20Together"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    fontFamily: 'Matter, sans-serif',
                    textDecoration: '#000000 underline solid',
                    color: '#000000',
                }}
            >
                Bamlakwtinsae@gmail.com ↗
            </a>
        </div>
    );
}
