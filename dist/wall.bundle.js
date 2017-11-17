webpackJsonp([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Appcomponent = __webpack_require__(28);

var _Appcomponent2 = _interopRequireDefault(_Appcomponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Appcomponent2.default, null), document.getElementById('react-app'));

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _headerComponent = __webpack_require__(29);

var _headerComponent2 = _interopRequireDefault(_headerComponent);

var _leftMenuComponent = __webpack_require__(30);

var _leftMenuComponent2 = _interopRequireDefault(_leftMenuComponent);

var _contactsMenuComponent = __webpack_require__(31);

var _contactsMenuComponent2 = _interopRequireDefault(_contactsMenuComponent);

var _feedComponent = __webpack_require__(32);

var _feedComponent2 = _interopRequireDefault(_feedComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'postWasAdded',
        value: function postWasAdded() {

            console.log('The App now knows that a post was added');

            this.header.raiseNrOfPosts();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'page' },
                _react2.default.createElement(_headerComponent2.default, { ref: function ref(el) {
                        _this2.header = el;
                    } }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_leftMenuComponent2.default, null),
                    _react2.default.createElement(_feedComponent2.default, { postWasAdded: this.postWasAdded.bind(this) }),
                    _react2.default.createElement(_contactsMenuComponent2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            unread_posts: 0
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'raiseNrOfPosts',
        value: function raiseNrOfPosts() {
            this.setState({ // changes the state
                unread_posts: this.state.unread_posts + 1 //by assigning a value bigger by 1
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                'Unread posts: ',
                _react2.default.createElement(
                    'span',
                    { className: 'unread' },
                    this.state.unread_posts
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenu = function (_React$Component) {
            _inherits(LeftMenu, _React$Component);

            function LeftMenu() {
                        _classCallCheck(this, LeftMenu);

                        return _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).apply(this, arguments));
            }

            _createClass(LeftMenu, [{
                        key: 'render',
                        value: function render() {
                                    return _react2.default.createElement(
                                                'nav',
                                                { className: 'Leftmenu' },
                                                _react2.default.createElement(
                                                            'h2',
                                                            null,
                                                            'You'
                                                ),
                                                _react2.default.createElement(
                                                            'a',
                                                            { href: '#' },
                                                            'Selected posts'
                                                ),
                                                _react2.default.createElement(
                                                            'a',
                                                            { href: '#' },
                                                            'Messenger'
                                                ),
                                                _react2.default.createElement(
                                                            'a',
                                                            { href: '#' },
                                                            'Marketplace'
                                                )
                                    );
                        }
            }]);

            return LeftMenu;
}(_react2.default.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_React$Component) {
    _inherits(Contacts, _React$Component);

    function Contacts() {
        _classCallCheck(this, Contacts);

        return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
    }

    _createClass(Contacts, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'Contacts' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Contacts'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Mark Zuckerberg'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Jana Ve\u010Derkov\xE1'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Ada Lovelace'
                )
            );
        }
    }]);

    return Contacts;
}(_react2.default.Component);

exports.default = Contacts;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(15);

var _jquery2 = _interopRequireDefault(_jquery);

var _newPost = __webpack_require__(33);

var _newPost2 = _interopRequireDefault(_newPost);

var _post = __webpack_require__(34);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//libraries


//components


var Feed = function (_React$Component) {
    _inherits(Feed, _React$Component);

    function Feed(props) {
        _classCallCheck(this, Feed);

        var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, props));

        _this.state = {
            posts: [],

            orderby: 'date',
            limit: 10,
            from_friends_only: false,
            current_datetime: null

        };
        return _this;
    }

    // ComponentDidMount is automatically called after components has been rendered


    _createClass(Feed, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.refreshPosts();
        }

        /*
        * runs AJAX and loads posts from API
        */

    }, {
        key: 'refreshPosts',
        value: function refreshPosts() {
            var _this2 = this;

            _jquery2.default.ajax({
                method: 'get',
                url: 'api/all-posts.php',
                dataType: 'json',
                success: function success(data) {
                    // => doesnt need binding


                    console.log(data);
                    _this2.setState({
                        posts: data.posts
                    });
                }
            });
        }
    }, {
        key: 'newPostWasAdded',
        value: function newPostWasAdded() {

            this.refreshPosts();

            this.props.postWasAdded(); // lifting the state up
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            // prepare an array of  <Post /> components
            var posts = [];
            for (var i in this.state.posts) {
                var post_data = this.state.posts[i];

                posts[i] = _react2.default.createElement(_post2.default, {
                    key: post_data.id,
                    title: post_data.title,
                    text: post_data.text,
                    published_at: post_data.published_at,
                    likes: post_data.likes
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'Feed' },
                _react2.default.createElement(_newPost2.default, { functionToRun: this.newPostWasAdded.bind(this) }),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this3.refreshPosts();
                        } },
                    'refresh '
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    posts
                )
            );
        }
    }]);

    return Feed;
}(_react2.default.Component);

exports.default = Feed;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(15);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPost = function (_React$Component) {
    _inherits(NewPost, _React$Component);

    function NewPost(props) {
        _classCallCheck(this, NewPost);

        //set initial state of this component
        var _this = _possibleConstructorReturn(this, (NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call(this, props));

        _this.state = {
            new_post_text: '' //deafault value - empty string 
        };
        return _this;
    }

    _createClass(NewPost, [{
        key: 'formSubmitted',
        value: function formSubmitted(event) {
            var _this2 = this;

            event.preventDefault(); // stop the form from actually being submitted
            _jquery2.default.ajax({
                method: 'post',
                url: 'api/create-posts.php',
                data: { // where we get data from
                    text: this.state.new_post_text

                },
                success: function success(data) {
                    // => doesnt need binding
                    _this2.props.functionToRun();

                    _this2.setState({
                        new_post_text: ''
                    });
                }
            });
        }
    }, {
        key: 'textChanged',
        value: function textChanged(event) {
            this.setState({
                new_post_text: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'new_post' },
                _react2.default.createElement(
                    'form',
                    { action: '', onSubmit: function onSubmit(event) {
                            return _this3.formSubmitted(event);
                        } },
                    _react2.default.createElement('textarea', { name: 'text', id: '', cols: '30', rows: '10', placeholder: 'What are you thinking about?', value: this.state.new_post_text,
                        onChange: function onChange(event) {
                            return _this3.textChanged(event);
                        }
                    }),
                    _react2.default.createElement('input', { type: 'submit', value: 'add' })
                )
            );
        }
    }]);

    return NewPost;
}(_react2.default.Component);

exports.default = NewPost;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
            _inherits(Post, _React$Component);

            function Post() {
                        _classCallCheck(this, Post);

                        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
            }

            _createClass(Post, [{
                        key: 'render',
                        value: function render() {
                                    return _react2.default.createElement(
                                                'li',
                                                { className: 'post' },
                                                _react2.default.createElement(
                                                            'div',
                                                            { className: 'user' },
                                                            'You'
                                                ),
                                                _react2.default.createElement(
                                                            'div',
                                                            { className: 'time' },
                                                            this.props.published_at
                                                ),
                                                _react2.default.createElement(
                                                            'h3',
                                                            null,
                                                            this.props.title
                                                ),
                                                _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            this.props.text
                                                ),
                                                _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            this.props.likes
                                                )
                                    );
                        }
            }]);

            return Post;
}(_react2.default.Component);

exports.default = Post;

/***/ })

},[16]);