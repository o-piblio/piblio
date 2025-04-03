const EmailCopiavel = ({ email }) => {
  const { toast } = useToast()
  const preRef = useRef<HTMLSpanElement>(null);

  // função para copiar o conteúdo renderizado dentro do <pre>
  const copiar = () => {
    if (preRef.current) {
      // seleciona o texto renderizado dentro do elemento
      const content = preRef.current.innerText;
      navigator.clipboard.writeText(content)}
  };

  return(
      <Button
        variant="outline"
        className="h-[30px] p-0 gap-0 inline-flex items-center group hover:bg-background overflow-hidden"
        onClick={copiar}
      >
        <span className="h-full w-full px-1 inline-flex items-center group-hover:bg-background text-destaque hover:underline"><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><span ref={preRef}>{email}</span></a></span>
        <span 
          className="border-l h-full w-full inline-flex items-center justify-center px-2 group-hover:bg-accent group-hover:text-accent-foreground"
        >
          <Copy/>
        </span>
      </Button>
  )
}
  };