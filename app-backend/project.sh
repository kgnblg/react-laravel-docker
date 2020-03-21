function build_image {
    docker build -t kgnblg/app-backend .
}

function run_container {
    winpty docker run --rm -it -p 8080:8000 kgnblg/app-backend
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