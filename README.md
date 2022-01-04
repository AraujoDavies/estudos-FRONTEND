Como usar o GIT (Comandos)

***é bom colocar um repositório com as instruções de como funciona cada projeto***
***.gitignore => colocar nome dos arquivos, pastas que não devem ser adicionado ao repositório***

git status                              -> verifica se há alterações e quais arquivos fazem parte do git
git init                                -> cria um repositório - com ou sem arquivos da pasta
git log                                 -> mostrar historico
git add -A ou nome do arquivos          -> coloca todos os arquivos novos no git q começa a observá-los
git commit -m "descrição da alteração"  -> adiciona os arquivos ao git e faz o registro

git reset
        --hard  "commit id"             -> volta no tempo apagando as alterações feitas posterior ao commit 
        --soft  "commit id"             -> volta no tempo mantendo as alterações anteriores ao commit (mais utilizado)

git branch                              -> mostra qual ramificação estamos fazendo as alterações
git branch nomedanovabranch             -> cria nova branch
git checkout nomebranch                 -> navega entre as branchs

git commit -am "description"            -> add arquivos e commita, atalho para evitar o add
git diff                                -> mostra as modificações feitas dentro do arquivo
git checkout HEAD -- nome.arquivo       -> volta o arquivo q foi modificado. antes do commit

git remote                              -> Mostra repositório remoto
git remote -v                           -> mostra o fetch e o push 
git push -u 'rep.remoto' 'branch'       -> leva o conteudo do meu repositorio local p remoto 