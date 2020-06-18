const CustomPromise = function (callback) {
    this.__success__ = [];
    this.__error__ = [];
    this._callback = callback;

    this.then = function (successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb);
        }
        if (rejectCb) {
            this.__error__.push(rejectCb);
        }
    }
    this.catch = function (rejectCb) {
        this.then(null, rejectCB)
    }

    this._resolve = function (result) {
        this.__success__.forEach(cb => cb(result));
    }

    this._reject = function (err) {
        this.__error__.forEach(cb => cb(err))
    }

    setTimeout(() => {
        callback(this._resolve.bind(this), this._reject.bind(this));
    }, 0)

}