import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01.LazyLoad/pages/NoLazy'

type JSXComponent = () => JSX.Element
interface Route {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLoad1"*/ '../01.LazyLoad/layout/LazyLayout'
    )
)

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'lazyLauout - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'no-lazy',
  },
]
