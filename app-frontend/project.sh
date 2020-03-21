function build_image {
    docker build -t kgnblg/app-frontend .
}

function run_container {
    winpty docker run --rm -it -p 8080:80 kgnblg/app-frontend
}

function print_help {
    echo  "Usage: $0 <command>"
    exit  1
}


case "$1" in
    build )
        build_image
        ;;
    run )
        run_container
        ;;
    * )
        print_help
        ;;
esac