var people = (function(){

    var _people = [];
    var _form;
    var _template;
    var _peopleList;

    function _cacheDom() {
        _form = document.getElementById('personForm');
        _template = document.getElementById('people-template').textContent;
        _peopleList = document.getElementById('people');
    }    

    function _render() {
        _peopleList.innerHTML = Mustache.render(_template, {people: _people});
        _restartRemoveHandlers();
    }

    function _addPersonHandler() {
        _form.addEventListener('submit', function(event) {
            event.preventDefault();
            var input = document.getElementsByTagName('input')[0]
            var personName = input.value;
            if (personName) {
                addPerson(personName);
                input.value = '';
            }
        });
    }

    function _removePersonHandler(event) {        
        var parentListItem = event.target.parentElement;
        var name = event.target.previousElementSibling.textContent;        
        if (name) {
            removePerson(name);
        }
    }

    function _restartRemoveHandlers() {
        var deleteBtns = document.querySelectorAll('.del');        
        
        if (deleteBtns) {            
            deleteBtns.forEach(function(deleteBtn) {
                deleteBtn.removeEventListener('click', _removePersonHandler);
                deleteBtn.addEventListener('click', _removePersonHandler);
            });
        }        
    }

    function addPerson(person) {
        _people.push(person);
        events.emit('peopleChange', _people.length);
        _render();
    }

    function removePerson(person) {
        if (_people.indexOf(person) > -1) {
            _people.splice(
                _people.indexOf(person),
                1
            );
        }
        events.emit('peopleChange', _people.length);
        _render();
    }

    function init() {
        _cacheDom();
        _addPersonHandler();        
    }

    return {
        addPerson: addPerson,
        removePerson: removePerson,
        init: init
    };

}());