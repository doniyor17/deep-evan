import { h } from 'vue'


const App = {  
    // render(){
    //     /** 
    //      * * How render function works in vue-3 and using v-if directive inside the render function
    //      */
    //     return this.ok ? 
    //     h('div', {  }, [
    //         h('span', {class: 'child1'}, 'I am just span'),
    //     ])
    //     : h('div', {  }, [
    //         h('p', {class: 'child1'}, 'I am P tag'),
    //     ]) 
    // }
    // <div>
    //     <span v-if="ok">I am just span</span>
    //     <p v-else>I am P tag</p>
    // </div>

    // render(){
        /** 
         * * How can we use v-for directive inside the render function
         * ? v-for="item in list"
         */
        // return this.list.map(item => {
        //     return h('div', {key: item.key}, item.text)
        // })
        // <div v-for="item in list" :key="item.id">
        //     {{ item.text }}
        // </div>  
    // }
    // render(){
    //     /** 
    //      * * How can we use slots inside the render function
    //      */
    //     const slot = this.$slots.default? this.$slots.default() : []; // ! it always returns a array[] 

    // }
};

/**
 * ? Usage of slots in real example
 */

// const Stack = {
//     render(){
//         const slot = this.$slots.default? this.$slots.default() : [];

//         return h('div', {class: 'stack'},  slot.map(children => {
//             return h('div', {class: `mt-${this.$props.size}`} [children])
//         }))
//     }
// }

function render(){
    return h('div',{}, [
        h('div', {}, [
            h('span', 'hello')
        ])
    ])
}

const vdom = {
    tag: 'div',
    children: [
        {
            tag: 'div',
            children: [
                {
                    tag: 'span',
                    children: 'hello'
                }
            ]
        }
    ]
}