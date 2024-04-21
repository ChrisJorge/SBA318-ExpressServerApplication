const error = (status, msg) => {
    let err = new Error(msg);
    err.status = status;
    return err;     
}

module.exports = error