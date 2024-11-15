import Global from "@/Global"
import axios from "axios"

export default class ServiceCubo {
    getCubos() {
        return new Promise (function (resolve) {
            let request = "api/Cubos"
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })
    }

    getMarcas() {
        return new Promise (function (resolve) {
            let request = "api/Cubos/Marcas"
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })
    }

    findCubo(id) {
        return new Promise (function (resolve) {
            let request = "api/Cubos/" + id
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })
    }

    getComentarios(id) {
        return new Promise (function (resolve) {
            let request = "api/ComentariosCubo/GetComentariosCubo/" + id
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })
    }

    getCubosMarca(marca) {
        return new Promise (function (resolve) {
            let request = "api/Cubos/CubosMarca/" + marca
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                resolve(response)
            })
        })
    }

    logIn(user) {
        return new Promise (function (resolve) {
            let request = "api/manage/login"
            let url = Global.urlApi + request
            axios.post(url, user).then(response => {
                resolve(response)
            })
        })
    }
    getUser() {
        return new Promise (function (resolve) {
            let token = localStorage.getItem('token')
            let request = "api/Manage/PerfilUsuario"
            let url = Global.urlApi + request
            axios.get(url, {
                headers: {
                    "Authorization": 'Bearer ' + token
                }
            }).then(response => {
                resolve(response)
            })
        })
    }
    getCompras() {
        return new Promise (function (resolve) {
            let token = localStorage.getItem('token')
            let request = "api/Compra/ComprasUsuario"
            let url = Global.urlApi + request
            axios.get(url, {
                headers: {
                    "Authorization": 'Bearer ' + token
                }
            }).then(response => {
                resolve(response)
            })
        })
    }

    insertPedido(id) {
        return new Promise (function (resolve) {
            let token = localStorage.getItem('token')
            let request = "api/Compra/InsertarPedido/" + id
            let url = Global.urlApi + request
            axios.post(url, "", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + token
                }
            }).then(response => {
                resolve(response)
            })
        })
    }
}