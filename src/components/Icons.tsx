import { LucideProps, User } from "lucide-react";

export const Icons = {
    user: User,
    logo: (props: LucideProps) => (
        <svg  {...props} viewBox="0 0 256 256" >
            <circle cx="128" cy="128" r="118.218" fill="#FF4A73"></circle>
            <path fill="#F973A3" d="M135.5,245.98c-2.48,0.16-4.98,0.24-7.5,0.24C62.71,246.22,9.78,193.29,9.78,128
								C9.78,59.648,67.59,5.639,135.5,10.02C73.7,13.88,24.78,65.23,24.78,128S73.7,242.12,135.5,245.98z"></path>
            <path fill="#EA2A6A" d="M246.22,128c0,65.29-52.93,118.22-118.22,118.22c-2.52,0-5.02-0.08-7.5-0.24
								c61.8-3.86,110.72-55.21,110.72-117.98S182.3,13.88,120.5,10.02C188.434,5.638,246.22,59.67,246.22,128z"></path>
            <path fill="#FFE2E2" d="M214.81,110.995c0-10.902-8.838-19.74-19.74-19.74c-8.956,0-16.514,5.966-18.929,14.14
				c-27.37-18.862-68.921-18.857-96.283,0c-2.414-8.173-9.973-14.14-18.929-14.14c-10.902,0-19.74,8.838-19.74,19.74
				c0,10.249,7.811,18.671,17.804,19.644c-1.935,4.983-2.979,10.26-2.979,15.724c0,30.435,32.229,55.108,71.985,55.108
				s71.985-24.673,71.985-55.108c0-5.464-1.044-10.741-2.979-15.724C206.999,129.666,214.81,121.243,214.81,110.995z"></path>
            <circle cx="96.388" cy="131.95" r="10.288" fill="#FF4A73"></circle>
            <circle cx="159.612" cy="131.95" r="10.288" fill="#FF4A73"></circle>
            <circle cx="180.101" cy="59.787" r="10.347" fill="#FFE2E2"></circle>
            <g>
                <path fill="#5F266D" d="M128,5.782C60.609,5.782,5.782,60.609,5.782,128c0,67.391,54.827,122.218,122.218,122.218
			c67.392,0,122.218-54.827,122.218-122.218C250.218,60.609,195.392,5.782,128,5.782z M128,242.218
			C65.02,242.218,13.782,190.98,13.782,128C13.782,65.02,65.02,13.782,128,13.782c62.979,0,114.218,51.238,114.218,114.217
			C242.218,190.98,190.979,242.218,128,242.218z"></path>
                <path fill="#5F266D" d="M44.474 85.031c2.046.844 4.382-.132 5.224-2.171.104-.252 10.764-25.392 40.508-38.378 2.024-.884 2.949-3.242 2.065-5.267-.885-2.024-3.243-2.949-5.267-2.065C54.332 51.415 42.778 78.655 42.303 79.807 41.459 81.849 42.432 84.188 44.474 85.031zM103.76 39.854c3.073-.779 6.267-1.418 9.495-1.898 2.185-.325 3.693-2.36 3.368-4.545s-2.354-3.692-4.545-3.368c-3.493.52-6.954 1.211-10.286 2.057-2.141.543-3.437 2.719-2.893 4.861C99.444 39.108 101.626 40.397 103.76 39.854zM147.639 158.981c-1.778-1.313-4.282-.935-5.594.842-5.969 8.084-21.646 8.085-27.616 0-1.312-1.777-3.817-2.154-5.594-.842-1.777 1.312-2.154 3.816-.842 5.594 9.187 12.443 31.323 12.413 40.487 0C149.793 162.797 149.416 160.293 147.639 158.981z"></path><path fill="#5F266D" d="M195.07,87.255c-8.686,0-16.621,4.835-20.749,12.22c-11.464-6.851-25.198-10.998-39.614-11.985
			l15.036-28.876l16.106,2.773c0.799,7.16,6.882,12.747,14.252,12.747c7.911,0,14.347-6.436,14.347-14.347
			c0-7.911-6.436-14.347-14.347-14.347c-5.657,0-10.544,3.299-12.879,8.066l-16.121-2.775c-3.585-0.618-6.992,1.286-8.447,4.114
			l-16.864,32.446c-16.045,0.36-31.461,4.625-44.111,12.184c-4.128-7.385-12.064-12.22-20.749-12.22
			c-13.09,0-23.74,10.649-23.74,23.739c0,10.599,6.859,19.616,16.587,22.65C43.296,170.926,80.051,205.471,128,205.471
			c41.897,0,75.984-26.516,75.984-59.108c0-4.294-0.591-8.555-1.762-12.718c9.729-3.034,16.588-12.051,16.588-22.65
			C218.811,97.905,208.161,87.255,195.07,87.255z M180.101,53.44c3.5,0,6.347,2.847,6.347,6.347c0,3.5-2.847,6.347-6.347,6.347
			s-6.347-2.847-6.347-6.347C173.754,56.287,176.601,53.44,180.101,53.44z M196.618,126.657c-2.631,0.256-4.3,2.958-3.341,5.429
			c1.796,4.627,2.707,9.431,2.707,14.277c0,28.181-30.498,51.108-67.984,51.108c-44.81,0-78.062-32.453-65.277-65.385
			c0.958-2.47-0.709-5.173-3.341-5.429c-8.09-0.788-14.191-7.521-14.191-15.663c0-8.679,7.061-15.739,15.74-15.739
			c6.925,0,13.132,4.636,15.093,11.273c0.77,2.609,3.87,3.701,6.106,2.16c25.969-17.897,65.733-17.925,91.744,0
			c2.229,1.538,5.333,0.455,6.105-2.161c1.961-6.637,8.167-11.272,15.093-11.272c8.679,0,15.74,7.061,15.74,15.739
			C210.811,119.136,204.709,125.87,196.618,126.657z"></path>
                <path fill="#5F266D" d="M96.388 117.662c-7.878 0-14.288 6.41-14.288 14.289 0 7.878 6.41 14.288 14.288 14.288s14.288-6.41 14.288-14.288C110.676 124.072 104.266 117.662 96.388 117.662zM96.388 138.239c-3.467 0-6.288-2.821-6.288-6.288 0-3.468 2.821-6.289 6.288-6.289s6.288 2.821 6.288 6.289C102.676 135.418 99.855 138.239 96.388 138.239zM159.612 117.662c-7.879 0-14.288 6.41-14.288 14.289 0 7.878 6.409 14.288 14.288 14.288s14.288-6.41 14.288-14.288C173.9 124.072 167.491 117.662 159.612 117.662zM159.612 138.239c-3.467 0-6.288-2.821-6.288-6.288 0-3.468 2.821-6.289 6.288-6.289s6.288 2.821 6.288 6.289C165.9 135.418 163.079 138.239 159.612 138.239z"></path>
            </g>
        </svg>
    ),
    google: (props: LucideProps) => (
        <svg {...props} viewBox='0 0 24 24'>
            <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#4285F4'
            />
            <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
            />
            <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
            />
            <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
            />
            <path d='M1 1h22v22H1z' fill='none' />
        </svg>
    ),
}
