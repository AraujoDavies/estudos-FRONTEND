pasta public:
    arquivos que são exibidos de fato no site

pasta src:
    código fonte por trás do código exibido

comandos para compilar o TS:
    - tsc arquivo.ts
    - tsc arquivo.ts --outDir public (compila e coloca na pasta public)
    - tsc arquivo.ts --noEmitOnError (se tiver erro no arquivo typescrip ele nem gera o arquivo)
    - tsc arquivo.ts -w (WatchMode, fica compilando automaticamente :D)

Arquivo de configuração:
    - tsc --init (criar o tsconfig.json)
    - tsc (compila tudo se o tsconfig.json estiver criado)
    - tsc -w (WatchMode para todos os arquivos se tsconfig.json criado)