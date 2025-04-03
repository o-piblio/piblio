export function useMDXComponents(components) {
  const esquivar_do_cabecalho = "scroll-mt-[calc(var(--header-height)+10px)]";
  return {
    h1: ({ children }) => (
      <h1 className={`text-xl font-semibold ${esquivar_do_cabecalho}`}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`text-lg font-semibold mt-2 ${esquivar_do_cabecalho}`} id={children.toLowerCase().replace(/\s/g, '-')}>{children}</h2>
    ),
    ul: ({ children }) => (
      <ul className="list-disc ml-4">{children}</ul>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 dark:text-blue-400 hover:underline"
      >
        {children}
      </a>
    ),
    ...components,
  }
}