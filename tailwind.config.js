/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./public/**/*.blade.php",
        "./public/**/*.php",
        "./public/**/*.js",
        "./public/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
