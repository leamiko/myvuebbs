const ls = localStorage
export default {
    setItem(name, value) {
        // console.log('ls.setItem', name);
        ls.setItem(name, JSON.stringify(value))
    },
    
    getItem(name) {
        // console.log('ls.getItem', name);
        try {
            return JSON.parse(ls.getItem(name))
        } catch (error) {
            return null
        }
    },

    removeItem(name) {
        ls.removeItem(name)
    }
}