# Form Validation Implementation Plan

## Steps:
1. [x] Fix typo in changeHandler ('cosnt' → 'const')\n2. [x] Add onChange and value props to inputs for controlled components
3. [x] Add errors state: {firstName: '', lastName: ''}
4. [x] Update changeHandler to validate onChange and set errors\n5. [x] Add error display spans in JSX below inputs\n6. [x] Update submitHandler to validate before alert\n7. [x] Test: npm start, check validation/errors/submit
8. [x] [Optional] Add CSS for .error in App.css\n9. [x] Update TODO.md with completion

Standard rules: required, min 2 chars. Errors shown in red below inputs. Submit disabled if invalid."

