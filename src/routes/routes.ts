import { lazy, LazyExoticComponent } from 'react'
// import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../01.LazyLoad/pages/index'

type JSXComponent = () => JSX.Element
interface Route {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const lazy1 = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyLoad1"*/ '../01.LazyLoad/pages/LazyLoad1'
        )
)
const lazy2 = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyLoad2"*/ '../01.LazyLoad/pages/LazyLoad2'
        )
)
const lazy3 = lazy(
    () =>
        import(
            /* webpackChunkName: "LazyLoad3"*/ '../01.LazyLoad/pages/LazyLoad3'
        )
)

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'lazy-1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'lazy-2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'lazy-3',
    },
]
