import LinkedList from "./src/LinkedList";
import BinaryTree from "./src/BinaryTree";

const test = new BinaryTree();
test.addValue(1);
test.addValue(10);
test.addValue(100);
test.addValue(-1);
test.addValue(-11);
test.addValue(-111);
test.addValue(111);
test.addValue(13);
test.addValue(12);

test.depthFirstTraversal(console.log);
