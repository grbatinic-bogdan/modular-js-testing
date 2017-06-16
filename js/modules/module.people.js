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

    function addPerson(person) {
        _people.push(person);
        _render();
    }

    function removePerson(person) {
        if (_people.indexOf(person) > -1) {
            _people.splice(
                _people.indexOf(person, 1)
            )
        }

        _render();
    }

    function _render() {
        _peopleList.innerHTML = Mustache.render(_template, {people: _people});
    }



    function init() {

        _cacheDom();

        /*
        _form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log(event);
        });
        */
    }

    return {
        addPerson: addPerson,
        removePerson: removePerson,
        init: init
    };

}());