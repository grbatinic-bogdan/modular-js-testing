var stats = (function(){

    'use strict';

    var _people = 0;
    var _rootEl;
    var _template;

    function _cacheDom() {
        _rootEl = document.getElementById('statsModule');
        _template = document.getElementById('stats-template').textContent;
    }

    function _render() {
        _rootEl.innerHTML = Mustache.render(_template, {people: _people});
    }

    function _setPeople(newPeople) {
        console.log(newPeople);
        _people = newPeople;
        _render();
    }

    function init() {        
        _cacheDom();
        _render();
        events.on('peopleChange', _setPeople);
    }

    function destroy() {
        _rootEl.remove();
        events.off('peopleChange', _setPeople);
    }

    return {
        init: init,
        destroy: destroy
    }
}());