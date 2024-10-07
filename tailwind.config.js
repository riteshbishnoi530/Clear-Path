tailwind.config = {
    theme: {
        container: {
            center: true,
            screens: {
                sm: '992px',
                md: '1140px',
                lg: '1140px',
                xl: '1140px',
                '2xl': '1140px',
            },
        },
        extend: {
            colors: {
                offBlue: '#1B3353',
                offSky: '#2BA8E0',
                offGrey: '#1B335333',
                offWhite: '#F3F5F6'
            },
            fontSize: {
                '1xl': '40px'
            },
            boxShadow: {
                '6xl': '0px 14px 30.5px 0px #1B33531F',
                '1xl': '0px 0px 49px 7px #00000017',
            },
            fontFamily: {
                ei: ['El Messiri', 'sans-serif'],
                leto: ['Lato', 'sans-serif']
            }
        }
    }
}