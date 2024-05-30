/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-25 22:33:55
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-30 12:39:15
 * @FilePath: \react\packages\react-reconciler\src\fiberFlag.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const NoFlags = 0b0000001;
export const Placement = 0b0000010;
export const Update = 0b0000100;
export const ChildDeletion = 0b0001000;
export const MutationMask = Placement | Update | ChildDeletion;

export type Flags = number;
