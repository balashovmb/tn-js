class CustomPromise {
    constructor(callback) {
        this.__success__ = [];
        this.__error__ = [];
        this._callback = callback;
        this._state = 'pending';

        if (callback) {
            setTimeout(() => {
                callback(this._resolve.bind(this), this._reject.bind(this));
            }, 0)
        }
    }

    get state() {
        return this._state;
    }

    get value(){
        return this.state;
    }

    then(successCb, rejectCb) {
        if (this._state === 'fulfilled' && successCb) {
            successCb(this._value);
        }
        if (this._state === 'rejected' && rejectCb) {
            rejectCb(this._value);
        }
        if (this._state === 'pending') {
            if (successCb) {
                this.__success__.push(successCb);
            }
            if (rejectCb) {
                this.__error__.push(rejectCb);
            }
        }
    }

    catch(rejectCb) {
        this.then(null, rejectCb)
    }

    _resolve(value) {
        if (this._state !== 'pending')
            throw new Error('Promise is settled');
        this.__success__.forEach(cb => cb(value));
        this._state = 'fulfilled';
        this._value = value;
    }

    _reject(value) {
        if (this._state !== 'pending')
            throw new Error('Promise is settled');
        this.__error__.forEach(cb => cb(value))
        this._state = 'rejected';
        this._value = value;
    }

    resolve(value) {
        this._resolve(value);
    }

    reject(value) {
        this._reject(value);
    }

    static resolve(value) {
        const promise = new CustomPromise();
        promise._value = value;
        promise._state = 'fulfilled';
        return promise;
    }

    static reject(value) {
        const promise = new CustomPromise();
        promise._value = value;
        promise._state = 'rejected';
        return promise;
    }
}