<<<<<<< HEAD
if [ -d $1 ]; then
    echo "error:$1 已经存在"
    exit 1
else
    mkdir $1
    cd $1
    mkdir css js
    echo -e "<!DOCTYPE> \n <title>Hello</title> \n <h1>Hi</h1>" >index.html
    echo "h1{color: red;}" >css/style.css
    echo -e "var string = \"Hello World\"\n alert(string)" >js/main.js
#    touch index.html css/style.css js/main.js
    exit 0
=======
if [ -d $1 ]; then
    echo "error:$1 已经存在"
    exit 1
else
    mkdir $1
    cd $1
    mkdir css js
    echo -e "<!DOCTYPE> \n <title>Hello</title> \n <h1>Hi</h1>" >index.html
    echo "h1{color: red;}" >css/style.css
    echo -e "var string = \"Hello World\"\n alert(string)" >js/main.js
#    touch index.html css/style.css js/main.js
    exit 0
>>>>>>> 15d3ea096c43650f1e4b94dad3da75c064eca7ff
fi