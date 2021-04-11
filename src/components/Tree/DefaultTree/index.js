import { Tree } from 'components/Tree';
import { treeData } from 'components/Tree/DefaultTree/treeData';

export const DefaultTree = () => {
  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      treeData={treeData}
    />
  );
};
