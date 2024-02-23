function componentRender(App , root) {
    const docElement = document.createElement(App.type);
    docElement.innerHTML = App.child
    for (const prop in App.props) {
        if (prop === "child") continue;
        docElement.setAttribute(prop,App.props[prop])  
        }
        root.appendChild(docElement);
    } 
    


const App = {
    type: "a",
    props:{
        href: "https://google.com",
        traget:"_blank"
    },
    child:"Google"

}


const root = document.getElementById( 'root' );

componentRender( App, root );