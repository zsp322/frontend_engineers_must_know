// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Facebook DOM Traversal</title>
// </head>
// <body>
//   <div id="rootA">
//     <div>
//       <div></div>
//     </div>
//     <div></div>
//     <div>
//       <div>
//         <div id="nodeA"></div>
//         <div></div>
//       </div>
//     </div>
//   </div>
//   <div id="rootB">
//     <div>
//       <div></div>
//     </div>
    
//     <div></div>
    
//     <div>
//       <div>
//         <div id="nodeB"></div>
//         <div></div>
//       </div>
//     </div>
//   </div>
// </body>
// </html>


const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');

const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');


function getPath(node, root) {

    const path = [];
    
    while (node != root) {
        let parent = curNode.parentElement;
        let children = Array.from(parent.children);
        let childIndex = children.indexOf(curNode);
    
        path.push(childIndex);
    }
    return path;
}


function getNode(path, root) {
   const toWalk = [...path];

   while (toWalk.length) {
       node = node.children[toWalk.pop()];
   }
   return node;
}

function findTheNode() {
    const path = getPath(nodeA, rootA);
    const resNode = getNode(path, rootB);
    
    return resNode;
}