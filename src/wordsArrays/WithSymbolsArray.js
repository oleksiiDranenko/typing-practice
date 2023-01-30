export const WithSymbolsArray = [
    '() =>',
    'createContext();',
    "path='/'",
    "path='*'",
    'useState();',
    'useEffect();',
    'useContext();',
    'useReducer();',
    'useCallback();',
    'useMemo();',
    'useRef();',
    'useDebugValue();',
    'JSON.parse(el);', 
    'JSON.stringify(el);'
];

export const getIndex = () => {
    return Math.floor(Math.random() * WithSymbolsArray.length)
}