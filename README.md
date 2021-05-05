## How to put three.js scene into react.js app: 

1. [Create](https://github.com/facebook/create-react-app) react app: `create-react-app my-app`
2. Add three.js: `yarn add three`
3. Copy and paste [spinning cube example from three.js front page](https://github.com/mrdoob/three.js/#usage), and [expose a function to interact with react.js](https://github.com/makc/react-three-example/blob/master/src/cube/3d.js#L66):

```js
export function mount( container ) {
    if( container ) {
        container.insertBefore( renderer.domElement, container.firstChild );
        resize();
    } else {
        renderer.domElement.parentNode.removeChild( renderer.domElement );
    }
}
```

In [react component](https://github.com/makc/react-three-example/blob/master/src/cube/index.js), pass this function to [useCallback](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs):

```js
import { mount } from './3d';

export default function Cube() {
    const containerRef = useCallback(mount, []);
    return <div className="Cube-container" ref={containerRef}></div>
}
```
