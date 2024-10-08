interface LogoProps {
  withoutBackground?: boolean;
}

export default function Logo(props: LogoProps) {
  return (
    <div className="w-[100px] md:w-[50px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Logo Minhas Finanças"
      >
        {props.withoutBackground ? (
          ""
        ) : (
          <>
            <path
              fill="#6b22a8"
              d="M0 0h80.6C91.3 0 100 8.7 100 19.4v61.1c0 10.7-8.7 19.4-19.4 19.4H0V0Z"
            />
            <path
              fill="#7e22cd"
              d="M0 70v30h80.5c10.7 0 19.4-8.7 19.4-19.4v-30H19.4C8.7 50.6 0 59.2 0 70Z"
            />
          </>
        )}
        <path
          fill="#fff"
          d="M48.5 72.7h-5.3c-.7-.2-1.3-.6-1.7-1.2-.4-.6-.5-1.3-.4-2l.5-2.2c-2.6-.9-5-2.3-7.1-4.2 0 0-.2-.2-.2-.3-.2-.2-.3-.4-.4-.7-.1-.3-.2-.7-.2-1s0-.7.2-1c.1-.3.3-.6.6-.9l2.7-2.6c1-1 2.7-1 3.7 0 2.2 2.1 5.1 3.2 8.2 3.2 2.1 0 4.5-.6 4.5-2.4s-1-1.5-4.7-2.9l-1.2-.5c-5-1.8-10.1-4.5-10.1-11s4.6-10.6 12.1-11.3l.5-2.3c.1-.6.5-1.2 1-1.5.5-.4 1.1-.6 1.7-.6h5.3c.3 0 .7.2 1 .4.3.2.5.4.7.7.2.3.3.6.4 1v1l-.5 2.5c2.2.9 4.2 2.1 6 3.6l.1.1c.6.6.8 1.3.8 2s-.3 1.3-.8 1.8l-2.5 2.5c-.5.5-1.1.7-1.8.7s-1.3-.2-1.8-.7c-2.2-1.8-4.9-2.8-7.8-2.8-.6 0-3.8 0-3.8 1.9s1.4 1.8 4.3 2.9l.8.3c5.8 1.9 11.2 4.6 11.2 11.1s-4.9 11.1-12.6 11.9l-.5 2.2c-.1.6-.5 1.1-.9 1.5-.5.4-1.1.6-1.7.6Zm-4.8-2.8h4.7l.6-3.2c.1-.6.6-1 1.3-1.1 6.8-.4 11-4 11-9.3s-3.6-6.6-9.4-8.5l-.8-.3c-3-1.1-6.1-2.3-6.1-5.4s2.5-4.6 6.6-4.6c3.5 0 6.9 1.2 9.6 3.5l2.4-2.4c-1.8-1.5-3.9-2.7-6.1-3.4-.7-.2-1-.9-.9-1.6l.7-3.6h-4.7l-.6 3.2c-.1.6-.7 1.1-1.3 1.1-2.5.1-10.5 1.1-10.5 8.6s3.3 6.6 8.3 8.4l1.3.5c3.9 1.4 6.5 2.4 6.5 5.5s-2.9 5.2-7.2 5.2c-3.7 0-7.3-1.3-10.1-3.9l-2.5 2.5c2 1.8 4.4 3.1 7 3.8.7.2 1.2.9 1 1.6l-.7 3.4Zm18.4-27.8Zm1.5-3.5Z"
        />
      </svg>
    </div>
  );
}
