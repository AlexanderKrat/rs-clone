import createBaseMathUp from "./matchUp/createBaseMathUp";
import openMatchUpGame from "./matchUp/openMatchUpGame";
import openSection from "./openSection";
import formForSticks from "./sticks/formForSticks";
import openSticks from "./sticks/openSticks";

const render: any = (path: any) => {
    if (path == "#/" || path == "") {
        openSection('');
    } else if (path == "#/addGame") {
        openSection('selectionBlock');
    } else if (path.split('=')[0] == "#/nameGame") {
        if (path.split('=')[1].split('&')[0] === 'machUp') {
            openMatchUpGame(path);
            openSection('matchUp-game');
        } else if (path.split('=')[1].split('&')[0] === 'sticks') {
            openSticks()
            openSection('sticks-place')
        }
    }
    else if (path == '#/addGame/matchUp-form') {
        if(!document.querySelector('.matchUp-form')){
            createBaseMathUp();
        }
        openSection('matchUp-form');
    } else if (path == '#/addGame/sticks-form') {
        if(!document.querySelector('.sticks-form')){
            formForSticks()
        }
        openSection('sticks-form');
    } else {
        openSection('erore-block')
    }

    document.querySelectorAll('[href^="/"]').forEach(el =>
        el.addEventListener("click", (evt: any) => {
            evt.preventDefault();
            const { pathname: path } = new URL(evt.target.href);
            window.history.pushState({ path }, path, path);
            render(path);
        })
    );
};
window.addEventListener("popstate", () => {
    render(new URL(window.location.href).hash)
});
render("#/");

export default render

class Router {
    routes: any = [];

    mode: any = null;

    root: any = '/';

    constructor(options: any) {
        let pushState: any = window.history.pushState
        this.mode = pushState ? 'history' : 'hash';
        if (options.mode) this.mode = options.mode;
        if (options.root) this.root = options.root;
        this.listen();
    }

    add: any = (path: any, cb: any) => {
        this.routes.push({ path, cb });
        return this;
    };

    remove: any = (path: any) => {
        for (let i = 0; i < this.routes.length; i += 1) {
            if (this.routes[i].path === path) {
                this.routes.slice(i, 1);
                return this;
            }
        }
        return this;
    };

    flush: any = () => {
        this.routes = [];
        return this;
    };

    clearSlashes: any = (path: any) =>
        path
            .toString()
            .replace(/\/$/, '')
            .replace(/^\//, '');

    getFragment: any = () => {
        let fragment = '';
        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root !== '#/' ? fragment.replace(this.root, '') : fragment;
        } else {
            const match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    };

    navigate: any = (path = '') => {
        if (this.mode === 'history') {
            window.history.pushState(null, 'null', this.root + this.clearSlashes(path));
        } else {
            window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
        }
        return this;
    };

    listen: any = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.interval, 50);
    };

    interval: any = () => {

        if (router.current === this.getFragment()) return;
        router.current = this.getFragment();

        this.routes.some((route: any) => {
            const match = router.current.match(route.path);
            if (match) {
                match.shift();
                route.cb.apply({}, match);
                return match;
            }
            return false;
        });
    };
}

const router: any = new Router({
    mode: 'hash',
    root: '/'
});

