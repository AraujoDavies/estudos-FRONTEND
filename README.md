Como usar o GIT (Comandos)

***é bom colocar um README no repositório com as instruções de como funciona cada projeto***

***.gitignore => colocar nome dos arquivos, pastas que não devem ser adicionado ao repositório, antes de serem Adicionados***

git config --local user.name "zé" -> faz por projeto
git config --global user.name "zé" -> para maquina

git init                                -> cria um repositório - com ou sem arquivos da pasta
git init --bare                         -> cria um repositorio puro, que contém apenas as alterações dos arquivos, e não uma cópia física de cada um dos arquivos. (caso vc queira fazer um servidor de git localmente é uma boa)

git status                              -> verifica se há alterações e quais arquivos fazem parte do git
git log                                 -> mostrar historico
git log -n 2                            -> mostra os 2 ultimos logs
git log --oneline                       -> hash + mensagem
git log -p                              -> mostra as alterações de cada commit
git log --graph                         -> mostra as linhas das ramificações
git log cheats
https://devhints.io/git-log
git add -A ou . ou nome do arquivos     -> coloca todos os arquivos novos no git q começa a observá-los
git commit -m "descrição da alteração"  -> adiciona os arquivos ao git e faz o registro
***NUNCA COMMITAR CÓDIGO QUE NÃO FUNCIONA***

git reset
        --hard  "commit id"             -> volta no tempo apagando as alterações feitas posterior ao commit 
        --soft  "commit id"             -> volta no tempo mantendo as alterações anteriores ao commit (mais utilizado)

git branch                              -> mostra qual ramificação estamos fazendo as alterações
git branch 'nomedanovabranch'           -> cria nova branch
git branch -d 'nomebranch'              -> remover uma branch
git checkout 'nomebranch'               -> navega entre as branchs
git merge 'nomedaoutrabranch'           -> unifica o código de duas branches (fazer isso estando na master)
git rebase 'nomedaoutrabranch'          -> unifica todos os commit em um só log (fazer isso estando na master pois os commits da branch paralela ficaram sempre no final)
***https://git-school.github.io/visualizing-git/*** -> entenda o funcionamento do GIT

git commit -am "description"            -> add arquivos e commita, atalho para evitar o add
git diff                                -> mostra as modificações feitas dentro do arquivo
git checkout HEAD -- 'nome.arquivo'     -> volta o arquivo q foi modificado. antes do commit

git diff [hash1/branch1]..[hash2//branch2] -> mostra as diferenças entre os dois
git diff                                -> mostra oq foi alterado (senão adicionado)

git remote                              -> lista meus diretórios remotos
git remote -v                           -> lista o caminho dos diretorios
git remote add [definirNome] [caminhodoREP] -> URL, ip de outro pc, pasta,etc]
git remote rename [nomeRep] [newNomeRep]

git remote remove 'branch'              -> remove rep. remoto
git push/pull [nomeREP] [nomeBranch]    -> push = empura & pull = puxar
***(antes de fazer o push é bom fazer o pull para evitar conflitos) ;)***

git revert --no-edit 'idcommit'         -> volta commit sem apagar os commits a frente

andando no tempo:
git checkout [hashDoCommit] -> me leva para um commit especifico
*** porém nao consigo commitar mais nada. para commitar deve-se criar um novo branch ***
git checkout master -> volta para o presente rsrsrs

ctrl Z do git:
git restore <file> -> para desfazer alterações ainda não ADD
"git restore --staged <file> -> para tirar dos ADD
git revert 'Hash do commit q foi enviado errado' -> desfaz a alteração de um commit

git clone [caminhodoREP] [definirNomeClone] -> faz um clone de um repositorio remoto(url, diretorio, etc), porém não consigo modificar
        
git clean -n                            -> mostra arquivos que podem ser deletados (untracked)
git clean -f                            -> deleta arquivos untracked

git stash                               -> guarda todo codigo q nao foi ADD para ser trabalhado depois
git stash list                          -> mostra os codigos
git stash apply [n°daStash]             -> traz a stash e mantem na list
git stash drop                          -> apaga lista de stash
git stash pop                           -> faz o merge trazendo tudo q ta na list

git tag -a [nomedaVersão] -m "mensagem descritiva" -> Gerando uma versão(RELEASE), cria uma marco na história

***para contribuir com outros projetos faça um Fork e depois um Pull Request***