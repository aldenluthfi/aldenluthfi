/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

const colors = require('tailwindcss/colors')

module.exports = {
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
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {
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

                'bg-primary': colors.white,
                'bg-secondary': colors.slate[100],
                'text': colors.neutral[950],

                'accent-primary': {
                    '50': '#ffffea',
                    '100': '#fffcc5',
                    '200': '#fffa85',
                    '300': '#fff046',
                    '400': '#ffe21b',
                    '500': '#ffc300',
                    '600': '#e29700',
                    '700': '#bb6b02',
                    '800': '#985308',
                    '900': '#7c430b',
                    '950': '#482300',
                },

                'accent-secondary': colors.slate
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