export const LowerCasedArray = [
    'var',
    'let', 
    'const', 
    'function', 
    'return', 
    'if', 
    'else', 
    'for', 
    'while', 
    'do', 
    'switch', 
    'case', 
    'break', 
    'continue', 
    'try', 
    'catch', 
    'finally', 
    'this', 
    'new', 
    'in', 
    'of', 
    'typeof', 
    'instanceof', 
    'null', 
    'undefined',
    'class',
    'extends',
    'super',
    'async',
    'await',
    'export',
    'import',
    'debugger',
    'delete',
    'void',
    'yield',
    'interface',    
    'type',    
    'extends',    
    'implements',    
    'private',    
    'public',    
    'protected',    
    'readonly',    
    'constructor',    
    'abstract',    
    'static',    
    'any',    
    'unknown',    
    'never',    
    'enum',    
    'namespace',       
    'declare'
]

export const getIndex = () => {
    return Math.floor(Math.random() * LowerCasedArray.length)
}