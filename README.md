# patternlab-example

INSTALL COMMANDS
----------------
1. clone repo: git clone https://github.com/monafouad/patternlab-example.git
2. go to pattern lab: cd patternlab-example
3. execute in terminal: wget https://github.com/pattern-lab/edition-php-twig-standard/releases/download/v2.2.1/twig-standard.zip
4. unzip project: unzip -n twig-standard.zip -x "twig-standard/source*" && mv twig-standard/* ./ && mv twig-standard/.* ./
rm -Rf twig-standard*
5. checkout: git checkout -- .gitignore
6. load server: php core/console --generate && php core/console --server --port 8066

DESCRIPTION
-----------
1. Clone git repo git clone https://github.com/monafouad/patternlab-example.git
2. Download PatternLab twig standard edition, and extract in "patternlab-example". Don't override existing files!
3. Launch PatternLab: php core/console --generate && php core/console --server
