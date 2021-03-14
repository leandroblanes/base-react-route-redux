import React from 'react'

const Notas = React.lazy(() => import('./Notas/Notas'));
const MateriaisDidaticos = React.lazy(() => import('./MateriaisDidaticos/MateriaisDidaticos'));
const NotasFiscais = React.lazy(() => import('./NotasFiscais/NotasFiscais'));
const Boletos = React.lazy(() => import('./Boletos/Boletos'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/notas', name: 'Notas', component: Notas },
    { path: '/materiaisDidaticos', name: 'Materiais Didáticos', component: MateriaisDidaticos },
    { path: '/notasFiscais', name: 'Notas Fiscais', component: NotasFiscais },
    { path: '/boletos', name: 'Boletos', component: Boletos },
]

export default routes