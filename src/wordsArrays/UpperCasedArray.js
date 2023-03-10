export const UpperCasedArray = [
    'useState', 
    'useEffect', 
    'useContext', 
    'useReducer', 
    'useCallback', 
    'useMemo', 
    'useRef', 
    'useImperativeHandle', 
    'useLayoutEffect', 
    'useDebugValue', 
    'useTransition', 
    'useMutationEffect', 
    'useEffectOnce', 
    'useEvent', 
    'useRefEffect', 
    'useTitle', 
    'useScript', 
    'useServiceWorker', 
    'useWorker', 
    'useSWR', 
    'useRouter', 
    'useLocation', 
    'useParams', 
    'useQuery', 
    'useNavigate', 
    'useMatch', 
    'useIsInitialRender', 
    'useIdleCallback',
    'setTimeout', 
    'setInterval', 
    'clearTimeout', 
    'clearInterval', 
    'parseInt', 
    'parseFloat', 
    'isNaN', 
    'isFinite',
    'JSON'
];

export const getIndex = () => {
    return Math.floor(Math.random() * UpperCasedArray.length)
}