/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        '../../**/*.js',

        /* Process all svg files */
        '../../**/*.svg',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        '../../**/*.py'
    ],
    theme: {
        extend: {
            transitionTimingFunction: {
                'bounce': 'cubic-bezier(0.59,-0.14,0.56,1.8)',
            },
            fontSize: {
                '10xl': ['10rem', '10rem'],
                '11xl': ['12rem', '12rem'],
                '12xl': ['14rem', '14rem'],
                '13xl': ['16rem', '16rem'],
                '14xl': ['18rem', '18rem'],
            },
            fontFamily: {
                'heading': ['heading', 'sans-serif'],
                'heading-italic': ['heading-italic', 'sans-serif'],
                'code': [
                    "'code', 'sans-serif'",
                    {
                        fontFeatureSettings: '"ss10", "ss01", "ss04", "cv30", "cv14", "ss07", "cv30", "ss09", "cv12"',
                    }
                ],
                'body': [
                    "'body', 'sans-serif'",
                    {
                        fontFeatureSettings: '"ss05", "liga", "ss02"',
                    }
                ],
                'body-bold': [
                    "'body-bold', 'sans-serif'",
                    {
                        fontFeatureSettings: '"ss05", "liga", "ss02"',
                    }
                ],
                'body-italic': [
                    "'body-italic', 'sans-serif'",
                    {
                        fontFeatureSettings: '"ss05", "liga", "ss02"',
                    }
                ],
                'body-bold-italic': [
                    "'body-bold-italic', 'sans-serif'",
                    {
                        fontFeatureSettings: '"ss05", "liga", "ss02"',
                    }
                ],
            },
            screens: {
                'tablet': '768px',
                'desktop': '1024px',
            },
            colors: {
                'transparent': 'transparent',

                /* Custom Colors */
                red: {
                    50 : 'rgba(var(--red-500) / <alpha-value>)',
                    100: 'rgba(var(--red-100) / <alpha-value>)',
                    200: 'rgba(var(--red-200) / <alpha-value>)',
                    300: 'rgba(var(--red-300) / <alpha-value>)',
                    400: 'rgba(var(--red-400) / <alpha-value>)',
                    500: 'rgba(var(--red-500) / <alpha-value>)',
                    600: 'rgba(var(--red-600) / <alpha-value>)',
                    700: 'rgba(var(--red-700) / <alpha-value>)',
                    800: 'rgba(var(--red-800) / <alpha-value>)',
                    900: 'rgba(var(--red-900) / <alpha-value>)',
                    950: 'rgba(var(--red-950) / <alpha-value>)',
                },
                orange: {
                    50 : 'rgba(var(--orange-500) / <alpha-value>)',
                    100: 'rgba(var(--orange-100) / <alpha-value>)',
                    200: 'rgba(var(--orange-200) / <alpha-value>)',
                    300: 'rgba(var(--orange-300) / <alpha-value>)',
                    400: 'rgba(var(--orange-400) / <alpha-value>)',
                    500: 'rgba(var(--orange-500) / <alpha-value>)',
                    600: 'rgba(var(--orange-600) / <alpha-value>)',
                    700: 'rgba(var(--orange-700) / <alpha-value>)',
                    800: 'rgba(var(--orange-800) / <alpha-value>)',
                    900: 'rgba(var(--orange-900) / <alpha-value>)',
                    950: 'rgba(var(--orange-950) / <alpha-value>)',
                },
                amber: {
                    50 : 'rgba(var(--amber-500) / <alpha-value>)',
                    100: 'rgba(var(--amber-100) / <alpha-value>)',
                    200: 'rgba(var(--amber-200) / <alpha-value>)',
                    300: 'rgba(var(--amber-300) / <alpha-value>)',
                    400: 'rgba(var(--amber-400) / <alpha-value>)',
                    500: 'rgba(var(--amber-500) / <alpha-value>)',
                    600: 'rgba(var(--amber-600) / <alpha-value>)',
                    700: 'rgba(var(--amber-700) / <alpha-value>)',
                    800: 'rgba(var(--amber-800) / <alpha-value>)',
                    900: 'rgba(var(--amber-900) / <alpha-value>)',
                    950: 'rgba(var(--amber-950) / <alpha-value>)',
                },
                yellow: {
                    50 : 'rgba(var(--yellow-500) / <alpha-value>)',
                    100: 'rgba(var(--yellow-100) / <alpha-value>)',
                    200: 'rgba(var(--yellow-200) / <alpha-value>)',
                    300: 'rgba(var(--yellow-300) / <alpha-value>)',
                    400: 'rgba(var(--yellow-400) / <alpha-value>)',
                    500: 'rgba(var(--yellow-500) / <alpha-value>)',
                    600: 'rgba(var(--yellow-600) / <alpha-value>)',
                    700: 'rgba(var(--yellow-700) / <alpha-value>)',
                    800: 'rgba(var(--yellow-800) / <alpha-value>)',
                    900: 'rgba(var(--yellow-900) / <alpha-value>)',
                    950: 'rgba(var(--yellow-950) / <alpha-value>)',
                },
                green: {
                    50 : 'rgba(var(--green-500) / <alpha-value>)',
                    100: 'rgba(var(--green-100) / <alpha-value>)',
                    200: 'rgba(var(--green-200) / <alpha-value>)',
                    300: 'rgba(var(--green-300) / <alpha-value>)',
                    400: 'rgba(var(--green-400) / <alpha-value>)',
                    500: 'rgba(var(--green-500) / <alpha-value>)',
                    600: 'rgba(var(--green-600) / <alpha-value>)',
                    700: 'rgba(var(--green-700) / <alpha-value>)',
                    800: 'rgba(var(--green-800) / <alpha-value>)',
                    900: 'rgba(var(--green-900) / <alpha-value>)',
                    950: 'rgba(var(--green-950) / <alpha-value>)',
                },
                teal: {
                    50 : 'rgba(var(--teal-500) / <alpha-value>)',
                    100: 'rgba(var(--teal-100) / <alpha-value>)',
                    200: 'rgba(var(--teal-200) / <alpha-value>)',
                    300: 'rgba(var(--teal-300) / <alpha-value>)',
                    400: 'rgba(var(--teal-400) / <alpha-value>)',
                    500: 'rgba(var(--teal-500) / <alpha-value>)',
                    600: 'rgba(var(--teal-600) / <alpha-value>)',
                    700: 'rgba(var(--teal-700) / <alpha-value>)',
                    800: 'rgba(var(--teal-800) / <alpha-value>)',
                    900: 'rgba(var(--teal-900) / <alpha-value>)',
                    950: 'rgba(var(--teal-950) / <alpha-value>)',
                },
                blue: {
                    50 : 'rgba(var(--blue-500) / <alpha-value>)',
                    100: 'rgba(var(--blue-100) / <alpha-value>)',
                    200: 'rgba(var(--blue-200) / <alpha-value>)',
                    300: 'rgba(var(--blue-300) / <alpha-value>)',
                    400: 'rgba(var(--blue-400) / <alpha-value>)',
                    500: 'rgba(var(--blue-500) / <alpha-value>)',
                    600: 'rgba(var(--blue-600) / <alpha-value>)',
                    700: 'rgba(var(--blue-700) / <alpha-value>)',
                    800: 'rgba(var(--blue-800) / <alpha-value>)',
                    900: 'rgba(var(--blue-900) / <alpha-value>)',
                    950: 'rgba(var(--blue-950) / <alpha-value>)',
                },
                indigo: {
                    50 : 'rgba(var(--indigo-500) / <alpha-value>)',
                    100: 'rgba(var(--indigo-100) / <alpha-value>)',
                    200: 'rgba(var(--indigo-200) / <alpha-value>)',
                    300: 'rgba(var(--indigo-300) / <alpha-value>)',
                    400: 'rgba(var(--indigo-400) / <alpha-value>)',
                    500: 'rgba(var(--indigo-500) / <alpha-value>)',
                    600: 'rgba(var(--indigo-600) / <alpha-value>)',
                    700: 'rgba(var(--indigo-700) / <alpha-value>)',
                    800: 'rgba(var(--indigo-800) / <alpha-value>)',
                    900: 'rgba(var(--indigo-900) / <alpha-value>)',
                    950: 'rgba(var(--indigo-950) / <alpha-value>)',
                },
                purple: {
                    50 : 'rgba(var(--purple-500) / <alpha-value>)',
                    100: 'rgba(var(--purple-100) / <alpha-value>)',
                    200: 'rgba(var(--purple-200) / <alpha-value>)',
                    300: 'rgba(var(--purple-300) / <alpha-value>)',
                    400: 'rgba(var(--purple-400) / <alpha-value>)',
                    500: 'rgba(var(--purple-500) / <alpha-value>)',
                    600: 'rgba(var(--purple-600) / <alpha-value>)',
                    700: 'rgba(var(--purple-700) / <alpha-value>)',
                    800: 'rgba(var(--purple-800) / <alpha-value>)',
                    900: 'rgba(var(--purple-900) / <alpha-value>)',
                    950: 'rgba(var(--purple-950) / <alpha-value>)',
                },
                gray: {
                    50 : 'rgba(var(--gray-500) / <alpha-value>)',
                    100: 'rgba(var(--gray-100) / <alpha-value>)',
                    200: 'rgba(var(--gray-200) / <alpha-value>)',
                    300: 'rgba(var(--gray-300) / <alpha-value>)',
                    400: 'rgba(var(--gray-400) / <alpha-value>)',
                    500: 'rgba(var(--gray-500) / <alpha-value>)',
                    600: 'rgba(var(--gray-600) / <alpha-value>)',
                    700: 'rgba(var(--gray-700) / <alpha-value>)',
                    800: 'rgba(var(--gray-800) / <alpha-value>)',
                    900: 'rgba(var(--gray-900) / <alpha-value>)',
                    950: 'rgba(var(--gray-950) / <alpha-value>)',
                },

                /* Theme Colors */
                'background': 'rgba(var(--background) / <alpha-value>)',
                'card-background': 'rgba(var(--card-background) / <alpha-value>)',
                'sidebar-background': 'rgba(var(--sidebar-background) / <alpha-value>)',

                'text': 'rgba(var(--text) / <alpha-value>)',
                'buttons-text': 'rgba(var(--buttons-text) / <alpha-value>)',
                'buttons-text-disabled': 'rgba(var(--buttons-text-disabled) / <alpha-value>)',

                'buttons-default': 'rgba(var(--buttons-default) / <alpha-value>)',
                'buttons-hover': 'rgba(var(--buttons-hover) / <alpha-value>)',
                'buttons-active': 'rgba(var(--buttons-active) / <alpha-value>)',
                'buttons-disabled': 'rgba(var(--buttons-disabled) / <alpha-value>)',

                'accent': 'rgba(var(--accent) / <alpha-value>)',
            }
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
        **/
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
