const CustomPromise = function (callback) {
    this.__success__ = [];
    this.__error__ = [];
    this._callback = callback;
    let state = 'pending';

    this.state = function () {
        return state;
    }

    this.then = function (successCb, rejectCb) {
        if (state !== 'pending'){
            // this.__s__ = [successCb]
            // this __e__ = rejectCb
            //fire promise
        }
        if (successCb) {
            this.__success__.push(successCb);
        }
        if (rejectCb) {
            this.__error__.push(rejectCb);
        }

    }
    this.catch = function (rejectCb) {
        this.then(null, rejectCb)
    }

    this._resolve = function (result) {
        this.__success__.forEach(cb => cb(result));
        state = 'fulfilled';
    }

    this._reject = function (err) {
        this.__error__.forEach(cb => cb(err))
        state = 'rejected';
    }

    // fire promise
    setTimeout(() => {
        callback(this._resolve.bind(this), this._reject.bind(this));
    }, 0)

}