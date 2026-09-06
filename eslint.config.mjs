import coreWebVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';

const eslintConfig = [
    ...coreWebVitals,
    prettierConfig,
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'react-hooks/set-state-in-effect': 'warn',
        },
    },
];

export default eslintConfig;
