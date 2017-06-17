var events = (function() {
    var _events = {};

    function on(eventName, fn) {
        _events[eventName] = _events[eventName] || [];
        _events[eventName].push(fn);
    }

    function off(eventName, fn) {
        if (_events[eventName]) {
            _events[eventName].map(function(handler, index) {
                if (fn === handler) {
                    _events[eventName].splice(index, 1);
                }
            });
        }        
    }

    function emit(eventName, data) {
        if (_events[eventName]) {            
            _events[eventName].map(function(eventHandler) {
                eventHandler(data);
            })
        }
    }

    return {
        on: on,
        off: off,
        emit: emit
    }
}());