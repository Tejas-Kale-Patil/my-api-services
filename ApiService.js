import { Component } from 'react';
import { decode as base64Decode, encode as base64Encode } from 'js-base64';
class ApiService extends Component {
    // logoUrl = `https://johnfrancis.ca/en/wp-content/uploads/2017/02/YourLogo.png`

    apiUrl(url) {
        return url = 'https://example.com/api'
    }

    apiImageShow() {
        return 'https://example.com/api'
    }

    async apiCall(endpoint, auth = "", body = null, method = 'GET') {
        try {
            let url = this.apiUrl()
            const requiestObject = {
                method: method,
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth },
            }
            if (body !== null)
                requiestObject.body = JSON.stringify(body)

            let myUrl = `${url}${endpoint}`
            let response = await fetch(myUrl, requiestObject)
            let mydata = response.json();
            if (mydata.data)
                return mydata.data
            else
                return mydata.error ? mydata.error : mydata
        } catch (error) {
            console.log(error);
        }

    }


    async apiCallFormData(endpoint, auth = " ", body, method = 'POST') {
        try {
            let url = this.apiUrl()
            const requiestObject = {
                method: method,
                headers: { 'Authorization': 'Bearer ' + auth },
            }
            if (body !== null)
                requiestObject.body = body

            let myUrl = `${url}${endpoint}`
            console.log(myUrl, requiestObject);
            let response = await fetch(myUrl, requiestObject)
            let mydata = response.json();
            if (mydata.data)
                return mydata.data
            else
                return mydata.error ? mydata.error : mydata
        } catch (error) {
            console.log(error);
        }
    }
    async imageUpload(endpoint, auth = " ", body, method = 'POST') {
        try {
            let url = this.apiUrl()
            const requiestObject = {
                method: method,
            }
            if (body !== null)
                requiestObject.body = body

            let myUrl = `${url}${endpoint}`
            console.log(myUrl, requiestObject);
            let response = await fetch(myUrl, requiestObject)
            let mydata = response.json();
            if (mydata.data)
                return mydata.data
            else
                return mydata.error ? mydata.error : mydata
        } catch (error) {
            console.log(error);
        }
    }

    async setLocalStorage(key, value) {
        let objValue = JSON.stringify(value)
        let encodedValue = base64Encode(objValue)
        localStorage.setItem(key, encodedValue)
    }
    async getLocalStorage(key) {
        let value = localStorage.getItem(key)
        let endcodedValue = value !== null ? base64Decode(value) : null
        let decodedValue = endcodedValue !== null ? JSON.parse(endcodedValue) : null
        return decodedValue
    }

}
const apiservice = new ApiService()
export default apiservice;
