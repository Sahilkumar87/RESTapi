const get404 = (res, req, next) => {
    res.status(404).json({message: "Page not found"});

}


exports.modules = get404;