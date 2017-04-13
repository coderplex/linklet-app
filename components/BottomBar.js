import Link from 'next/link'

export default ({ url: { pathname } }) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a className={pathname === '/' ? 'active' : ''}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488.1 488.1'>
                <path
                  d='M327.7 342.8l-4.3-4.3-.5-.5c-23.8 14.1-51.2 21.7-79.3 21.7-35.3 0-68.9-11.7-96.2-33.3-7.4 5.1-15 10.8-22.4 16.9-5.9 4.8-9.3 12.1-9.3 19.7v36.1h256.5v-11.9l-37.7-37.7-6.8-6.7zm-78-220.5h-11.4c-26.2 0-47.5 21.3-47.5 47.5v52.7c0 8.3 4.2 15.5 10.6 19.8v45c12.9 6.6 27.3 10.2 42.3 10.2 15.2 0 29.8-3.6 42.8-10.4v-44.7c6.4-4.3 10.6-11.5 10.6-19.8v-52.7c.1-26.4-21.2-47.6-47.4-47.6zm230.6 185.4c-27.4-22.5-56.9-37.4-62.9-40.4-.7-.3-1.1-1-1.1-1.8v-42.6c5.4-3.6 8.9-9.7 8.9-16.6v-44.2c0-22-17.8-39.8-39.8-39.8h-9.2c14 22.7 22.1 48.7 23.1 75.8 1.2 30.2-6.4 59.8-21.6 85.4l.5.5 2 2 2.3 2.3 6.8 6.8 59.6 59.6h39.2v-30.3c0-6.5-2.9-12.6-7.8-16.7z'
                />
                <path
                  d='M453.9 387.7L375.2 309l-6.8-6.8-2.3-2.3-2-2-5.3 5.3-11.4-11.4c45.2-53.3 42.7-133.3-7.7-183.7-26.5-26.5-61.3-39.8-96-39.8s-69.5 13.3-96 39.8c-53 53-53 139 0 192 26.5 26.5 61.3 39.8 96 39.8 31.2 0 62.4-10.7 87.7-32.1l11.4 11.4-5.3 5.3 4.3 4.3 6.8 6.8 78.7 78.7c3.7 3.7 8.5 5.5 13.3 5.5s9.6-1.8 13.3-5.5c7.3-7.3 7.3-19.2 0-26.6 0 .1 0 0 0 0zM323.7 284.2c-22.1 22.1-51.1 33.1-80 33.1-29 0-57.9-11-80-33.1-44.2-44.2-44.2-115.8 0-160 22.1-22.1 51.1-33.1 80-33.1 29 0 57.9 11 80 33.1 44.2 44.1 44.2 115.8 0 160z'
                />
                <path
                  d='M111.4 122.3h-8.7c-22 0-39.8 17.8-39.8 39.8v44.2c0 6.9 3.5 13 8.9 16.6v42.6c0 .8-.4 1.4-1.1 1.8-6 2.9-35.5 17.9-62.9 40.4-4.9 4.1-7.8 10.2-7.8 16.6v30.3h97.2c2-10.3 7.4-19.6 15.6-26.3 6.6-5.4 13.3-10.5 19.9-15.2-51.1-52-58.2-131.2-21.3-190.8z'
                />
              </svg>
              <span>WA Group Links</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/posted-links'>
            <a className={pathname === '/posted-links' ? 'active' : ''}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 503.118 503.118'
              >
                <path
                  d='M107.067 317.195c1.713-1.708 2.568-3.898 2.568-6.563 0-2.663-.855-4.853-2.568-6.571-1.714-1.707-3.905-2.562-6.567-2.562H9.135c-2.666 0-4.853.855-6.567 2.562C.859 305.772 0 307.962 0 310.632c0 2.665.855 4.855 2.568 6.563 1.714 1.711 3.905 2.566 6.567 2.566H100.5c2.666.005 4.853-.851 6.567-2.566zm203.562-207.561c2.669 0 4.859-.855 6.563-2.568 1.718-1.711 2.574-3.901 2.574-6.567V9.138c0-2.659-.856-4.85-2.574-6.565-1.704-1.711-3.895-2.57-6.563-2.57-2.662 0-4.853.859-6.563 2.57-1.711 1.713-2.566 3.903-2.566 6.565v91.361c0 2.666.855 4.856 2.566 6.567 1.718 1.713 3.908 2.568 6.563 2.568zm-191.858 237.55c-2.478 0-4.664.855-6.567 2.563l-73.089 73.087c-1.713 1.902-2.568 4.093-2.568 6.567s.855 4.664 2.568 6.566c2.096 1.708 4.283 2.57 6.567 2.57 2.475 0 4.665-.862 6.567-2.57l73.089-73.087c1.714-1.902 2.568-4.093 2.568-6.57 0-2.471-.854-4.661-2.568-6.563-1.902-1.708-4.093-2.563-6.567-2.563zm237.544-219.279c2.283 0 4.473-.855 6.571-2.565l73.087-73.089c1.707-1.903 2.562-4.093 2.562-6.567 0-2.475-.855-4.665-2.562-6.567-1.91-1.709-4.093-2.568-6.571-2.568-2.471 0-4.66.859-6.563 2.568l-73.087 73.089c-1.708 1.903-2.57 4.093-2.57 6.567s.862 4.661 2.57 6.567c2.094 1.71 4.285 2.565 6.563 2.565zm-5.708 65.1c-4-3.999-9.328-7.994-15.988-11.991l-5.14 68.238 78.23 78.508c5.328 5.328 7.987 11.807 7.987 19.417 0 7.423-2.662 13.802-7.987 19.13l-41.977 41.686c-5.146 5.146-11.608 7.666-19.417 7.566-7.81-.1-14.271-2.707-19.411-7.854l-77.946-78.225-68.234 5.144c3.999 6.656 7.993 11.988 11.991 15.985l95.362 95.643c15.803 16.18 35.207 24.27 58.238 24.27 22.846 0 42.154-7.898 57.957-23.695l41.977-41.685c16.173-15.8 24.27-35.115 24.27-57.958 0-22.46-7.994-41.877-23.982-58.248l-95.93-95.931zm121.911-35.116c-1.711-1.709-3.901-2.565-6.563-2.565H374.59c-2.662 0-4.853.855-6.563 2.565-1.715 1.713-2.57 3.903-2.57 6.567 0 2.666.855 4.856 2.57 6.567 1.711 1.712 3.901 2.568 6.563 2.568h91.365c2.662 0 4.853-.856 6.563-2.568 1.708-1.711 2.563-3.901 2.563-6.567.001-2.664-.855-4.854-2.563-6.567zm-363.17-90.79c5.523-5.14 11.991-7.705 19.417-7.705 7.611 0 14.084 2.663 19.414 7.993l77.943 78.227 68.234-5.142c-4-6.661-7.99-11.991-11.991-15.987l-95.358-95.643c-15.798-16.178-35.212-24.27-58.242-24.27-22.841 0-42.16 7.902-57.958 23.7l-41.97 41.683C12.659 85.756 4.57 105.073 4.57 127.912c0 22.463 7.996 41.877 23.982 58.245l95.93 95.93c3.995 4.001 9.325 7.995 15.986 11.991l5.139-68.521-78.23-78.227c-5.327-5.33-7.992-11.801-7.992-19.417 0-7.421 2.662-13.796 7.992-19.126l41.971-41.688zm55.106 298.352c-2.667 0-4.854.855-6.567 2.563-1.711 1.711-2.568 3.901-2.568 6.57v91.358c0 2.669.854 4.853 2.568 6.57 1.713 1.707 3.9 2.566 6.567 2.566 2.666 0 4.853-.859 6.567-2.566 1.713-1.718 2.568-3.901 2.568-6.57v-91.358c0-2.662-.855-4.853-2.568-6.57-1.715-1.707-3.905-2.563-6.567-2.563z'
                />
              </svg>
              <span>Posted Links</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/my-links'>
            <a className={pathname === '/my-links' ? 'active' : ''}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path
                  d='M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.089 9.089-9.089 23.823 0 32.912 4.543 4.544 10.499 6.816 16.455 6.816 5.956 0 11.913-2.271 16.457-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z'
                />
                <path
                  d='M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z'
                />
              </svg>
              <span>My Links</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/submit-link'>
            <a className={pathname === '/submit-link' ? 'active' : ''}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 503.118 503.118'
              >
                <path
                  d='M191.852 260.427l-60.628 60.62c-22.054 22.048-59.52 20.479-83.508-3.505-23.991-23.998-25.569-61.446-3.51-83.517l68.694-68.69c22.057-22.057 59.52-20.479 83.511 3.505 10.214 10.212 16.321 22.859 18.313 35.727 8.889-.929 17.271-4.569 23.795-11.089l2.53-2.53c-4.052-15.396-12.125-30.14-24.37-42.377-35.171-35.171-90.824-36.744-124.056-3.505l-68.69 68.69c-33.239 33.229-31.662 88.889 3.507 124.061 35.168 35.166 90.821 36.739 124.06 3.505l68.69-68.69c3.89-3.888 7.269-8.116 10.207-12.563-12.599 2.589-25.686 2.645-38.545.358z'
                />
                <path
                  d='M210.06 27.633l-68.7 68.695c-3.899 3.901-7.273 8.13-10.218 12.578 12.603-2.581 25.694-2.66 38.545-.359l60.642-60.639c22.052-22.057 59.52-20.479 83.508 3.509 23.994 23.994 25.571 61.452 3.51 83.508l-68.689 68.695c-22.057 22.057-59.515 20.483-83.511-3.51-10.214-10.212-16.321-22.869-18.314-35.731-8.888.92-17.275 4.583-23.795 11.094l-2.527 2.53c4.051 15.401 12.123 30.14 24.367 42.381 35.171 35.172 90.824 36.739 124.059 3.51l68.685-68.69c33.239-33.239 31.662-88.889-3.505-124.056-35.163-35.171-90.823-36.753-124.057-3.515zm140.978 224.109c-52.794 0-95.581 42.797-95.581 95.582 0 52.789 42.787 95.591 95.581 95.591 52.79 0 95.577-42.802 95.577-95.591 0-52.785-42.787-95.582-95.577-95.582zm56.154 115.276h-35.348v35.503c0 11.164-9.055 20.199-20.214 20.199s-20.208-9.035-20.208-20.199v-35.503h-35.358c-11.149 0-20.198-9.054-20.198-20.208s9.049-20.208 20.198-20.208h35.358v-35.214c0-11.154 9.049-20.203 20.208-20.203s20.214 9.049 20.214 20.203v35.214h35.348c11.159 0 20.213 9.054 20.213 20.208-.004 11.164-9.053 20.208-20.213 20.208z'
                />
              </svg>
              <span>Submit Link</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/profile'>
            <a className={pathname === '/profile' ? 'active' : ''}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 478.703 478.703'
              >
                <path
                  d='M454.2 189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6c-14.3 2.4-24.7 14.7-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6c2.4 14.3 14.7 24.7 29.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6c14.3-2.4 24.7-14.7 24.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8l-29.8-29.8c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z'
                />
                <path
                  d='M239.4 136.001c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3-46.3-103.3-103.3-103.3zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z'
                />
              </svg>
              <span>Profile</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>
      {
        `
      div {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        min-height: 56px;
        background: #f4f4f4;
        box-shadow: 0 -1px 10px #ccc;
        display: flex;
      }
      nav {
        display: flex;
        width: 100%;
      }
      ul {
        flex: 1;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        text-align: center;
        align-items: center;
      }
      svg {
        width: 30px;
        height: 40px;
      }
      a {
        width: 100%;
        text-decoration: none;
        font-size: 28px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #444;
      }
      a span {
        flex: 1;
        font-size: 8px;
      }
      a.active {
        color: #253592;
      }
      a.active svg {
        fill: #253592;
      }
      li {
        flex: 1;
        display: flex;
        align-items: center;
        border-right: 1px solid #888;
      }
      @media(min-width: 720px) {
        div {
          width: calc(100% - 200px);
          margin-left: 200px;
        }
      }
    `
      }
    </style>
  </div>
)
