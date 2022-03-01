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

Linhas do arquivo tsconfig q valem a pena editar:
    - exclude/include (quais pastas/arquivos compilar ou não)
    - rootDir/outDir (clonar estrutura/qual local salvar)
    - noEmitOnError (não emitirá nada se houver erro:D)
    - noComment (não compila os comentários, bom fazer)

    ** para melhorar a qualidade do código
        -"noUnusedLocals": true, 
        -"noUnusedParameteres": true,
        -"noImplicitReturns": true,
    (grifa em amarelo var, parametros e funções não utilizadas)